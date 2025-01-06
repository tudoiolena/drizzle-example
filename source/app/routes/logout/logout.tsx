import { type MetaFunction } from "react-router";
import { redirect } from "react-router";
import { logout } from "~/services/session.server";
import type { Route } from "./+types/logout";

export const meta: MetaFunction = () => {
  return [
    { title: "Logout" },
    { name: "description", content: "Welcome to Logout page!" },
  ];
};

/**
 * Action function for the logout route.
 * Handles the logout process when a POST request is made to this route.
 *
 * @param {Route.ActionArgs} params - The action arguments.
 * @returns {Promise<Response>} Redirect response after logging out.
 */
export async function action({ request }: Route.ActionArgs) {
  return logout(request);
}

/**
 * Loader function for the logout route.
 * Redirects to the login page if accessed directly.
 *
 * @param {Route.LoaderArgs} params - The loader arguments.
 * @returns {Response} Redirect response to the login page.
 */
export async function loader({ request }: Route.LoaderArgs) {
  return redirect("/login");
}
