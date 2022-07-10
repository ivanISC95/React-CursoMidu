import React, { useState, useEffect } from 'react';
import GIF from './GIF';
import getGifs from '../services/getGifs';

export default function ListOfGifs({ params }) {
    const {keyword} = params; // tomar parametro desde la URL
    const [loading,setLoading] = useState(false);
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        setLoading(true);
        getGifs({ keyword })
         .then(gifs => {
            setGifs(gifs) 
            setLoading(false)})
    }, [keyword])

    if(loading) return <i>CARGANDO</i>
    

    return <>
        {

            gifs.map(({ id, title, url }) =>
                <GIF key={id} url={url} title={title} id={id}></GIF>
            )
        }
    </>


}