import { CatInterface } from "./cat.interface";

export interface CatsStateInterface {
    isLoading: boolean,
    cats: CatInterface[],
    error: string | null
}
