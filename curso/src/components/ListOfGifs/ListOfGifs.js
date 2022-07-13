import React, { useState, useEffect } from 'react';
import GIF from '../GIF/GIF';
import './LisOfGifs.css';

export default function ListOfGifs({ gifs }) {
    return <row className='ListOfGifs'>
    {
      gifs.map(({id, title, url}) =>
        <GIF
          id={id}
          key={id}
          title={title}
          url={url}
        />
      )
    }
  </row>
}