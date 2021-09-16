import {DispatchEvent} from "../interfaces/redux";
import {User, UserDispatch, UserReducerInitialStateInterface} from "../interfaces/user";
import {
    CREATE_USER,
    DELETE_USER,
    GET_ROLES,
    GET_USERS, HIDE_ALL_USER_WINDOW,
    SHOW_CREATE_USER_WINDOW, SHOW_DELETE_USER_WINDOW,
    SHOW_UPDATE_USER_WINDOW,
    UPDATE_USER
} from "../types/user.types";

const initialState = {
    users: [],
    userRoles: [],
    activeUser: null,
    loader: false,
    message: null,
    showCreateWindow: false,
    showUpdateWindow: false,
    showDeleteWindow: false,
} as UserReducerInitialStateInterface

export const userReducer = (state = initialState, action: DispatchEvent<UserDispatch | any>) => {
    const {type, payload} = action
    switch (type) {
        case GET_USERS:
            return {
                ...state,
                users: payload.users,
                loader: payload.loader,
                message: payload.message
            }
        case GET_ROLES:
            return {
                ...state,
                userRoles: payload.userRoles,
                loader: payload.loader,
                message: payload.message
            }
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter((user: User) => user.id !== payload.id),
            }
        case CREATE_USER:
            return {
                ...state,
                users: payload.user ? [...state.users, payload.user] : state.users,
                showCreateWindow: false
            }
        case UPDATE_USER:
            return {
                ...state,
                users: state.users.map((item: User) => {
                    if (item.id === payload.user.id) {
                        return payload.user
                    }
                    return item
                }),
                showUpdateWindow: false
            }
        case SHOW_CREATE_USER_WINDOW:
            return {
                ...state,
                showCreateWindow: true,
            }
        case SHOW_UPDATE_USER_WINDOW:
            return {
                ...state,
                showUpdateWindow: true,
                activeUserId: payload.id && state.users.length ? state.users.filter((item: User) => item.id === payload.id)[0] : null
            }
        case SHOW_DELETE_USER_WINDOW:
            return {
                ...state,
                showDeleteWindow: true,
            }
        case HIDE_ALL_USER_WINDOW:
            return {
                ...state,
                showCreateWindow: false,
                showUpdateWindow: false,
                showDeleteWindow: false,
            }

        default:
            return state
    }
}