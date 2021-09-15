import {DispatchEvent} from "../interfaces/redux";
import {User, UserDispatch, UserReducerInitialStateInterface} from "../interfaces/user";
import {
    DELETE_USER,
    GET_ROLES,
    GET_USERS,
    HIDE_CREATE_USER_WINDOW,
    HIDE_UPDATE_USER_WINDOW,
    SHOW_CREATE_USER_WINDOW,
    SHOW_UPDATE_USER_WINDOW
} from "../types/user.types";

const initialState = {
    users: [],
    userRoles: [],
    loader: false,
    message: null,
    showDeleteWindow: false,
    showUpdateWindow: false,
    showCreateWindow: false

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
                users: state.users.filter((user:User) => user.id !== payload.id),
            }
        case SHOW_CREATE_USER_WINDOW:
            return {
                ...state,
                showCreateWindow: true,
            }
        case HIDE_CREATE_USER_WINDOW:
            return {
                ...state,
                showCreateWindow: false,
            }
        case SHOW_UPDATE_USER_WINDOW:
            return {
                ...state,
                showUpdateWindow: true,
            }
        case HIDE_UPDATE_USER_WINDOW:
            return {
                ...state,
                showUpdateWindow: false,
            }

        default:
            return state
    }
}