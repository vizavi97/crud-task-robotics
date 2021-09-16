import React, {useEffect} from 'react';
import './assets/style/style.scss'
import {Header} from "./components/layout/Header";
import {UserTable} from "./components/UserTable";
import {CreateRecord} from "./components/CreateRecord";
import {getRoles, getUsers} from "./store/action/user.action";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {UpdateWindow} from "./components/UpdateWindow";
import {DeleteWindow} from "./components/DeleteWindow";


const App = () => {
    const {
        showCreateWindow,
        showUpdateWindow,
        showDeleteWindow,
        activeUserId
    } = useSelector((state: RootStateOrAny) => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsers())
        dispatch(getRoles())
    }, [dispatch])
    return (
        <>
            <Header/>
            <UserTable/>
            {showCreateWindow && <CreateRecord/>}
            {showUpdateWindow && activeUserId && <UpdateWindow/>}
            {showDeleteWindow && <DeleteWindow/>}
        </>
    );
}

export default App;
