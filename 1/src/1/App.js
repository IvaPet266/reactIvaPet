
import React, { useState } from "react";
// import Test3 from "./Test3";
// import Test2 from "./Test2";
// import Test1 from "./Test1";


export default function App ( props ) {

    const [ color, setColor ] = useState( "wheat" );
    const [ filter, setFilter ] = useState( 0 );

    // return (
    //     <>
    //         <div style={ { background: color } }>
    //             <Test3 filter={ filter }></Test3>

    //             <button onClick={ () => setFilter( Math.random() )}> Filter </button>
    //             <button onClick={ () => setColor( 
    //                 `rgb( ${ Math.floor( Math.random() * 255 ) }, ${ Math.floor( Math.random() * 255 ) }, ${ Math.floor( Math.random() * 255 ) } )`
    //             ) }> Color </button>
    //         </div>
    //     </>
    // )

    // return (
    //     <>
    //       <Test2 animals={ animals }></Test2>
    //       <div>
    //            <input id="input" placeholder="input an animal"></input>
    //            <button onClick={ () => {
    //                const ani = document.getElementById( "input" ).value;
    //                if ( animals.indexOf( ani ) == -1 ) {
    //                    setAnimals( ( animals.join( ',' ) + ',' + ani ).split( ',' ) )
    //                };
    //                document.getElementById( "input" ).value = ''
    //            } }>Отправить</button>
    //        </div>
    //        <ol> { animals.map( ( value, index ) => <li key={ index }>{ value }</li> ) } </ol>
    //     </>
    // )

    // const [ people, setPeople ] = useState( [ "Ivan", "Viki", "Sally", "peter" ] );

    // return (
    //     <>
    //        <ol> { people.map( (value, index ) => <li key={ index }>{ value }</li> ) } </ol>
    //     </>
    // )

    // const [ nick, setNick ] = useState( "Undefined" );
    // const [ password, setPasswword ] = useState( null );
    // return (
    //     <>
    //        {/* <Test1 nick={ nick } password={ password }></Test1> */}
    //        <input id="input" onInput={() => {
    //            setNick( document.getElementById( "input" ).value );
    //        }}></input>
    //        <input id="password" onInput={() => {
    //            setPasswword( document.getElementById( "password" ).value );
    //        }}></input>
    //     </>
    // )
};  
