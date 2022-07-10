import React from 'react';
import {Link, Route } from 'wouter'; // ALTERNATIVA A REACT-ROUTER
import './App.css';
import ListOfGifs from './components/ListOfGifs';


function App() {
  

  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>  
        <Link to='/gif/club america'>Gifs del Club america</Link>  
        <Link to='/gif/Lena Paul'>Gifs de Lena Paul</Link>
        <Link to='/gif/Queretaro'>Gifs de Queretaro</Link>
        <Route path='/gif/:keyword' component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
