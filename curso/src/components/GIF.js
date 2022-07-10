import React from "react";
import './GIF.css';
export default function GIF({ title, id, url }) {
    return (
        <a href={`${id}`} className="GIF">
            <h1>{title}</h1>
            <img alt={title} src={url} />
        </a>
    )
}