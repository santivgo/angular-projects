interface IMusica {
    titulo: string,
    artista: string,
    genero: string,
    favorita: boolean
}
export interface IUser {
    nome: string,
    usuario: string, 
    email: string, 
    senha: string, 
    resenha: string, 
    data_nasc: Date,
    estado: string
    musicas: IMusica[]
}