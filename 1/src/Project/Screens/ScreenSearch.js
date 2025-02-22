import React from 'react';
import BaseScreen from './BaseScreen';

export default function ScreenSearch( props ) {

  return (
    <BaseScreen background={ "midnightblue" }>
    { props.children }
    <div style={{ background: "midnightblue" }}>ScreenSearch</div>
    </BaseScreen>
  )
}
