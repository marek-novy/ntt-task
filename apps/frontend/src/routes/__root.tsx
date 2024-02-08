import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <h1 className="block text-3xl font-bold underline text-center">
        NTT Task
      </h1>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold mr-2">
          Home
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
