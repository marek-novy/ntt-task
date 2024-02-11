import { PropsWithChildren } from "react";
import { DogDto } from "../../model/types";

interface DogsTableProps {
    dogs: DogDto[]
}

export function DogsTable(props: PropsWithChildren<DogsTableProps>) {
    const { dogs } = props;
    return (
      <table className="min-w-full bg-white border border-gray-400">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border-r border-b border-gray-400">Breed Name</th>
            <th className="py-2 px-4 border-b border-l border-gray-400">Known Synonyms</th>
          </tr>
        </thead>
        <tbody>
          {dogs.length > 0
            ? (
              <>
                {dogs.map((dog, index) => {
                  const borderB = index === dogs.length - 1 ? '' : 'border-b';
                  const synonyms = dog.synonyms ? dog.synonyms.join(', ') : '-';
                  return (
                    <tr key={index}>
                      <td className={`py-2 px-4 border-r ${borderB} text-center`}>{dog.breedName}</td>
                      <td className={`py-2 px-4 ${borderB} text-center`}>{synonyms}</td>
                    </tr>
                  );
                })}
              </>
            )
            : (
              <tr>
                <td className="py-2 px-4 border-r border-b text-center">a</td>
                <td className="py-2 px-4 border-b text-center">b</td>
              </tr>
            )
          }
        </tbody>
      </table>
    );
  }