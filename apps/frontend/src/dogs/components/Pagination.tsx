import { PropsWithChildren } from "react";
import { getVisibleNumbers } from "../utils/visiblePagesGenerator";

interface Props {
    currentPage: number;
    totalPages: number;
    goToPage: (page: number) => void;
}

export function Pagination(props: PropsWithChildren<Props>) {
    const { currentPage, totalPages, goToPage } = props;
    return (
      <div className="flex justify-center items-center mt-4">
          <div className="flex space-x-2">
            {currentPage !== 1 && (
                <button
                    className="bg-blue-500 text-white px-3 py-1 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => goToPage(1)}
                >
                    First
                </button>
            )}
            {getVisibleNumbers(currentPage, totalPages).map((number, index) => {
                const isCurrent = number === currentPage;
                return (
                    <button
                        key={index}
                        className={`${isCurrent ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'} px-3 py-1 rounded focus:outline-none focus:shadow-outline`}
                        onClick={() => goToPage(number)}
                    >
                        {number}
                    </button>
                );
            })}
            {currentPage !== totalPages && (
                <button
                    className="bg-blue-500 text-white px-3 py-1 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => goToPage(totalPages)}
                >
                    Last
                </button>
            )}
          </div>
        </div>
    );
  }