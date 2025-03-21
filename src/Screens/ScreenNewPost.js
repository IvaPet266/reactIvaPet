import React from 'react';
import BaseScreen from '../Components/BaseScreen';

export default function ScreenNewPost( props ) {

  return (
    <BaseScreen background={ "red" }>
    { props.children }
    <div style={{ background:"red" }}>ScreenNewPost</div>
    </BaseScreen>
  )
};
