import React from 'react';
import BaseScreen from './BaseScreen';

export default function ScreenDiscussion( props ) {

  return (
    <BaseScreen background={ "orange" }>
    { props.children }
    <div style={{ background:"orange" }}>ScreenDiscussion</div>
    </BaseScreen>
  )
};
