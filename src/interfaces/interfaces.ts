export type AnimalTypes = "dog" | "cat" | "bird" | "reptile" | "rabbit";
export type GenderTypes = "Female" | "Male";

export interface IPhotoAnimal {
    small: string
}
export interface IAnimal {
    id: number,
    organization_id: string,
    url: string,
    type: AnimalTypes,
    species: string,
    name: string,
    breeds: {
        primary: string
    }
    age: string,
    gender: GenderTypes,
    description: string,
    photos: IPhotoAnimal[],
}