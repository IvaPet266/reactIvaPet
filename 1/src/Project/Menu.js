import React, { useState } from 'react'
import { useScreen } from './Screens/ProviderScreen'
import newPostIcon_normal from './imgs/newPostIcon-normal.svg'
import searchIcon_normal from './imgs/searchIcon-normal.svg'
import profileIcon_normal from './imgs/profileIcon-normal.svg'


export default function Menu( props ) {
  const [ lang, setLang ] = useState( 'rus' )
  const text = {
    "eng": {
      "mainScreen": "Main",
      "competitionsScreen": "Competitions",
      "subscriptionsScreen": "Subscription",
      "discussionScreen": "Discussion"
    },
    "rus": {
      "mainScreen": "Главная",
      "competitionsScreen": "Конкурсы",
      "subscriptionsScreen": "Подписки",
      "discussionScreen": "Обсуждение"
    }
}
  return (
    <div id="menu" style={{ background: "#DBC1FF", width: "100%", position: "absolute", top: "0px", left: "0px" }}>
      <Button onClick={ () => props.setScreen( "main" ) } id="main" style_={ false } >Main</Button>
      <Button onClick={ () => props.setScreen( "contests" ) } id="contests" style_={ false } >Contests</Button>
      <Button onClick={ () => props.setScreen( "discussion" ) } id="discussion" style_={ false } >Discussion</Button>
      <Button onClick={ () => props.setScreen( "newPost" ) } id="newPost" style_={ true } ><img src={ newPostIcon_normal } alt="+" /></Button>
      <Button onClick={ () => props.setScreen( "search" ) } id="search" style_={ true } ><img src={ searchIcon_normal } alt="search"/></Button>
      <Button onClick={ () => props.setScreen( "profile" ) } id="profile" style_={ true } ><img src={ profileIcon_normal } alt="profile"/></Button>
    </div>
  )
}



export function Button( props ) {

  const {screen, setScreen} = useScreen()

  let className
  switch (screen) {
    case props.id: className = "btn-dark"; break
    default: className = "btn-normal"; break
  }
  console.log(props.style_);
  if (props.style_ == true) {className = "icon-btn-normal"} 
  
  return (
    <button onClick={() => setScreen(props.id)} className={ className }>{ props.children }</button>
  )
}


