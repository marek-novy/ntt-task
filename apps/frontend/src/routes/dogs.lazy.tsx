import { createLazyFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { observer } from "mobx-react";
import dogBreedsStore from "../store/DogBreedsStore.ts";
import DogBreedsTable from "../components/DogBreedsTable/DogBreedsTable.tsx";
import Loader from "../components/Loader/Loader.tsx";
import Error from "../components/Error/Error.tsx";
import Pagination from "../components/Pagination/Pagination.tsx";
// import { useEffect } from 'react';

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

  if (isPending) {
    return <Loader />;
  }

  if (error) {
    return <Error errorMessage={error.message} />;
  }

  const handleChangePage = (newPage: number) => {
    dogBreedsStore.setPage(newPage);
  };

  const handleChangeLimit = (newLimit: number) => {
    dogBreedsStore.setLimit(newLimit);
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
