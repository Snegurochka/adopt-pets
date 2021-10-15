import { AnimalTypes, IAnimal } from "./interfaces";

export interface oauthTokenAPIResponse {
  token_type: "Bearer",
  expires_in: number,
  access_token: string
}

export interface BreedListAPIResponse {
  animal: AnimalTypes;
  breeds: BreedAPIResponse[];
}

export interface BreedAPIResponse {
  name: string,
}

export interface PetAPIResponse {
  animals: IAnimal[],
  pagination: {
    count_per_page: number,
    total_count: number,
    current_page: number,
    total_pages: number,
  }
}