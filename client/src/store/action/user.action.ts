import axios from "axios";
import {BACKEND_API_URL, ROUTES} from "../../config/backend.config";
import {Dispatch} from "redux";
import {DispatchEvent} from "../interfaces/redux";
import {
    DELETE_USER,
    GET_ROLES,
    GET_USERS,
    HIDE_CREATE_USER_WINDOW,
    SHOW_CREATE_USER_WINDOW,
} from "../types/user.types";
import {GetRolesDispatch, GetUserDispatch} from "../interfaces/user";

export const getUsers = () => async (dispatch: Dispatch<DispatchEvent<GetUserDispatch>>) => {
    dispatch({
        type: GET_USERS,
        payload: {
            users: [],
            loader: true,
            message: null,
        }
    })
    await axios.get(BACKEND_API_URL + ROUTES.USERS)
        .then(resp => {
            dispatch({
                type: GET_USERS,
                payload: {
                    users: resp.data.collection,
                    loader: false,
                    message: null,
                }
            })
        })
        .catch(err => {
            dispatch({
                type: GET_USERS,
                payload: {
                    users: [],
                    loader: false,
                    message: `err: ${JSON.stringify(err)}`,
                }
            })
        })
}
export const getRoles = () => async (dispatch: Dispatch<DispatchEvent<GetRolesDispatch>>) => {
    dispatch({
        type: GET_ROLES,
        payload: {
            userRoles: [],
            loader: true,
            message: null,
        }
    })
    await axios.get(BACKEND_API_URL + ROUTES.ROLES)
        .then(resp => {
            dispatch({
                type: GET_ROLES,
                payload: {
                    userRoles: resp.data.collection,
                    loader: false,
                    message: null,
                }
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ROLES,
                payload: {
                    userRoles: [],
                    loader: false,
                    message: `err: ${JSON.stringify(err)}`,
                }
            })
        })
}
export const deleteUser = (id: string) => (dispatch: Dispatch<DispatchEvent<any>>) => {
    dispatch({
        type: DELETE_USER,
        payload: {
            id: id,
        }
    })
}
export const hideCreateModal = () => (dispatch: Dispatch<DispatchEvent<any>>) => dispatch({type: HIDE_CREATE_USER_WINDOW})
export const showCreateModal = () => (dispatch: Dispatch<DispatchEvent<any>>) => dispatch({type: SHOW_CREATE_USER_WINDOW})