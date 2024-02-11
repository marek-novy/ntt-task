import { makeAutoObservable } from "mobx";

class DogBreedsStore {
  page: number = 1;
  limit: number = 10;

  constructor() {
    makeAutoObservable(this);
  }

  setPage(page: number) {
    this.page = page;
  }

  setLimit(limit: number) {
    this.limit = limit;
  }
}

const dogBreedsStore = new DogBreedsStore();
export default dogBreedsStore;
