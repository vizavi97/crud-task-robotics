import React, {ChangeEvent, useState} from 'react'
import {InputField} from "./ui/InputField";
import {User} from "../store/interfaces/user";
import {convertDate} from "../helpers/date.helper";


export const UpdateWindow: React.FC = () => {


    const [user, setUser] = useState<User>({
        id: "094787de-38c0-461a-97e0-dba4604af3f1",
        surname: "Иванов",
        name: "Сергей",
        middleName: "Петрович",
        birthday: "1971-04-23T00:00:00.000Z",
        birthPlace: "г. Краснодар",
        email: "ivanov@gmail.com",
        phoneNumber: "+7 (911) 277-10-19",
        registerDate: "2021-06-21T15:36:11.000Z",
        lastUpdate: "2021-07-03T16:31:55.000Z",
        role: {
            "id": "bed2260a-5cdb-40a7-b377-73002699bb74",
            "title": "Администратор"
        }
    })

    const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setUser(state => ({
            ...state,
            [name]: value
        }))
    }
    return (
        <>
            <div className={'modal'}>
                <div className={'modal-overlay'}>
                    <div className={'modal-content'}>
                        <a href="#" className={'modal-content__close'}></a>
                        <h1>Создание записи</h1>
                        <form className={"modal-content__form"}>

                            <InputField
                                type={"text"}
                                label={"Имя"}
                                placeholder={"Имя"}
                                onChange={event => inputHandler(event)}
                                name={'name'}
                                value={user.name}
                            />
                            <InputField
                                type={"text"}
                                label={"Фамилия"}
                                placeholder={"Фамилия"}
                                onChange={event => inputHandler(event)}
                                name={'surname'}
                                value={user.surname}
                            />
                            <InputField
                                type={"text"}
                                label={"Отчество"}
                                placeholder={"Отчество"}
                                onChange={event => inputHandler(event)}
                                name={'middleName'}
                                value={user.middleName}
                            />
                            <InputField
                                type={"text"}
                                label={"Место рождения"}
                                placeholder={"Место рождения"}
                                onChange={event => inputHandler(event)}
                                name={'birthPlace'}
                                value={user.birthPlace}
                            />
                            <InputField
                                type={"email"}
                                label={"Email"}
                                placeholder={"Email"}
                                onChange={event => inputHandler(event)}
                                name={'email'}
                                value={user.email}
                                disabled={true}
                            />
                            <InputField
                                type={"text"}
                                label={"Номер телефона"}
                                placeholder={"Номер телефона"}
                                onChange={event => inputHandler(event)}
                                name={'phoneNumber'}
                                value={user.phoneNumber}
                            />
                            <div className={"modal-content__form__footer"}>
                                <InputField
                                    type={"text"}
                                    label={"Дата Регистрации"}
                                    placeholder={"Дата Регистрации"}
                                    onChange={event => inputHandler(event)}
                                    name={'registerDate'}
                                    value={convertDate(user.registerDate) as string}
                                    disabled
                                />
                                <InputField
                                    type={"text"}
                                    label={"Последние изменение"}
                                    placeholder={"Последние изменение"}
                                    onChange={event => inputHandler(event)}
                                    name={'lastUpdate'}
                                    value={convertDate(user.lastUpdate) as string}
                                    disabled
                                />
                            </div>
                            <button type={"submit"} className={'btn'}>
                                Сохранить изменения в профиле
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}
