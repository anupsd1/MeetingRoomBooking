import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import Dashboard from './meeting/Dashboard'

import Alerts from './layout/Alerts'

import { Provider as ALertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import { Provider } from 'react-redux';
import store from '../store';

// Alert options
const alertOptions = {
    timeout: 3000,
    position: "top center"
};

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ALertProvider template={AlertTemplate} {...alertOptions}>
                    <Fragment>
                        <Header />
                        <Alerts />
                        <div className="container">
                            <Dashboard />
                        </div>
                    </Fragment>
                </ALertProvider>
            </Provider>
            
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))