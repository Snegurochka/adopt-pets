import { useState, useEffect } from "react";
// APT
import API from "../API";
import { BreedListAPIResponse } from "../interfaces/APIinterfases";
import { useSelector } from "react-redux";
import { selectAccessToken } from "../store/selectors/accessToken";

const localCache: {
  [index: string]: string[];
} = {};

type Status = 'unloaded' | 'loaded' | 'loading';

export default function useBreedList(animal: string): [string[], Status] {
  const [breedList, setBreedList] = useState([] as string[]);
  const [status, setStatus] = useState("unloaded" as Status);
  const accessToken = useSelector(selectAccessToken);

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

      if (accessToken) {
        const res = await API.fetchBreedList(animal, accessToken) as BreedListAPIResponse;
        const breedList: string[] = [];
        res.breeds.forEach((breed) => {
          breedList.push(breed.name);
        })

        localCache[animal] = breedList;
        setBreedList(localCache[animal]);
      }
      setStatus("loaded");
    }
  }, [animal, accessToken]);

  return [breedList, status];
}
