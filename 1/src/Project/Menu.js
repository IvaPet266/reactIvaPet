import React, { useState } from 'react'
import { useScreen } from './Screens/ProviderScreen'
import newPostIconNormal from './imgs/newPostIcon-normal.svg'
import newPostIconActive from './imgs/newPostIcon-active.svg'
import searchIconNormal from './imgs/searchIcon-normal.svg'
import searchIconActive from './imgs/searchIcon-active.svg'
import profileIconNormal from './imgs/profileIcon-normal.svg'
import profileIconActive from './imgs/profileIcon-active.svg'



let newPostIcon = newPostIconNormal;
let searchIcon = searchIconNormal;
let profileIcon = profileIconNormal;


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

  function clickedNewPost ( screen ) {
    newPostIcon = newPostIcon == newPostIconNormal ? newPostIconActive : newPostIconNormal
    props.setScreen( screen );
  }

  function clickedSearch ( screen ) {
    searchIcon = searchIcon == searchIconNormal ? searchIconActive : searchIconNormal
    props.setScreen( screen );
  }

  function clickedProfile ( screen ) {
    profileIcon = profileIcon == profileIconNormal ? profileIconActive : profileIconNormal
    props.setScreen( screen );
  }

  return (
    <div id="menu" style={{ background: "#DBC1FF", padding: ""}}>
      <Button onClick={ () => props.setScreen( "main" ) } id="main" style_={ false } >Main</Button>
      <Button onClick={ () => props.setScreen( "contests" ) } id="contests" style_={ false } >Contests</Button>
      <Button onClick={ () => props.setScreen( "discussion" ) } id="discussion" style_={ false } >Discussion</Button>
      <Button onClick={ () => clickedNewPost( "newPost" ) } id="newPost" style_={ true } >
        <img src={ newPostIcon }/>
      </Button>
      <Button onClick={ () => clickedSearch( "search" ) } id="search" style_={ true } > 
        <img src={ searchIcon }/>
      </Button>
      <Button onClick={ () => clickedProfile( "profile" ) } id="profile" style_={ true } >
        <img src={ profileIcon }/>
      </Button>
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
  
  if (props.style_ == true) {className = "icon-btn-normal"} 
  
  return (
    <button onClick={() => setScreen(props.id)} className={ className }>{ props.children }</button>
  )
}

export function Image( props ) {
  return (
    <img src={ props.src_ } style={{ height: '70px', width: '70px', margin: 0, padding: 0, stroke: "none" }}></img>
  )
}

