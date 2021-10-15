export type GenderTypes = "Female" | "Male";

export interface IPhotoAnimal {
    small: string
}
export interface IAnimal {
    id: number,
    organization_id: string,
    url: string,
    type: string,
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