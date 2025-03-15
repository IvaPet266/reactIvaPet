import React from 'react';
import BaseScreen from '../Components/BaseScreen';

export default function ScreenProfile( props ) {

  return (
    <BaseScreen background={ "white" }>
      { props.children }
      <div style={{ background: "white" }}>ScreenProfile</div>
    </BaseScreen>
  )
}
