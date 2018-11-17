import React from 'react';
import Routes from './../Routes'
import Loading from './loading'
import Header from './../components/header'
let App = () => (
    <div>
        <Header  name="Redux Saga Task"/>
        <Routes />
        <Loading />

    </div>
);
export default App;