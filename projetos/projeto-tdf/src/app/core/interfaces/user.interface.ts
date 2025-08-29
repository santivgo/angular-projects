export interface IUserMusic{
    title: string, 
    band: string, 
    genre: number, 
    isFavorite: boolean
}
export interface IUser{
    name: string,
    username: string,
    email: string,
    password: string, 
    birthDate: string,
    state: number,
    musics: IUserMusic[]

}