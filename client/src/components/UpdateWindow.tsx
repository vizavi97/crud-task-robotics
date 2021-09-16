import React, {ChangeEvent, FormEvent, useState} from 'react'
import {InputField} from "./ui/InputField";
import {CreateUserType, Role, User} from "../store/interfaces/user";
import {convertDate} from "../helpers/date.helper";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {ModalWindow} from "./ui/ModalWindow";
import {submitFormValidator} from "../helpers/form.validator";
import {updateUser} from "../store/action/user.action";
import {DatePickerField} from "./ui/DatePickerField";
import {SelectField} from "./ui/SelectField";


export const UpdateWindow: React.FC = () => {
    const dispatch = useDispatch()
    const [error, setError] = useState<null | string>(null)
    const [disable, setDisable] = useState<boolean>(false)
    const {activeUserId, userRoles} = useSelector((state: RootStateOrAny) => state.user)
    const [user, setUser] = useState<User>({
        id: activeUserId.id,
        name: activeUserId.name,
        surname: activeUserId.surname,
        middleName: activeUserId.middleName,
        birthday: activeUserId.birthday,
        birthPlace: activeUserId.birthPlace,
        email: activeUserId.email,
        phoneNumber: activeUserId.phoneNumber,
        registerDate: activeUserId.registerDate,
        lastUpdate: activeUserId.lastUpdate,
        role: activeUserId.role
    })

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setUser(state => ({
            ...state,
            [name]: value
        }))
    }
    const selectHandler = (event: ChangeEvent<HTMLSelectElement>) => setUser((state: CreateUserType) => ({
        ...state,
        role: userRoles.filter((item: Role) => item.id === event.target.value)[0]
    }))
    const dateHandler = (date: Date) => setUser((state: CreateUserType) => ({...state, birthday: date}))
    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        const err = submitFormValidator(user)
        if (err) {
            setError(err)
        } else {
            setDisable(() => true)
            setError(null)
            dispatch(updateUser(user))
            setDisable(() => false)
        }
    }

    return (
        <ModalWindow>
            <div className={'modal-content'}>
                <h1>Изменение пользователя</h1>
                <form className={"modal-content__form"} onSubmit={submitHandler}>
                    <InputField
                        type={"text"}
                        label={"Имя"}
                        placeholder={"Имя"}
                        onChange={event => changeHandler(event)}
                        name={'name'}
                        value={user.name}
                        disabled={disable}
                    />
                    <InputField
                        type={"text"}
                        label={"Фамилия"}
                        placeholder={"Фамилия"}
                        onChange={event => changeHandler(event)}
                        name={'surname'}
                        value={user.surname}
                        disabled={disable}
                    />
                    <InputField
                        type={"text"}
                        label={"Отчество"}
                        placeholder={"Отчество"}
                        onChange={event => changeHandler(event)}
                        name={'middleName'}
                        value={user.middleName}
                        disabled={disable}
                    />
                    <DatePickerField
                        onChange={dateHandler}
                        name={"birthday"}
                        value={convertDate(user.birthday) as string}
                        label={"День рождения"}
                        disabled={disable}
                    />
                    <InputField
                        type={"text"}
                        label={"Место рождения"}
                        placeholder={"Место рождения"}
                        onChange={event => changeHandler(event)}
                        name={'birthPlace'}
                        value={user.birthPlace}
                        disabled={disable}
                    />
                    <SelectField onChange={selectHandler}
                                 name={'role'}
                                 value={user.role.id}
                                 label={"Выберете Роль"}
                                 array={userRoles}
                                 disabled={disable}
                    />
                    <InputField
                        type={"email"}
                        label={"Email"}
                        placeholder={"Email"}
                        onChange={event => changeHandler(event)}
                        name={'email'}
                        value={user.email}
                        disabled={disable}
                    />
                    <InputField
                        type={"text"}
                        label={"Номер телефона"}
                        placeholder={"Номер телефона"}
                        onChange={event => changeHandler(event)}
                        name={'phoneNumber'}
                        value={user.phoneNumber}
                        disabled={disable}
                    />

                    <div className={"modal-content__form__footer"}>
                        <InputField
                            type={"text"}
                            label={"Дата Регистрации"}
                            placeholder={"Дата Регистрации"}
                            onChange={event => changeHandler(event)}
                            name={'registerDate'}
                            value={convertDate(user.registerDate) as string}
                            disabled
                        />
                        <InputField
                            type={"text"}
                            label={"Последние изменение"}
                            placeholder={"Последние изменение"}
                            onChange={event => changeHandler(event)}
                            name={'lastUpdate'}
                            value={convertDate(user.lastUpdate) as string}
                            disabled
                        />
                    </div>

                    {error && <div><p className={"invalid-text"}>{error}</p></div>}
                    <button type={"submit"} className={'btn'} disabled={disable}>
                        Сохранить изменения в профиле
                    </button>
                </form>
            </div>
        </ModalWindow>
    )
}
