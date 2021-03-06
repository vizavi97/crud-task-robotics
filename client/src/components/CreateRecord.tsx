import React, {ChangeEvent, FormEvent, useState} from 'react'
import {InputField} from "./ui/InputField";
import {CreateUserType, Role} from "../store/interfaces/user";
import {convertDate} from "../helpers/date.helper";
import {DatePickerField} from "./ui/DatePickerField";
import "react-datepicker/dist/react-datepicker.css";
import {ModalWindow} from "./ui/ModalWindow";
import {SelectField} from "./ui/SelectField";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {submitFormValidator} from "../helpers/form.validator";
import {createUser} from "../store/action/user.action";


export const CreateRecord: React.FC = () => {
    const dispatch = useDispatch()
    const [error, setError] = useState<null | string>(null)
    const [disable, setDisable] = useState<boolean>(false)
    const {userRoles} = useSelector((selector: RootStateOrAny) => selector.user)
    const [user, setUser] = useState<CreateUserType>({
        surname: "",
        name: "",
        middleName: "",
        birthday: Date(),
        birthPlace: "",
        email: "",
        phoneNumber: "",
        role: userRoles[0]
    })
    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setUser((state: CreateUserType) => ({
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
            dispatch(createUser(user))
            setDisable(() => false)
        }
    }
    return (
        <ModalWindow>
            <div className={'modal-content'}>
                <h1>???????????????? ????????????</h1>
                <form className={"modal-content__form"} onSubmit={submitHandler}>
                    <InputField
                        type={"text"}
                        label={"??????"}
                        placeholder={"??????"}
                        onChange={event => changeHandler(event)}
                        name={'name'}
                        value={user.name}
                        disabled={disable}
                    />
                    <InputField
                        type={"text"}
                        label={"??????????????"}
                        placeholder={"??????????????"}
                        onChange={event => changeHandler(event)}
                        name={'surname'}
                        value={user.surname}
                        disabled={disable}
                    />
                    <InputField
                        type={"text"}
                        label={"????????????????"}
                        placeholder={"????????????????"}
                        onChange={event => changeHandler(event)}
                        name={'middleName'}
                        value={user.middleName}
                        disabled={disable}
                    />
                    <DatePickerField
                        onChange={dateHandler}
                        name={"birthday"}
                        value={convertDate(user.birthday) as string}
                        label={"???????? ????????????????"}
                        disabled={disable}
                    />
                    <InputField
                        type={"text"}
                        label={"?????????? ????????????????"}
                        placeholder={"?????????? ????????????????"}
                        onChange={event => changeHandler(event)}
                        name={'birthPlace'}
                        value={user.birthPlace}
                        disabled={disable}
                    />
                    <SelectField onChange={selectHandler}
                                 name={'role'}
                                 value={user.role.id}
                                 label={"???????????????? ????????"}
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
                        label={"?????????? ????????????????"}
                        placeholder={"?????????? ????????????????"}
                        onChange={event => changeHandler(event)}
                        name={'phoneNumber'}
                        value={user.phoneNumber}
                        disabled={disable}
                    />
                    {error && <div><p className={"invalid-text"}>{error}</p></div>}
                    <button type={"submit"} className={'btn'} disabled={disable}>
                        ?????????????????? ?????????????????? ?? ??????????????
                    </button>
                </form>
            </div>
        </ModalWindow>
    )
}
