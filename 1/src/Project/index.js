import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ProviderScreen from "./Screens/ProviderScreen";


ReactDOM.createRoot( document.getElementById( "app" ) ).render( 
    <ProviderScreen>
        < App /> 
    </ProviderScreen>
);
