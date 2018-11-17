import React, { Component } from 'react';
import './App.css';
import Routes from './../src/Routes'
import store from './store'
import 'antd/dist/antd.css'
import 'antd/dist/antd.js'
import 'antd/dist/antd.min.css'
import 'antd/dist/antd.min.js'
import { Provider } from 'react-redux'
import Main from './screens/Main'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
