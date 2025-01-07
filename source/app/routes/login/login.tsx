import { env } from "node:process";
import { Form, redirect, type MetaFunction } from "react-router";
import { createUserSession, getUserId } from "~/services/session.server";
import type { Route } from "./+types/login";
import { TextField } from "~/components/TextField";
import { withZod } from "@rvf/zod";
import { z } from "zod";
import { PasswordField } from "~/components/PasswordField";
import { Button } from "~/components/Button";

export const meta: MetaFunction = () => {
  return [
    { title: "Login" },
    { name: "description", content: "Welcome to Login page!" },
  ];
};

export async function loader({ request }: Route.LoaderArgs) {
  // Check if the user is already logged in
  const userId = await getUserId(request);
  if (userId) {
    return redirect("/");
  }
}

// export const validator = withZod(
//   z.object({
//     email: z.string().email({ message: "Email required" }),
//     password: z
//       .string()
//       .min(6, { message: "Password must be at least 6 characters" }),
//   })
// );

export async function action({ request }: Route.ActionArgs) {
  let response: Response;
  try {
    const formData = await request.formData();
    console.log("formData", formData);

    // const validetedFormData = validator.validate(formData);
    // console.log("validetedFormData", validetedFormData);
    // const { email, password } = validetedFormData;
    // console.log("email", email);
    // console.log("password", password);
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    // Check the user's credentials
    if (!env.DEFAULT_ADMIN_EMAIL || !env.DEFAULT_ADMIN_PASSWORD) {
      throw new Error(
        "Environment variables DEFAULT_ADMIN_EMAIL and DEFAULT_ADMIN_PASSWORD must be set."
      );
    }

    if (
      email !== env.DEFAULT_ADMIN_EMAIL ||
      password !== env.DEFAULT_ADMIN_PASSWORD
    ) {
      throw new Error("Invalid email or password");
    }

    // Create a session
    response = await createUserSession({
      request,
      userId: env.DEFAULT_ADMIN_EMAIL,
      remember: true,
    });

    if (!response) {
      throw new Error("An error occurred while creating the session");
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log("error", error);
      return { error: error.message };
    }

    return { error: "An unknown error occurred" };
  }

  throw response;
}

export default function Login({ actionData }: Route.ComponentProps) {
  return (
    <div className="p-8 min-w-3/4 w-96 m-auto">
      <h1 className="text-2xl text-center">Login</h1>
      <Form
        method="post"
        className="mt-6 flex gap-3 flex-col justify-center align-center"
      >
        <TextField
          label={"Email"}
          error={actionData?.error}
          placeholder="your_email@example.com"
          name="email"
        />
        <PasswordField
          label="Password"
          error={actionData?.error}
          placeholder="******"
          name="password"
        />
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
}
