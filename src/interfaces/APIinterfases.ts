import { IPet } from "./interfaces";

export type Animal = "dog" | "cat" | "bird" | "reptile" | "rabbit";

export interface BreedListAPIResponse {
    animal: Animal;
    breeds: string[];
  }

  export interface PetAPIResponse {
    numberOfResults: number;
    startIndex: number;
    endIndex: number;
    hasNext: boolean;
    pets: IPet[];
  }