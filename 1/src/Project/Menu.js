import React, { useState } from 'react';
import { useScreen } from './Screens/ProviderScreen';


export default function Menu( props ) {
  const [ lang, setLang ] = useState( 'rus' );
  const [ NPfill, setNPfill ] = useState( "#DBC1FF" );
  const [ NPstroke, setNPstroke ] = useState( "#5E3F89" );
  const [ NPstatus, setNPstatus ] = useState( 0 );
  const [ Sstroke, setSstroke ] = useState( "#5E3F89" );
  const [ Sstate, setSstate ] = useState( 1 );
  const [ Pstroke, setPstroke ] = useState( "#5E3F89" );
  const [ Pstate, setPstate ] = useState( 1 );


  const searchRects = [
    <rect style={{ pointerEvents: "none" }} x="2" y="2" width="66" height="66" rx="18" fill="#5E3F89"/>, 
    <rect style={{ pointerEvents: "none" }} x="2" y="2" width="66" height="66" rx="18" stroke="white" strokeWidth="4"/>
  ]

  const profileRects = [
    <rect style={{ pointerEvents: "none" }} x="2" y="2" width="66" height="66" rx="15" fill="#5E3F89"/>,
    <rect style={{ pointerEvents: "none" }} x="2" y="2" width="66" height="66" rx="15" stroke="white" strokeWidth="4"/>
  ]
  
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
      <Button onClick={ () => { props.setScreen( "newPost" ) }} id="newPost" style_={ true } style={{ background: "#DBC1FF" }}> // TODO доделать функцию onClick, чтобы hover становился постоянным и наоборот
        <svg 
          onMouseEnter={ () => {
            setNPfill( "#5E3F89" );
            setNPstroke( "white" );
          }}
          onMouseOut={ () => {
            setNPfill( "#DBC1FF" );
            setNPstroke( "#5E3F89" );
          }}
          style={{ background: "#DBC1FF", transition: "all 300ms ease-out" }} width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path style={{ transition: "all 300ms ease-out", fill: NPfill, pointerEvents: "none" }} d="M35 67.5C52.9493 67.5 67.5 52.9493 67.5 35C67.5 17.0507 52.9493 2.5 35 2.5C17.0507 2.5 2.5 17.0507 2.5 35C2.5 52.9493 17.0507 67.5 35 67.5Z"/>
          <path style={{ transition: "all 300ms ease-out", stroke: NPstroke, pointerEvents: "none" }} d="M35 22V48M22 35H48M67.5 35C67.5 52.9493 52.9493 67.5 35 67.5C17.0507 67.5 2.5 52.9493 2.5 35C2.5 17.0507 17.0507 2.5 35 2.5C52.9493 2.5 67.5 17.0507 67.5 35Z"  strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Button>
      <Button onClick={ () => props.setScreen( "search" ) } id="search" style_={ true }> // TODO доделать функцию onClick, чтобы hover становился постоянным и наоборот
        <svg 
          onMouseEnter={ () => { setSstroke( "white" ); setSstate( 0 ); }}
          onMouseOut={ () => { setSstroke( "#5E3F89" ); setSstate( 1 ); }}
          width="70" height="70" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
          {() => { if ( Sstate == 0 ) return searchRects[ 0 ] }} //! не работает
          {() => { if ( Sstate == 0 ) return searchRects[ 1 ] }} //! не работает
          <path style={{ transition: "all 300ms ease-out", stroke: Sstroke, pointerEvents: "none" }} d="M55.25 55.25L42.5625 42.5625M49.4167 26.0833C49.4167 38.97 38.97 49.4167 26.0833 49.4167C13.1967 49.4167 2.75 38.97 2.75 26.0833C2.75 13.1967 13.1967 2.75 26.0833 2.75C38.97 2.75 49.4167 13.1967 49.4167 26.0833Z" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Button>
      <Button onClick={ () => props.setScreen( "profile" ) } id="profile" style_={ true }> // TODO доделать функцию onClick, чтобы hover становился постоянным и наоборот
        <svg 
          onMouseEnter={ () => { setPstroke( "white" ); setSstate( 0 ); }}
          onMouseOut={ () => { setPstroke( "#5E3F89" ); setSstate( 1 ); }}
          width="70" height="70" viewBox="0 0 52 58" fill="none" xmlns="http://www.w3.org/2000/svg">
          {() => { if ( Pstate == 0 ) return profileRects[ 0 ] }} //! не работает
          {() => { if ( Pstate == 0 ) return profileRects[ 1 ] }} //! не работает
          <path style={{ transition: "all 300ms ease-out", stroke: Pstroke, pointerEvents: "none" }} d="M49.3337 55.25V49.4167C49.3337 46.3225 48.1045 43.355 45.9166 41.1671C43.7286 38.9792 40.7612 37.75 37.667 37.75H14.3337C11.2395 37.75 8.272 38.9792 6.08408 41.1671C3.89615 43.355 2.66699 46.3225 2.66699 49.4167V55.25M37.667 14.4167C37.667 20.86 32.4436 26.0833 26.0003 26.0833C19.557 26.0833 14.3337 20.86 14.3337 14.4167C14.3337 7.97334 19.557 2.75 26.0003 2.75C32.4436 2.75 37.667 7.97334 37.667 14.4167Z" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
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