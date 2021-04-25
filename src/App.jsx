import React, { useState } from 'react';
import logo from './assets/images/brewdog-logo-crest.ico';
import './App.css';
import Search from '../src/components/Search';
import DisplayBeers from '../src/components/DisplayBeers';

function App() {

  const [searchOpen, setSearchOpen] = useState(false);




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
        <section className="search">
          <Search searchOpen={searchOpen} setSearchOpen={setSearchOpen}/>
        </section>
        <section className="displayBeers">
          <DisplayBeers />
        </section>
      </main>
    </div>
  );
}

export default App;
