import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/types/app-state.interface";

export const selectFeature = (state: AppStateInterface) => state.cats;

export const isLoadingSelector = createSelector(
  selectFeature,
  state => state.isLoading
);

export const catsSelector = createSelector(
  selectFeature,
  state => state.cats
);

export const errorSelector = createSelector(
  selectFeature,
  state => state.error
);