import { IAnimal } from "./interfaces";

export interface oauthTokenAPIResponse {
  token_type: "Bearer",
  expires_in: number,
  access_token: string
}

export interface AnimalListAPIResponse {
  types: AnimalTypesResponse[];
}

export interface AnimalTypesResponse {
  name: string;
  _links: { self: string }
}

export interface BreedListAPIResponse {
  animal: string[];
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