import { action, computed, makeObservable, observable } from "mobx";
import { CachedDogsData, DogDto } from "../../model/types";

type DogsState = {
    totalPages: number;
    cachedDogData: CachedDogsData;
}

const dogsState: DogsState = {
    totalPages: Number.MAX_SAFE_INTEGER,
    cachedDogData: {}
}

const addDataForPage = action((state: DogsState, page: number, newData: DogDto[]): void => {
    state.cachedDogData[page] = newData;
});

const setTotalPages = action((state: DogsState, newTotalPages: number): void => {
    if (state.totalPages !== newTotalPages)
        state.totalPages = newTotalPages;
});

const isDataForPageAvailable = computed(() => (page: number): boolean => {
    return !!dogsState.cachedDogData[page];
});

makeObservable(dogsState, {
    cachedDogData: observable,
    totalPages: observable
});

export type {
    DogsState
}

export {
    dogsState,
    addDataForPage,
    isDataForPageAvailable,
    setTotalPages
}