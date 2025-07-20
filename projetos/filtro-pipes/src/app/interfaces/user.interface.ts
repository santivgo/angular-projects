export enum STATUS {
	ACTIVE = 1,
	INACTIVE = 2
}

export interface IUser {
	customerName: string;
	customerStatus: STATUS;
	operationDate: string;
	operationValue: number;
	operationRisck: number;
}

