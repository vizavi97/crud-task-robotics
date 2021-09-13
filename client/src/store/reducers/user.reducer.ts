import {DispatchEvent} from "../interfaces/redux";
import {User, UserDispatch, UserReducerInitialStateInterface} from "../interfaces/user";
import {DELETE_USER, GET_USERS} from "../types/user.types";

const initialState = {
    users: [],
    loader: false,
    message: null

} as UserReducerInitialStateInterface

export const userReducer = (state = initialState, action: DispatchEvent<UserDispatch | any>) => {
    const {type, payload} = action
    switch (type) {
        case GET_USERS:
            return {
                users: payload.users,
                loader: payload.loader,
                message: payload.message
            }
        case DELETE_USER:
            return {
                users: state.users.filter((user:User) => user.id !== payload.id),
                loader: false,
                message: null
            }

        default:
            return state
    }
}