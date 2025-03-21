import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from './app/store'
import { Provider } from 'react-redux'
import ProviderScreen, { useScreen } from "./Screens/ProviderScreen";
import ErrorBoundary from "./Components/ErrorBoundry";
import { BrowserRouter, Route, Routes } from "react-router";
import ScreenMain from "./Screens/ScreenMain";
import ScreenContests from "./Screens/ScreenContests";
import Menu from "./Components/Menu";
import ScreenDiscussion from "./Screens/ScreenDiscussion";
import ScreenNewPost from "./Screens/ScreenNewPost";
import ScreenSearch from "./Screens/ScreenSearch";
import ScreenProfile from "./Screens/ScreenProfile";



const {screen, setScreen} = useScreen();

ReactDOM.createRoot( document.getElementById( "app" ) ).render( 
    <ErrorBoundary>
        <Provider store={ store }>
            <ProviderScreen>
                <BrowserRouter> 
                    <Routes>
                        <Route element={ <App/> }>
                            <Route index element={ <ScreenMain><Menu setScreen={ setScreen }/></ScreenMain> } />
                            <Route path="contests" element={ <ScreenContests><Menu setScreen={ setScreen }/></ScreenContests> } />
                            <Route path="discussion" element={ <ScreenDiscussion><Menu setScreen={ setScreen }/></ScreenDiscussion> } />
                            <Route path="newpost" element={ <ScreenNewPost><Menu setScreen={ setScreen }/></ScreenNewPost> } />
                            <Route path="search" element={ <ScreenSearch><Menu setScreen={ setScreen }/></ScreenSearch> } />
                            <Route path="profile" element={ <ScreenProfile><Menu setScreen={ setScreen }/></ScreenProfile> } />
                        </Route>
                    </Routes>
                </BrowserRouter>
                {/* <App/> */}
            </ProviderScreen>
        </Provider>
    </ErrorBoundary>
);
