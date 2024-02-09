import { createLazyFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { observer } from "mobx-react";
import dogBreedsStore from "../store/DogBreedsStore.ts";
import DogBreedsTable from "../components/DogBreedsTable/DogBreedsTable.tsx";
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

  const handleChangePage = (newPage: number) => {
    dogBreedsStore.setPage(newPage);
  };

  const handleChangeLimit = (newLimit: number) => {
    dogBreedsStore.setLimit(newLimit);
  };

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching dog breeds: {error.message}</div>;
  }

  return (
    <div className="p-2 flex justify-center flex-col items-center">
      <DogBreedsTable dogBreeds={dogBreeds} />
      <div className="flex mt-4 justify-around items-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 disabled:bg-gray-500 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleChangePage(dogBreedsStore.page - 1)}
          disabled={dogBreedsStore.page === 1}
        >
          Prev
        </button>
        <span className="mx-2">{dogBreedsStore.page}</span>
        <button
          className="bg-blue-500 hover:bg-blue-700 disabled:bg-gray-500 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleChangePage(dogBreedsStore.page + 1)}
          disabled={dogBreeds.length < dogBreedsStore.limit}
        >
          Next
        </button>
      </div>
      <div className="mt-4">
        <label>Items per page:</label>
        <select
          value={dogBreedsStore.limit}
          onChange={(e) => handleChangeLimit(Number(e.target.value))}
        >
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </div>
    </div>
  );
});

export const Route = createLazyFileRoute("/dogs")({
  component: Dogs,
});
