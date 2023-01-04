export interface FiltersInterface {
    limit: number,
    page: number,
    has_breeds: boolean,
    breed_ids: string[],
    category_ids: string[]
}