import React from 'react'
import {useDispatch} from "react-redux";
import {showCreateModal} from "../../store/action/user.action";

export const Header = () => {
    const dispatch = useDispatch()
    return (
        <div className={'header'}>
            <div className={'container'}>
                <div className={'header-container'}>
                    <h1>Пользователи</h1>
                    <div className={"header-button"}>
                        <button type={"button"} onClick={() => dispatch(showCreateModal())}>
                            <span>Добавить нового пользователя</span>
                            <span className={'header-button-rec'}>+</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
