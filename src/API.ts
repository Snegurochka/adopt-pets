import {
    SEARCH_BASE_URL,
    ANIMALS_URL,
    API_URL,
    API_KEY,
    API_S_KEY
} from './config';


import { BreedListAPIResponse, oauthTokenAPIResponse, PetAPIResponse } from './interfaces/APIinterfases';

const API = {
    oauthToken: async (): Promise<oauthTokenAPIResponse> => {
        const params = new URLSearchParams();
        params.append("grant_type", "client_credentials");
        params.append("client_id", API_KEY);
        params.append("client_secret", API_S_KEY);
        const endpoint = `${API_URL}oauth2/token`;
        return await (await fetch(
            endpoint,
            {
                method: "POST",
                body: params,
            })).json();
    },
    fetchAnimals: async (): Promise<PetAPIResponse> => {
        const endpoint = `${API_URL}animals/?api_key=${API_KEY}`;
        return await (await fetch(endpoint)).json();
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
    }
}

export default API;