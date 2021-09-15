export interface UserReducerInitialStateInterface {
    users: [] | User[]
    userRoles: [] | Role[]
    loader: boolean
    message: string | null
    showCreateWindow: boolean
    showUpdateWindow?: boolean
    showDeleteWindow?: boolean
}
export interface UserDispatch extends UserReducerInitialStateInterface {}

export interface GetUserDispatch {
    users: [] | User[]
    loader: boolean
    message: string | null
}
export interface GetRolesDispatch {
    userRoles: [] | Role[]
    loader: boolean
    message: string | null
}

export interface User {
    id: string
    name: string
    surname: string
    middleName: string
    phoneNumber: string
    email: string
    birthPlace: string
    birthday: string | Date
    lastUpdate: string | Date
    registerDate: string | Date
    role: Role
}

export interface Role {
    id: string
    title: string
}
export type CreateUserType = Omit<User, "id">
