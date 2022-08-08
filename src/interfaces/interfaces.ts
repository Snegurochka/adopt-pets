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
    refId: string,
    id: number,
    name: string,
}

export interface IUser {
    displayName: string,
    email: string,
    password: string,
}

export interface IComment {
    uid: string,
    petId: string,
    title: string,
    text: string
}