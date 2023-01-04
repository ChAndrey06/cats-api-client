import { createAction, props } from "@ngrx/store";
import { CatInterface } from "../types";

export const getCats = createAction('[Cats] Get Cats');
export const getCatsSuccess = createAction(
    '[Cats] Get Cats success',
    props<{ cats: CatInterface[] }>()
);
export const getCatsFailure = createAction(
    '[Cats] Get Cats failure',
    props<{ error: string }>()
);