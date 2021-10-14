import { IPet } from "./interfaces";

export interface oauthTokenAPIResponse {
  token_type: "Bearer",
  expires_in: number,
  access_token: string
}

export type Animal = "dog" | "cat" | "bird" | "reptile" | "rabbit";

export interface BreedListAPIResponse {
  animal: Animal;
  breeds: BreedAPIResponse[];
}

export interface BreedAPIResponse {
  name: string,  
}

export interface PetAPIResponse {
  numberOfResults: number;
  startIndex: number;
  endIndex: number;
  hasNext: boolean;
  pets: IPet[];
}