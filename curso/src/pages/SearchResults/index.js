import React, { useState,useEffect } from "react";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import getGifs from "../../services/getGifs";
import { useGif } from "../../hooks/useGif";
export default function SearchResults({ params }) {
    const { keyword } = params;
    const {gifs} = useGif({keyword})
    /*
    const [gifs,setGifs] = useState([]);
    useEffect(()=>{
        getGifs({keyword})
        .then(gifs=>{
            setGifs(gifs)
        })
    },[keyword])
    */

    return (
        <>                    
            <ListOfGifs gifs={gifs}></ListOfGifs>
        </>
    )
}