import React from 'react';
import BaseScreen from './BaseScreen';

export default function ScreenContests( props ) {

  return (
    <BaseScreen background={ "grey" }>
      { props.children }
      <div style={{ background: "grey" }}>ScreenContests</div>
    </BaseScreen>
  )
};
