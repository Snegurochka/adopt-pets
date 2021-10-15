import { useEffect, useState } from "react";
import { isPersistedState } from "../../helpers";
// APT
import API from "../API";
//Types
// import { PetAPIResponse } from "../interfaces/APIinterfases";
// import { AnimalTypes } from "../interfaces/interfaces";

// const initialState: PetAPIResponse = {
//     page: 0,
//     results: [],
//     total_pages: 0,
//     total_results: 0,
// }

export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const fetchPets = async (page = 1, searchTerm = "") => {
        try {
            setError(false);
            setLoading(true);

            const accessToken = (await API.oauthToken()).access_token;
            //const pets = await API.fetchPets(searchTerm, page, accessToken);

            // setState((prev) => ({
            //     ...pets,
            //     results:
            //         page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            // }));
            //console.log(pets);

        } catch (e) {
            setError(true);
        }
        setLoading(false);
    }

    // initial and search
    useEffect(() => {
        if (!searchTerm) {
            const sessionState = isPersistedState('homeState');

            if (sessionState) {
                setState(sessionState);
                return;
            }
        }
        fetchPets(1, searchTerm);
    }, [searchTerm]);

    // loading more
    // useEffect(() => {
    //     if (!isLoadingMore) return;

    //     fetchMovies(state.page + 1, searchTerm);

    //     setIsLoadingMore(false);
    // }, [isLoadingMore, state.page, searchTerm]);

    //Set SessionStorage
    useEffect(()=>{
        if (!searchTerm) sessionStorage.setItem('homeState', JSON.stringify(state))
    }, [searchTerm, state])

    return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore }
}