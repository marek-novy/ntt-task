import { createFileRoute } from "@tanstack/react-router";
import { CachedDogsData } from "../model/types";
import { DogsTable } from "../dogs/components/DogsTable";
import { Pagination } from "../dogs/components/Pagination";
import { useCallback, useEffect, useState } from "react";
import { useFetchDogs } from "../dogs/hooks/useFetchDogs";

export const Route = createFileRoute("/dogs")({
  component: Dogs,
});

function Dogs() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number>(Number.MAX_SAFE_INTEGER);
  const [cachedDogData, setCachedDogData] = useState<CachedDogsData>({});

  const fetchDogs = useFetchDogs();

  const fetch = useCallback(async () => {
    const data = await fetchDogs(page);
    if (!data) {
      // TODO do something?
      return;
    }
    setPage(data.page);
    if (totalPages !== data.totalPages) {
      setTotalPages(data.totalPages);
    }
    if (!cachedDogData[data.page]) {
      setCachedDogData(prev => {
        const newData = {
          ...prev
        };
        newData[data.page] = data.dogs;
        return newData;
      });
    }
  }, [fetchDogs, page, totalPages, cachedDogData]);

  const updatePage = (newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {
    console.log(`### initial called`);
    fetch();
  }, []);

  useEffect(() => {
    console.log(`### other called`);
    fetch();
  }, [page, fetch]);

  return (
    <div className="p-2">
      <h3>Welcome Dogs!</h3>
      Page number now is {page}

      <div className="container mx-auto mt-8">
        <DogsTable dogs={cachedDogData[page]}/>
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          goToPage={updatePage}
        />
      </div>
    </div>
  );
}