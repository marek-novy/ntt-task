import { PaginationTypes } from "./Pagination.types.ts";

const Pagination = ({
  page,
  limit,
  isPrevDisabled,
  isNextDisabled,
  handleChangePage,
  handleChangeLimit,
}: PaginationTypes) => {
  return (
    <div>
      <div className="flex mt-4 justify-around items-center">
        <button
          className="bg-buttons-primary hover:bg-buttons-primary-hover disabled:bg-buttons-primary-disable text-white font-bold py-2 px-4 rounded"
          onClick={() => handleChangePage(page - 1)}
          disabled={isPrevDisabled}
        >
          Prev
        </button>
        <span className="mx-2">{page}</span>
        <button
          className="bg-buttons-primary hover:bg-buttons-primary-hover disabled:bg-buttons-primary-disable text-white font-bold py-2 px-4 rounded"
          onClick={() => handleChangePage(page + 1)}
          disabled={isNextDisabled}
        >
          Next
        </button>
      </div>
      <div className="mt-4">
        <label>Items per page:</label>
        <select
          value={limit}
          onChange={(e) => handleChangeLimit(Number(e.target.value))}
        >
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </div>
    </div>
  );
};

export default Pagination;
