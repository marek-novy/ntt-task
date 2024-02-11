import { createFileRoute } from "@tanstack/react-router";
import { CachedDogsData, PaginableDogsDto } from "../model/types";
import { DogsTable } from "../dogs/components/DogsTable";
import { Pagination } from "../dogs/components/Pagination";
import { useEffect, useState } from "react";
import { useFetchDogs } from "../dogs/hooks/useFetchDogs";

export const Route = createFileRoute("/dogs")({
  component: Dogs,
});

function Dogs() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number>(Number.MAX_SAFE_INTEGER);
  const [cachedDogData, setCachedDogData] = useState<CachedDogsData>({});

  const fetchDogs = useFetchDogs();

  const [data, setData] = useState<PaginableDogsDto>(
    {
      dogs: [
        {
          breedName: 'a',
          synonyms: ['b']
        },
        {
          breedName: 'c',
          synonyms: ['d', 'e']
        },
        {
          breedName: 'f'
        }
      ],
      page: 1,
      totalPages: 47
    }
  );

  const updatePage = (page: number) => {
    setData(prev => (
      {
        ...prev,
        page
      }
    ))
  }

  useEffect(() => {
    fetchDogs(1);
  }, []);

  return (
    <div className="p-2">
      <h3>Welcome Dogs!</h3>
      Page number now is {data.page}

      <div className="container mx-auto mt-8">
        <DogsTable dogs={data.dogs}/>
        <Pagination
          currentPage={data.page}
          totalPages={data.totalPages}
          goToPage={updatePage}
        />
      </div>
    </div>
  );
}