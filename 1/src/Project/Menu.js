import React, { useState } from 'react'

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
    <div id="menu" style={{ background: "#DBC1FF" }}>
      <Button pprops={ props } onClick={ () => props.setScreen( "main" ) } id="main" >Main</Button>
      <Button pprops={ props } onClick={ () => props.setScreen( "contests" ) } id="contests" >Contents</Button>
      <Button pprops={ props } onClick={ () => props.setScreen( "discussion" ) } id="discussion" >Discussion</Button>
      <Button pprops={ props } onClick={ () => props.setScreen( 'newPost' ) } id='newPost' >+</Button>
      <Button pprops={ props } onClick={ () => props.setScreen( 'search' ) } id='search' >Search</Button>
      <Button pprops={ props } onClick={ () => props.setScreen( 'profile' ) } id='profile' >Profile</Button>
    </div>
  )
}

export function Button( props ) {
  const [switched, setSwitched] = useState( false )

  const change = ( inst ) => {
    const menu_btns = document.getElementById( "menu" ).children
    for (const child in menu_btns) {
      if ( child.id != props.id ) {
        child.this.props.setSwitched( false ); 
      } else { child.this.props.setSwitched( true ) }
    }
  }

  let className = ''
  switch (switched) {
    case true: className = "btn-dark"
    default: className = "btn-normal"
  }
  
  return (
    <button onClick={() => change( true ) } className={ className }>{ props.children }</button>
  )
}


