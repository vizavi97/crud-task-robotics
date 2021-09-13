import axios from "axios";
import {BACKEND_API_URL, ROUTES} from "../../config/backend.config";
import {Dispatch} from "redux";
import {DispatchEvent} from "../interfaces/redux";
import {DELETE_USER, GET_USERS} from "../types/user.types";
import {UserDispatch} from "../interfaces/user";

export const getUsers = () => async (dispatch: Dispatch<DispatchEvent<UserDispatch>>) => {
    dispatch({
        type: GET_USERS,
        payload: {
            users: [],
            loader: true,
            message: null,
            showUpdateWindow: false,
            showDeleteWindow: false
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
                    showUpdateWindow: false,
                    showDeleteWindow: false
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
                    showUpdateWindow: false,
                    showDeleteWindow: false
                }
            })
        })
}
export const deleteUser = (id: string) => (dispatch: Dispatch<DispatchEvent<UserDispatch | any>>) => {
    dispatch({
        type: DELETE_USER,
        payload: {
            id: id,
            showUpdateWindow: false,
            showDeleteWindow: false
        }
    })

}