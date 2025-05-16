export enum STATUS {
	ACTIVE = 1,
	INACTIVE = 0
}

export interface IUser {
	customerName: string;
	customerStatus: STATUS;
	operationDate: string;
	operationValue: number;
	operationRisck: number;
}

