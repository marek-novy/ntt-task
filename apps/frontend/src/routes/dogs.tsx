import { createFileRoute } from "@tanstack/react-router";
import { Dogs } from '../dogs/components/Dogs';

export const Route = createFileRoute("/dogs")({
  component: Dogs,
});