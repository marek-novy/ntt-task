import { createFileRoute } from "@tanstack/react-router";
import { Dogs } from '../dogs/components/Dogs';

type DogsSearch = {
  page: number;
}

export const Route = createFileRoute("/dogs")({
  validateSearch: (search: Record<string, unknown>): DogsSearch => {
    return {
      page: Number(search?.page ?? 1)
    };
  },
  component: Dogs,
});