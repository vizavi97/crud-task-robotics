export interface UserReducerInitialStateInterface {
    users: [] | User[]
    loader: boolean
    message: string | null
    showUpdateWindow?: boolean
    showDeleteWindow?: boolean
}
export interface UserDispatch extends UserReducerInitialStateInterface {}

export interface User {
    name: string
    surname: string
    birthPlace: string
    birthday: string
    email: string
    id: string
    lastUpdate: string
    middleName: string
    phoneNumber: string
    registerDate: string
    role: Role
}

interface Role {
    id: string
    title: string
}