import React, { useState } from 'react';
import { useScreen } from './Screens/ProviderScreen';



export default function Menu( props ) {
  const [ lang, setLang ] = useState( 'rus' );


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
  };


  return (
    <div id="menu" style={{ background: "#DBC1FF", padding: ""}}>
      <Button onClick={ () => props.setScreen( "main" ) } id="main" style_={ false } >Main</Button>
      <Button onClick={ () => props.setScreen( "contests" ) } id="contests" style_={ false } >Contests</Button>
      <Button onClick={ () => props.setScreen( "discussion" ) } id="discussion" style_={ false } >Discussion</Button>
      <Button onClick={ () => props.setScreen( "newPost" ) } id="newPost" style_={ true } style={{background: "#DBC1FF"}}>
        <Image styles={[{fill: fill, pointerEvents: "none", transition: "300ms ease-out"}, {stroke: stroke, pointerEvents: "none", transition: "300ms ease-out"}]} // TODO
          ds={{"1": ["M35 67.5C52.9493 67.5 67.5 52.9493 67.5 35C67.5 17.0507 52.9493 2.5 35 2.5C17.0507 2.5 2.5 17.0507 2.5 35C2.5 52.9493 17.0507 67.5 35 67.5Z"], 
          "2": ["M35 22V48M22 35H48M67.5 35C67.5 52.9493 52.9493 67.5 35 67.5C17.0507 67.5 2.5 52.9493 2.5 35C2.5 17.0507 17.0507 2.5 35 2.5C52.9493 2.5 67.5 17.0507 67.5 35Z", "stroke-width"="4", "stroke-linecap"="round", "stroke-linejoin"="round"]}}
      />
      </Button>
      <Button onClick={ () => clickedSearch( "search" ) } id="search" style_={ true } > 
        <img src={ searchIcon }/>
      </Button>
      <Button onClick={ () => clickedProfile( "profile" ) } id="profile" style_={ true } >
        <img src={ profileIcon }/>
      </Button>
    </div>
  )
};



export function Button( props ) {

  const { screen, setScreen } = useScreen();

  let className;

  switch ( screen ) {
    case props.id: className = "btn-dark"; break;
    default: className = "btn-normal"; break;
  };
  
  if ( props.style_ == true ) { className = "icon-btn-normal" };
  
  return (
    <button onClick={ () => setScreen( props.id ) } className={ className }>{ props.children }</button>
  )
};


export function Image(props) {
  const [ fill, setFill ] = useState( "#DBC1FF" );
  const [ stroke, setStroke ] = useState( "#5E3F89" )
  return (
    <svg 
      onMouseEnter={ () => {
        setFill( "#5E3F89" );
        setStroke( "white" )
      }}
      onMouseOut={ () => {
        setFill( "#DBC1FF" );
        setStroke( "#5E3F89" )
      }}
      style={{background: "#DBC1FF"}} width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      {props.styles.map( ( value, index ) => <path style={ value } />)} //TODO
      
    </svg>
  )
}
