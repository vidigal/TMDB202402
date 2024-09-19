import { IFilme } from "./ifilme";

export interface IFilmeTrendingResponse {

    page: number;
    total_pages: number;
    total_results: number;
    results: IFilme[];

}