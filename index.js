import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from './app/store'
import { Provider } from 'react-redux'
import ProviderScreen from "./Screens/ProviderScreen";
import ErrorBoundary from "./Components/ErrorBoundry";




ReactDOM.createRoot( document.getElementById( "app" ) ).render( 
    <ErrorBoundary>
        <Provider store={ store }>
            <ProviderScreen>
                < App />
            </ProviderScreen>
        </Provider>
    </ErrorBoundary>
);
