export interface IUser {
    id: string
    username: string
    password: string
    dateOfBirth: Date
    lastName: string
    firstName: string
    address?: string
    email?: string
    phoneNumber?: string
    createdAt?: Date
    updatedAt?: Date
}
