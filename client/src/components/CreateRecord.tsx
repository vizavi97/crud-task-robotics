import React, {ChangeEvent, FormEvent, useState} from 'react'
import {InputField} from "./ui/InputField";
import {CreateUserType, Role} from "../store/interfaces/user";
import {convertDate} from "../helpers/date.helper";
import {DatePickerField} from "./ui/DatePickerField";
import "react-datepicker/dist/react-datepicker.css";
import {ModalWindow} from "./ui/ModalWindow";
import {SelectField} from "./ui/SelectField";
import {RootStateOrAny, useSelector} from "react-redux";


export const CreateRecord: React.FC = () => {

    const {userRoles} = useSelector((selector: RootStateOrAny) => selector.user)
    const [user, setUser] = useState<CreateUserType>({
        surname: "",
        name: "",
        middleName: "",
        birthday: Date(),
        birthPlace: "",
        email: "",
        phoneNumber: "",
        registerDate: "",
        lastUpdate: "",
        role: userRoles[0]
    })
    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setUser(state => ({
            ...state,
            [name]: value
        }))
    }
    const selectHandler = (event: ChangeEvent<HTMLSelectElement>) => setUser(state => ({
        ...state,
        role: userRoles.filter((item: Role) => item.id === event.target.value)
    }))
    const dateHandler = (date: Date) => setUser(state => ({...state, birthday: date}))
    const submitHandler = (event: FormEvent) => {
        event.preventDefault()
    }
    return (
        <ModalWindow>
            <div className={'modal-content'}>
                <h1>Создание записи</h1>
                <form className={"modal-content__form"} onSubmit={submitHandler}>
                    <InputField
                        type={"text"}
                        label={"Имя"}
                        placeholder={"Имя"}
                        onChange={event => changeHandler(event)}
                        name={'name'}
                        value={user.name}
                    />
                    <InputField
                        type={"text"}
                        label={"Фамилия"}
                        placeholder={"Фамилия"}
                        onChange={event => changeHandler(event)}
                        name={'surname'}
                        value={user.surname}
                    />
                    <InputField
                        type={"text"}
                        label={"Отчество"}
                        placeholder={"Отчество"}
                        onChange={event => changeHandler(event)}
                        name={'middleName'}
                        value={user.middleName}
                    />
                    <DatePickerField
                        onChange={dateHandler}
                        name={"birthday"}
                        value={convertDate(user.birthday) as string}
                        label={"День рождения"}
                    />
                    <InputField
                        type={"text"}
                        label={"Место рождения"}
                        placeholder={"Место рождения"}
                        onChange={event => changeHandler(event)}
                        name={'birthPlace'}
                        value={user.birthPlace}
                    />
                    <SelectField onChange={selectHandler}
                                 name={'role'}
                                 value={user.role.id}
                                 label={"Выберете Роль"}
                                 array={userRoles}
                    />
                    <InputField
                        type={"email"}
                        label={"Email"}
                        placeholder={"Email"}
                        onChange={event => changeHandler(event)}
                        name={'email'}
                        value={user.email}
                        disabled={true}
                    />
                    <InputField
                        type={"text"}
                        label={"Номер телефона"}
                        placeholder={"Номер телефона"}
                        onChange={event => changeHandler(event)}
                        name={'phoneNumber'}
                        value={user.phoneNumber}
                    />
                    <button type={"submit"} className={'btn'}>
                        Сохранить изменения в профиле
                    </button>
                </form>

            </div>
        </ModalWindow>
    )
}
