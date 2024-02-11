import { Link } from "@tanstack/react-router";
import { Route } from "../../routes/dogs";
import { dogsState } from "../state/DogsState";
import { getVisibleNumbers } from "../utils/visiblePagesGenerator";
import { observer } from "mobx-react";

export const Pagination = observer(() => {
    const { page } = Route.useSearch();
    const { totalPages } = dogsState;
    return (
      <div className="flex justify-center items-center mt-4">
          <div className="flex space-x-2">
            {page !== 1 && (
                <Link to="/dogs" search={{page: 1}}>
                    <button
                        className="bg-blue-500 text-white px-3 py-1 rounded focus:outline-none focus:shadow-outline"
                    >
                        First
                    </button>
                </Link>
            )}
            {getVisibleNumbers(page, totalPages).map((number, index) => {
                const isCurrent = number === page;
                return (
                    <Link to="/dogs" search={{page: number}} key={index}>
                        <button
                            className={`${isCurrent ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'} px-3 py-1 rounded focus:outline-none focus:shadow-outline`}
                        >
                            {number}
                        </button>
                    </Link>
                );
            })}
            {page !== totalPages && (
                <Link to="/dogs" search={{page: totalPages}}>
                    <button
                        className="bg-blue-500 text-white px-3 py-1 rounded focus:outline-none focus:shadow-outline"
                    >
                        Last
                    </button>
                </Link>
            )}
          </div>
        </div>
    );
  });