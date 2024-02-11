import { createFileRoute } from "@tanstack/react-router";
import { PaginableDogsDto } from "../model/types";
import { DogsTable } from "../dogs/components/DogsTable";
import { Pagination } from "../dogs/components/Pagination";
import { useState } from "react";

export const Route = createFileRoute("/dogs")({
  component: Dogs,
});

function Dogs() {
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