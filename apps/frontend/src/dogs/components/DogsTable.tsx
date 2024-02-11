import { observer } from "mobx-react";
import { dogsState } from "../state/DogsState";
import { Route } from "../../routes/dogs";



export const DogsTable = observer(() => {
  const search = Route.useSearch();
  const { cachedDogData } = dogsState;
  const dogs = cachedDogData[search.page];
  if (!dogs) {
      return <h3>No dog data available</h3>;
  }
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
});