import React, {useEffect, useState } from "react";
import { Link,useLocation } from "wouter"; // useLocation devuelve un path y una funcion
import getGifs from '../../services/getGifs';
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
const POPULAR_GIFS = ["Mexico", "Adidas", "Jordan" ,"Harry Potter"];
export default function Home() {
    const [keyword,SetKeyword] = useState('');
    const [path, pushLocation] = useLocation();

    // <---------- GIFS POPULARES
    const [gifs,setGifs] = useState([]);
    useEffect(()=>{
        getGifs({keyword : 'Hora de Aventura'})
        .then(gifs=>{
            setGifs(gifs)
        })
    },[keyword])
    // <----------- FIN GIFS POPULARES
    const handleSubmit = event =>{
        event.preventDefault();
        pushLocation(`/search/${keyword}`);
    }   
    const handeChange = event => {
        SetKeyword(event.target.value);
    }
    return (
        <>
            <h1>Gif Populares</h1>
            <ListOfGifs gifs={gifs}/>
            <h2>Buscador de Gifs</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={handeChange} type='text' value={keyword} placeholder="Busca tus Gifs aqui!"></input>
            </form>
            <h2>Gifs mas Buscados</h2>
            <ul>
                {POPULAR_GIFS.map(
                    data => (
                        <li key={data}>
                            <Link to={`/search/${data}`}>Gifs de :{data}</Link>
                        </li>
                    )
                )}
            </ul>
        </>
    )
}