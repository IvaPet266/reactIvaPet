import React, { useEffect, useState } from 'react';
import './styles.css'; // Подключение стилей

const ImageComponent = ({ src }) => (
    <div className="image-container">
        <img src={src} alt="Картинка" />
    </div>
);

const TextOverlay = ({ children }) => (
    <div className="text-overlay">{children}</div>
);


export default function Test3( props ) {
    const [ animals, setAnimals ] = useState( [ "cat" ] );

    useEffect (
        () => {
            fetch( "https://storage.yandexcloud.net/sharetemp/file.json" ).then( async ( response ) => {
                if ( response.ok ) {
                    setAnimals( JSON.parse( await response.text() ) );
                    console.log( animals ); /* анимация */
                } else console.log( response.status ); /* плашка об ошибке */
            })
            try {
                const photosNode = document.getElementById("photos");
                const photos = photosNode.children;

                let maxHeight = 0;

                for ( let i = 0; i < photos.length; i++ ) {
                    const childBottom = photos[ i ].offsetTop + photos[ i ].offsetHeight;
                    if ( childBottom > maxHeight ) { maxHeight = childBottom; };
                    photos[ i ].style.right = `${ 10 * i }px`;
                };

                photosNode.style.height = `${ maxHeight }px`;      

            }
            catch ( error ) {
                console.log( error );
            }
        }, [ props.filter ]
    )
    console.log( animals );

    return (
        <>
            <p> { props.filter } </p>
            <div id="photos" style={ { display: "flex", flexWrap: "wrap", height: "300px", width: "100%", padding: "10px"} }>
                { 
                    animals.map( ( obj, key ) => 
                        <div className="parent-container" key={ key }>
                            <ImageComponent src={ obj.photo } />
                            <TextOverlay>{ obj.kind }, { obj.name }</TextOverlay>
                        </div>
                    )
                }
            </div>
                
                    {/* <div style={ { position: "relative", height: "250px", margin: "5px" } } key={ key }>
                        <div style={ { 
                            position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundSize: "cover", backgroundPosition: "center", backgroundImage: `url( ${ obj.photo } )`
                        } } /*src={ obj.photo }*/}{/*></div> */}
                        {/* <p style={ { 
                            position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "white", fontSize: "24px", textAlign: "center" 
                            } }>{obj.kind}.{obj.name}</p>
                    </div>
                    )
                }
            </div> */}
            {/* <ol> { animals.map( ( obj, index ) => <li key={ index }>{ obj.name }</li> ) } </ol> */}
        </>
    )
}
