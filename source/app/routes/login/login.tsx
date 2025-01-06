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

export const validator = withZod(
  z.object({
    email: z.string().email({ message: "Email required" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
  })
);

export async function action({ request }: Route.ActionArgs) {
  let response: Response;
  try {
    const formData = await request.formData();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    // Check the user's credentials
    if (email !== "default_admin@mexample.com" || password !== "password") {
      throw new Error("Invalid email or password");
    }

    // Create a session
    response = await createUserSession({
      request,
      userId: "default_admin@mexample.com",
      remember: true,
    });

    if (!response) {
      throw new Error("An error occurred while creating the session");
    }
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }

    return { error: "An unknown error occurred" };
  }

  throw response;
}

export default function Login({ actionData }: Route.ComponentProps) {
  return (
    <div className="p-8 min-w-3/4 w-96">
      <h1 className="text-2xl">Login</h1>
      <Form method="post" className="mt-6 ">
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
