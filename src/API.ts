import {
    API_URL,
    API_KEY,
    API_S_KEY,
    API_BD_URL
} from './config';


import {
    AnimalDetailsAPIResponse,
    AnimalListAPIResponse,
    BreedListAPIResponse,
    FavoritesAPIResponse,
    oauthTokenAPIResponse,
    PetAPIResponse
} from './interfaces/APIinterfases';
import { IFavoriteAnimal } from './interfaces/interfaces';

const API = {
    oauthToken: async (): Promise<oauthTokenAPIResponse> => {
        const params = new URLSearchParams();
        params.append("grant_type", "client_credentials");
        if (API_KEY && API_S_KEY) {
            params.append("client_id", API_KEY);
            params.append("client_secret", API_S_KEY);
        }

        const endpoint = `${API_URL}oauth2/token`;
        return await (await fetch(
            endpoint,
            {
                method: "POST",
                body: params,
            })).json();
    },
    fetchAnimalTypes: async (accessToken: string): Promise<AnimalListAPIResponse> => {
        const endpoint = `${API_URL}types`;
        return await (await fetch(endpoint,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        )).json();
    },
    fetchBreedList: async (animal: string, accessToken: string): Promise<BreedListAPIResponse> => {
        const endpoint = `${API_URL}types/${animal}/breeds`;
        return await (await fetch(endpoint,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        )).json();
    },
    fetchAnimals: async (searchTerm: string, page: number, accessToken: string): Promise<PetAPIResponse> => {
        const endpoint = `${API_URL}animals${searchTerm}`;
        return await (await fetch(endpoint,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        )).json();
    },
    fetchDetails: async (id: number, accessToken: string): Promise<AnimalDetailsAPIResponse> => {
        const endpoint = `${API_URL}animals/${id}`;
        return await (await fetch(endpoint,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        )).json();
    },
    addFavoriteAnimal: async (animal: IFavoriteAnimal): Promise<FavoritesAPIResponse> => {
        const resp = await fetch(`${API_BD_URL}favorites.json`, {
            method: 'POST',
            body: JSON.stringify({ id: animal.id, name: animal.name }),
        });
        return resp.json();
    },
    fetchFavoriteAnimals: async (id: number): Promise<IFavoriteAnimal[]> => {
        const resp = await fetch(`${API_BD_URL}favorites/${id}.json`);
        return await resp.json();
    },
}

export default API;