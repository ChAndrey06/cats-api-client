import { createReducer, on } from "@ngrx/store";
import { CatsStateInterface } from "../types";
import * as CatsActions from './actions';

export const initialStste: CatsStateInterface = {
  isLoading: false,
  cats: [],
  error: null
};

export const reducer = createReducer(
  initialStste,
  on(CatsActions.getCats, (state) => ({ ...state, isLoading: true })),
  on(CatsActions.getCatsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    cats: action.cats
  })),
  on(CatsActions.getCatsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error
  })) 
);