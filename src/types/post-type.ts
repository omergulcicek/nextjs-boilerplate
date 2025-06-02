export interface UserType {
	id: number
	name: string
	username: string
	email: string
	address: AddressType
	phone: string
	website: string
	company: CompanyType
}

interface AddressType {
	street: string
	suite: string
	city: string
	zipcode: string
	geo: GeoType
}

interface GeoType {
	lat: string
	lng: string
}

interface CompanyType {
	name: string
	catchPhrase: string
	bs: string
}
