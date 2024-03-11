export interface employeeInterface {
	id: string;
	firstName: string;
	lastName: string;
	dateOfBirth: string;
	startDate: string;
	street: string;
	city: string;
	state: string;
	zip: string;
	department: string;
}

export interface headerInterface {
	name: string;
	key: string;
}

export interface ItemInterface {
	id :string;
	[key: string]: string
}