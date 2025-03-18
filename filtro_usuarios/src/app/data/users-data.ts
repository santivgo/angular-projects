import { IUser } from "../interfaces/user/user";

export const Usuarios: IUser[] = [
    {
        nome: "João Silva",
        email: "joao.silva@email.com",
        senha: "senha123",
        idade: 30,
        endereco: {
            rua: "Rua das Flores",
            numero: 123,
            cidade: "São Paulo",
            estado: "SP",
            pais: "Brasil"
        },
        telefone: "11987654321",
        ativo: true,
        funcao: "Administrador",
        dataCadastro: "2023-01-15",
        status: {
            online: true,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: "2024-03-17T18:30:00Z"
        }
    },
    {
        nome: "Maria Oliveira",
        email: "maria.oliveira@email.com",
        senha: "maria1234",
        idade: 25,
        endereco: {
            rua: "Avenida Central",
            numero: 456,
            cidade: "Rio de Janeiro",
            estado: "RJ",
            pais: "Brasil"
        },
        telefone: "21998765432",
        ativo: false,
        funcao: "Usuário",
        dataCadastro: "2022-11-20",
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso: "2024-02-10T14:00:00Z"
        }
    },
    {
        nome: "Carlos Mendes",
        email: "carlos.mendes@email.com",
        senha: "carlos321",
        idade: 40,
        endereco: {
            rua: "Rua dos Pinheiros",
            numero: 789,
            cidade: "Belo Horizonte",
            estado: "MG",
            pais: "Brasil"
        },
        telefone: "31987651234",
        ativo: true,
        funcao: "Moderador",
        dataCadastro: "2021-06-10",
        status: {
            online: false,
            verificado: false,
            assinaturaAtiva: true,
            ultimoAcesso: "2024-03-10T10:45:00Z"
        }
    }
];