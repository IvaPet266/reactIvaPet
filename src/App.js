import React, { useState } from 'react'
import ScreenContests from './Screens/ScreenContests'
import ScreenMain from './Screens/ScreenMain'
import ScreenDiscussion from './Screens/ScreenDiscussion'
import ScreenNewPost from './Screens/ScreenNewPost'
import ScreenProfile from './Screens/ScreenProfile'
import ScreenSearch from './Screens/ScreenSearch'
import { useScreen } from './Screens/ProviderScreen'
import Menu from './Components/Menu'


export default function App() {
    const {screen, setScreen} = useScreen();

    switch (screen) {
        case "contests":   return <ScreenContests><Menu setScreen={() => {console.log(this.style.height), setScreen }}/></ScreenContests>
        case "discussion": return <ScreenDiscussion><Menu setScreen={ setScreen }/></ScreenDiscussion>
        case "newPost":    return <ScreenNewPost><Menu setScreen={ setScreen }/></ScreenNewPost>
        case "profile":    return <ScreenProfile><Menu setScreen={ setScreen }/></ScreenProfile>
        case "search":     return <ScreenSearch><Menu setScreen={ setScreen }/></ScreenSearch>
        default:           return <ScreenMain><Menu setScreen={ setScreen }/></ScreenMain>
    }
}



