import React, { useState } from 'react';
import { useScreen } from '../Screens/ProviderScreen';
import SVGButton, { SVGButton2Paths } from './SVGButtons';


export default function Menu( props ) {
  const [ lang, setLang ] = useState( 'rus' );
  const [ NPfill, setNPfill ] = useState( "#DBC1FF" );
  const [ NPstroke, setNPstroke ] = useState( "#5E3F89" );
  const [ Sstroke, setSstroke ] = useState( "#5E3F89" );
  const [ Sfill, setSfill ] = useState( "#DBC1FF" )
  const [ Pstroke, setPstroke ] = useState( "#5E3F89" );
  const [ Pfill, setPfill ] = useState( 1 );


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
    <div id="menu" style={{
      display: "flex", background: "#DBC1FF", 
      padding: "", alignItems: "center", height: "100px" 
      }}>
      <Button id="main" style_={ false }>Main</Button>
      <Button id="contests" style_={ false }>Contests</Button>
      <Button id="discussion" style_={ false }>Discussion</Button>
      <SVGButton2Paths id="newPost" 
        d1="M35 67.5C52.9493 67.5 67.5 52.9493 67.5 35C67.5 17.0507 52.9493 2.5 35 2.5C17.0507 2.5 2.5 17.0507 2.5 35C2.5 52.9493 17.0507 67.5 35 67.5Z"
        d2="M35 22V48M22 35H48M67.5 35C67.5 52.9493 52.9493 67.5 35 67.5C17.0507 67.5 2.5 52.9493 2.5 35C2.5 17.0507 17.0507 2.5 35 2.5C52.9493 2.5 67.5 17.0507 67.5 35Z"
      />
      <SVGButton id="search" 
        d="M55.25 55.25L42.5625 42.5625M49.4167 26.0833C49.4167 38.97 38.97 49.4167 26.0833 49.4167C13.1967 49.4167 2.75 38.97 2.75 26.0833C2.75 13.1967 13.1967 2.75 26.0833 2.75C38.97 2.75 49.4167 13.1967 49.4167 26.0833Z"
      />
      <SVGButton id="profile" 
        d="M49.3337 55.25V49.4167C49.3337 46.3225 48.1045 43.355 45.9166 41.1671C43.7286 38.9792 40.7612 37.75 37.667 37.75H14.3337C11.2395 37.75 8.272 38.9792 6.08408 41.1671C3.89615 43.355 2.66699 46.3225 2.66699 49.4167V55.25M37.667 14.4167C37.667 20.86 32.4436 26.0833 26.0003 26.0833C19.557 26.0833 14.3337 20.86 14.3337 14.4167C14.3337 7.97334 19.557 2.75 26.0003 2.75C32.4436 2.75 37.667 7.97334 37.667 14.4167Z"
      />
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