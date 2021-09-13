import React from 'react';
import './assets/style/style.scss'
import {Header} from "./components/layout/Header";
import {UserTable} from "./components/UserTable";


function App() {
  return (
    <>
        <Header/>
        <UserTable/>
    </>
  );
}

export default App;
