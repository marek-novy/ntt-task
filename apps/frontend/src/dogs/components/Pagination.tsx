import { useNavigate } from "@tanstack/react-router";
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
                <PaginateFirst />
            )}
            {getVisibleNumbers(page, totalPages).map((number, index) => (
                <PaginateNumber key={index} number={number} />
            ))}
            {page !== totalPages && (
                <PaginateLast number={totalPages}/>
            )}
          </div>
        </div>
    );
  });

// eslint-disable-next-line mobx/missing-observer
const PaginateFirst = () => {
    const navigate = useNavigate({from: Route.fullPath});

    return (
        <button
            className="bg-blue-500 text-white px-3 py-1 rounded focus:outline-none focus:shadow-outline"
            onClick={() => {
                navigate({search: {page: 1}})
            }}
        >
            First
        </button>
    );
}

interface PaginatePageProps {
    number: number;
}

// eslint-disable-next-line mobx/missing-observer
const PaginateNumber = (props: PaginatePageProps) => {
    const { page } = Route.useSearch();
    const navigate = useNavigate({from: Route.fullPath});
    const isCurrent = props.number === page;
    return (
        <button
            className={`${isCurrent ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'} px-3 py-1 rounded focus:outline-none focus:shadow-outline`}
            onClick={() => {
                navigate({search: {page: props.number}})
            }}
        >
            {props.number}
        </button>
    );
}

// eslint-disable-next-line mobx/missing-observer
const PaginateLast = (props: PaginatePageProps) => {
    const navigate = useNavigate({from: Route.fullPath});

    return (
        <button
            className="bg-blue-500 text-white px-3 py-1 rounded focus:outline-none focus:shadow-outline"
            onClick={() => {
                navigate({search: {page: props.number}})
            }}
        >
            Last
        </button>
    );
}