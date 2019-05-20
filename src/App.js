import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Players from './components/Players';
import Banner from './components/Banner';
import Upload from './components/Upload';
import Player from './components/Player';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={Banner} />
        <Route path='/' component={Home} exact />
        <Route path='/players' component={Players} />
        <Route path='/upload' component={Upload} />
        <Route path='/player/:id' component={Player} />
      </div>
    </BrowserRouter>
  );
}

export default App;
