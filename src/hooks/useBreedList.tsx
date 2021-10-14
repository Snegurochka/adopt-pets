import { useState, useEffect } from "react";
// APT
import API from "../API";
import { Animal, BreedListAPIResponse } from "../interfaces/APIinterfases";

const localCache: {
  [index: string]: string[];
} = {};

type Status = 'unloaded' | 'loaded' | 'loading';

export default function useBreedList(animal: Animal): [string[], Status] {
  const [breedList, setBreedList] = useState([] as string[]);
  const [status, setStatus] = useState("unloaded" as Status);

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");

      const accessToken = (await API.oauthToken()).access_token;
      const res = await API.fetchBreedList(animal, accessToken) as BreedListAPIResponse;
      const breedList: string[] = [];
      res.breeds.forEach((breed) => {
        breedList.push(breed.name);
      })

      localCache[animal] = breedList;
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedList, status];
}
