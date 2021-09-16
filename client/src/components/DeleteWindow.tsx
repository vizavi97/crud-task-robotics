import React from 'react'
import {ModalWindow} from "./ui/ModalWindow";
import {useDispatch} from "react-redux";
import {deleteUser, hideAllUserWindows} from "../store/action/user.action";

interface DeleteWindowInterface {}

export const DeleteWindow: React.FC<DeleteWindowInterface> = () => {

    const dispatch = useDispatch()
    const resolveRemovingHandler = () => {
        dispatch(deleteUser())
        dispatch(hideAllUserWindows())
    }
    const rejectRemovingHandler = () => dispatch(hideAllUserWindows())

    return (
        <ModalWindow>
            <div className={'modal-content'}>
                <h1>Вы уверены что хотите удалить пользователя</h1>
                <div className={"modal-content__delete"}>
                    <button className={"btn"} onClick={rejectRemovingHandler}>Отменить</button>
                    <button className={"btn"} onClick={resolveRemovingHandler}>Подтвердить</button>
                </div>
            </div>
        </ModalWindow>
    )
}
