import { useState, useEffect } from "react";
// APT
import API from "../API";
import { AnimalTypes } from "../interfaces/interfaces";
import { BreedListAPIResponse } from "../interfaces/APIinterfases";
import { useSelector } from "react-redux";
import { AppStateType } from "../store/reducers";

const localCache: {
  [index: string]: string[];
} = {};

type Status = 'unloaded' | 'loaded' | 'loading';

export default function useBreedList(animal: AnimalTypes): [string[], Status] {
  const [breedList, setBreedList] = useState([] as string[]);
  const [status, setStatus] = useState("unloaded" as Status);
  const { accessToken } = useSelector((s: AppStateType) => s);

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

      //const accessToken = (await API.oauthToken()).access_token;
      const res = await API.fetchBreedList(animal, accessToken.access_token) as BreedListAPIResponse;
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
