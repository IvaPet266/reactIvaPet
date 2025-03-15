import React, { createContext, useContext, useState } from 'react';
import theme from '../styles.json';


const color_theme = createContext( theme );


export default function BaseScreen( props ) {
  const { background } = useContext( color_theme )
  const [ color, setColor ] = useState( "#5E3F89" )
  return (
    <div style={{ minHeight:"100vh", background: color}}>
        { props.children }
        <button onClick={ () => setColor( props.background ) }></button>
    </div>
  )
};
 