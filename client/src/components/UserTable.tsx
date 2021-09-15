import React, { useState} from 'react'
import {RootStateOrAny, useSelector} from "react-redux";
import {User} from "../store/interfaces/user";
import {TableRow} from "./TableRow";

export const UserTable: React.FC = () => {
    const [isSorted, setIsSorted] = useState<boolean>(false)
    const {users, loader} = useSelector((selector: RootStateOrAny) => selector.user)

    return (
        <div className={'content'}>
            <div className={'container'}>
                {Boolean(users.length) && !loader && <>
                    <div className={'content-header'}>
                        <div className={'content-header-sort'}>
                            <button onClick={() => setIsSorted(state => !state)}>
                                Сортировать от А до Я
                                {isSorted && <span>&uarr;</span>}
                                {!isSorted && <span>&darr;</span>}
                            </button>
                        </div>
                        <div className={'content-header-count'}>
                            <p>Всего пользователей: <span>{users.length}</span></p>
                        </div>
                    </div>
                    <div className={'content-table'}>
                        <table>
                            <thead>
                            <tr>
                                <th className={"content-table__name"}>№ ФИО пользователя</th>
                                <th className={"content-table__role"}>Роль</th>
                                <th className={"content-table__birthday"}>Дата рождения</th>
                                <th className={"content-table__place"}>Место рождения</th>
                                <th className={"content-table__email"}>Почта</th>
                                <th className={"content-table__phone"}>Телефон</th>
                                <th className={"content-table__register"}>Регистрации</th>
                                <th className={"content-table__update"}>Изменение</th>
                                <th className={"content-table__change"}>ред.</th>
                                <th className={"content-table__delete"}>удал.</th>
                            </tr>
                            </thead>
                            <tbody>
                            {!isSorted ?
                                users.sort((a: User, b: User) => a.surname.localeCompare(b.surname)).map((item: User, key: number) =>
                                    <TableRow
                                        key={key}
                                        number={++key}
                                        id={item.id}
                                        name={item.name}
                                        surname={item.surname}
                                        birthPlace={item.birthPlace}
                                        birthday={item.birthday}
                                        email={item.email}
                                        lastUpdate={item.lastUpdate}
                                        middleName={item.middleName}
                                        phoneNumber={item.phoneNumber}
                                        registerDate={item.registerDate}
                                        role={item.role}
                                    />
                                ) :
                                users.sort((a: User, b: User) => b.surname.localeCompare(a.surname)).map((item: User, key: number) =>
                                    <TableRow
                                        key={key}
                                        number={++key}
                                        id={item.id}
                                        name={item.name}
                                        surname={item.surname}
                                        birthPlace={item.birthPlace}
                                        birthday={item.birthday}
                                        email={item.email}
                                        lastUpdate={item.lastUpdate}
                                        middleName={item.middleName}
                                        phoneNumber={item.phoneNumber}
                                        registerDate={item.registerDate}
                                        role={item.role}
                                    />)}
                            </tbody>
                        </table>
                    </div>
                </>}
                {loader && <div className={'loader'}>Loading....</div>}
                {!Boolean(users.length) && !loader && <div className={'loader'}>Список записей пуст!</div>}
            </div>
        </div>
    )
}
