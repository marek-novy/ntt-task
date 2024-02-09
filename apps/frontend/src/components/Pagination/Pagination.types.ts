export type PaginationTypes = {
  page: number;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
  limit: number;
  handleChangePage: (page: number) => void;
  handleChangeLimit: (page: number) => void;
};
