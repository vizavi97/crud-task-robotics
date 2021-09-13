import React from 'react'

export const Header = () => {


    return (
        <div className={'header'}>
            <div className={'container'}>
                <div className={'header-container'}>
                    <h1>Пользователи</h1>
                    <div className={"header-button"}>
                        <button type={"button"}>
                            <span>Добавить нового пользователя</span>
                            <span className={'header-button-rec'}>+</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
