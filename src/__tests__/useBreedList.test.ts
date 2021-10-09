import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import useBreedList from '../hooks/useBreedList';

// we have TS check for empty
// test("gives an empty list with no animals", ()=>{})

test("gives back breeds with an animal", async () => {
    const breeds = ["Poodle", "Corgie"];
    fetch.mockResponseOnce(JSON.stringify({
        animal: "dog",
        breeds
    }));
    const { result, waitForNextUpdate } = renderHook(() => useBreedList("dog"));

    await waitForNextUpdate();

    const [breedList, status] = result.current;

    expect(status).toBe("loaded");
    expect(breedList).toEqual(breeds);
})