import React from 'react';
import BaseScreen from '../Components/BaseScreen';
import Scroll from '../Components/Scroll'

export default function ScreenMain( props ) {

  return (
    <BaseScreen background={ "wheat" }>
      { props.children }
      <div style={{ background:"wheat" }}>ScreenMain</div>
      <Scroll/>
    </BaseScreen>
  )
};
