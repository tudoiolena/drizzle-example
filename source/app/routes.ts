import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("login", "routes/login/login.tsx"),
  route("logout", "routes/logout/logout.tsx"),
] satisfies RouteConfig;
