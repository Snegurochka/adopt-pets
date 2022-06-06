export type GenderTypes = "Female" | "Male";

export interface IPhotoAnimal {
    small: string,
    large: string
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

export interface IFavoriteAnimal {
    id: number,
    name: string,
}

export interface IUser {
    displayName: string,
    email: string,
    password: string,
}