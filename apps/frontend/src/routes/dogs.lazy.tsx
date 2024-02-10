import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { observer } from "mobx-react";
import dogBreedsStore from "../store/DogBreedsStore.ts";
import DogBreedsTable from "../components/DogBreedsTable/DogBreedsTable.tsx";
import Loader from "../components/Loader/Loader.tsx";
import Error from "../components/Error/Error.tsx";
import Pagination from "../components/Pagination/Pagination.tsx";
import { useEffect } from "react";

const Dogs = observer(() => {
  const {
    isPending,
    data: dogBreeds = [],
    error,
  } = useQuery({
    queryKey: ["dogBreeds", dogBreedsStore.page, dogBreedsStore.limit],
    queryFn: () =>
      fetch(
        `/api/dog-breeds?page=${dogBreedsStore.page}&limit=${dogBreedsStore.limit}`,
      ).then((res) => res.json()),
  });
  const navigate = useNavigate();
  const route: { page?: number; limit?: number } = Route.useSearch();

  useEffect(() => {
    if (route.page && route.limit) {
      dogBreedsStore.setPage(route.page);
      dogBreedsStore.setLimit(route.limit);
    }
  }, [route]);

  if (isPending) {
    return <Loader />;
  }

  if (error) {
    return <Error errorMessage={error.message} />;
  }

  const handleChangePage = (newPage: number) => {
    dogBreedsStore.setPage(newPage);
    navigate({
      to: "/dogs",
      search: { page: dogBreedsStore.page, limit: dogBreedsStore.limit },
    });
  };

  const handleChangeLimit = (newLimit: number) => {
    dogBreedsStore.setPage(1);
    dogBreedsStore.setLimit(newLimit);
    navigate({
      to: "/dogs",
      search: { page: dogBreedsStore.page, limit: dogBreedsStore.limit },
    });
  };

  return (
    <div className="p-2 flex justify-center flex-col items-center">
      <DogBreedsTable dogBreeds={dogBreeds} />
      <Pagination
        page={dogBreedsStore.page}
        limit={dogBreedsStore.limit}
        isPrevDisabled={dogBreedsStore.page === 1}
        isNextDisabled={dogBreeds.length < dogBreedsStore.limit}
        handleChangePage={handleChangePage}
        handleChangeLimit={handleChangeLimit}
      />
    </div>
  );
});

export const Route = createLazyFileRoute("/dogs")({
  component: Dogs,
});
