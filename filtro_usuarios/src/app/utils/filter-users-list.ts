import { IFilterOptions } from "../interfaces/filter.interface";
import { IUser } from "../interfaces/user/user";

const filtrarLista = ((filtro: IFilterOptions, listaFiltrada: IUser[]): IUser[] => { // Função Pura, não modifica variaveis externas e não precisa de VARIÁVEIS EXTERNAS pra funcionar.
    let filteredList: IUser[] = listaFiltrada;
    filteredList = filterListByName(filtro.name, listaFiltrada)
    filteredList = filterListByStatus(filtro.status, filteredList)
    filteredList = filterListByDate(filtro.startDate, filtro.endDate, filteredList)
    return filteredList

})

const filterListByName = ((name: string | undefined, listaFiltrada: IUser[]): IUser[] => {
    //filter sempre retorna um array
    const NOME_N_TIPADO = name === undefined

    if (NOME_N_TIPADO) return listaFiltrada

    return listaFiltrada.filter((p: IUser) => p.nome && name && p.nome.toLowerCase().includes(name.toLowerCase()));
}
)

const filterListByStatus = ((status: boolean | undefined, listaFiltrada: IUser[]): IUser[] => {
    const INVALID_FILTER = status === undefined;
    if (INVALID_FILTER) return listaFiltrada
    return listaFiltrada.filter((p: IUser) => status === p.ativo)
})

const filterListByDate = ((startDate: Date | undefined, endDate: Date | undefined, listaFiltrada: IUser[]): IUser[] => {

    const INVALID_DATE = startDate === undefined || endDate === undefined
    if (INVALID_DATE) return listaFiltrada

    return listaFiltrada.filter((p: IUser) => {
        const dateUserObj = new Date(p.dataCadastro)
        return dateUserObj >= startDate && dateUserObj <= endDate
    })
})



export { filtrarLista }