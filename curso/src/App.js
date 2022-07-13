import React from 'react';
import {Link, Route } from 'wouter'; // ALTERNATIVA A REACT-ROUTER
import './App.css';
import ListOfGifs from './components/ListOfGifs/ListOfGifs';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import logo from './img/VW.png';
function App() {
  

  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>  
        <Link to='/'><img className='logo' alt='Pepe Logo' src={logo}/></Link>          
        <Route path='/' component={Home} />
        <Route path='/search/:keyword' component={SearchResults} />
      </section>
    </div>
  );
}

export default App;
