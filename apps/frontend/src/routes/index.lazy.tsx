import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex justify-center p-2">
      <h3>Welcome Home!</h3>
    </div>
  );
}
