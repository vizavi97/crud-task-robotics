import axios from "axios";
import {BACKEND_API_URL, ROUTES} from "../../config/backend.config";
import {Dispatch} from "redux";
import {DispatchEvent} from "../interfaces/redux";
import {
    GET_USERS,
    GET_ROLES,
    CREATE_USER,
    UPDATE_USER,
    DELETE_USER,
    SHOW_CREATE_USER_WINDOW,
    SHOW_UPDATE_USER_WINDOW,
    SHOW_DELETE_USER_WINDOW,
    HIDE_ALL_USER_WINDOW,
} from "../types/user.types";
import {CreateUserDispatch, GetRolesDispatch, GetUserDispatch, UpdateUserDispatch, User} from "../interfaces/user";

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
export const createUser = (user: User) => async (dispatch: Dispatch<DispatchEvent<CreateUserDispatch>>) => {
    const newDate = new Date().toISOString();
    const data = {
        ...user,
        lastUpdate: newDate,
        birthday: new Date(user.birthday).toISOString(),
        registerDate: newDate,
        roleId: user.role.id
    }
    await axios.post(BACKEND_API_URL + ROUTES.USERS, data)
        .then(resp => {
            dispatch({
                type: CREATE_USER,
                payload: {
                    user: data
                }
            })
        })
        .catch(err => {
            dispatch({
                type: CREATE_USER,
                payload: {
                    user: null
                }
            })
        })
}
export const updateUser = (user: User) => async (dispatch: Dispatch<DispatchEvent<UpdateUserDispatch>>) => {
    const newDate = new Date().toISOString();
    const data = {
        ...user,
        lastUpdate: newDate,
        birthday: new Date(user.birthday).toISOString(),
        roleId: user.role.id
    }
    await axios.put(BACKEND_API_URL + ROUTES.USERS + "/" + user.id, data)
        .then(resp => {
            dispatch({
                type: UPDATE_USER,
                payload: {
                    user: data
                }
            })
        })
        .catch(err => {
            dispatch({
                type: UPDATE_USER,
                payload: {
                    user: data
                }
            })
        })
}
export const deleteUser = () => async (dispatch: Dispatch<DispatchEvent<any>>) => {
    const id = localStorage.getItem("removingId")
    await axios.delete(BACKEND_API_URL + ROUTES.USERS + "/" + id)
        .then(resp => {
            dispatch({
                type: DELETE_USER,
                payload: {
                    id: id,
                }
            })
        })
        .catch(err => {
            dispatch({
                type: DELETE_USER,
                payload: {
                    id: id,
                }
            })
        })
}

export const showCreateModal = () => (dispatch: Dispatch<DispatchEvent<any>>) => dispatch({
    type: SHOW_CREATE_USER_WINDOW,
})
export const showUpdateModal = (id: string) => (dispatch: Dispatch<DispatchEvent<any>>) => dispatch({
    type: SHOW_UPDATE_USER_WINDOW,
    payload: {
        id: id,
    }
})
export const showDeleteModal = () => (dispatch: Dispatch<DispatchEvent<any>>) => dispatch({
    type: SHOW_DELETE_USER_WINDOW,
})
export const hideAllUserWindows = () => (dispatch: Dispatch<DispatchEvent<any>>) => dispatch({type: HIDE_ALL_USER_WINDOW})
