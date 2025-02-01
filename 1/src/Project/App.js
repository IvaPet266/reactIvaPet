import React, { useState } from 'react'
import Menu from './Menu'
import ScreenContests from './Screens/ScreenContest'
import ScreenMain from './Screens/ScreenMain'
import ScreenDiscussion from './Screens/ScreenDiscussion'
import ScreenNewPost from './Screens/ScreenNewPost'
import ScreenProfile from './Screens/ScreenProfile'
import ScreenSearch from './Screens/ScreenSearch'


export default function App() {
    const [screen, setScreen] = useState( 'main' )


    switch (screen) {
        case "contests":     return <ScreenContests><Menu setScreen={ setScreen }></Menu></ScreenContests>
        case "discussion":   return <ScreenDiscussion><Menu setScreen={ setScreen }></Menu></ScreenDiscussion>
        case "newPost":      return <ScreenNewPost><Menu setScreen={ setScreen }></Menu></ScreenNewPost>
        case "profile":      return <ScreenProfile><Menu setScreen={ setScreen }></Menu></ScreenProfile>
        case "search":       return <ScreenSearch><Menu setScreen={ setScreen }></Menu></ScreenSearch>
        default:             return <ScreenMain><Menu setScreen={ setScreen }></Menu></ScreenMain>
    }
}
