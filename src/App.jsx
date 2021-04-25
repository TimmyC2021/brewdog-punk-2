import React, { useState } from 'react';
import logo from './assets/images/brewdog-logo-crest.ico';
import './App.css';
import Search from '../src/components/Search';
import DisplayBeers from '../src/components/DisplayBeers';

function App() {

  const [searchOpen, setSearchOpen] = useState(false);

  const beers = [
    {
      name: "Beer 1",
      ph: 5,
      colour: "orange",
      isFavourite: true
    },
    {
      name: "Beer Two",
      ph: 2,
      colour: "green",
      isFavourite: true
    },
    {
      name: "Beer thr33",
      ph: 10,
      colour: "yellow",
      isFavourite: true
    },
    {
      name: "Beer 4our",
      ph: 5,
      colour: "blue",
      isFavourite: false
    }
  ]


  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>Punk IPA's served from Punk's API</h2>
        </div>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
      <main className="main">
        <section className={`search ${searchOpen ? "searchOpen" : ""}`}>
          <Search searchOpen={searchOpen} setSearchOpen={setSearchOpen}/>
        </section>
        <section className="displayBeers">
          <DisplayBeers beers={beers}/>
        </section>
      </main>
    </div>
  );
}

export default App;
