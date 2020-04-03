import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import {PersistGate} from 'redux-persist/integration/react';
import App from './app';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        
            <App/>
        {/* </PersistGate> */}

        </HashRouter>
    </Provider>
)

export default Root;