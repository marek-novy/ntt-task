import { DogBreedsTypes } from "./DogBreeds.types";

const DogBreedsTable = ({ dogBreeds }: DogBreedsTypes) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Dog breeds</th>
        </tr>
      </thead>
      <tbody className="flex flex-col items-center">
        {dogBreeds.map((breed: string, index: number) => (
          <tr key={index}>
            <td>{breed}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DogBreedsTable;
