import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
// import App from './app';
import AppContainer from './app_container'

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        
            <AppContainer/>
        {/* </PersistGate> */}

        </HashRouter>
    </Provider>
)

export default Root;