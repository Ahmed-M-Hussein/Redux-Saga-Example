import React from 'react';
import ReactDom from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Form from './../screens/Form'
import Display from './../screens/Display'






export default () => (

    <BrowserRouter >
        <Switch>
            <Route exact path="/" component={Form} />
            <Route path="/Display" component={Display} />

        </Switch>
    </BrowserRouter>
);
