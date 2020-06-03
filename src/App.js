import React from 'react';
import './App.css';
import Products from './Products.js';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Navbar.js';

function App() {

  return (
    <div>
      <Navbar/>
      <br/>
      <center>
        <section>
          <Products/>
        </section>
        </center>
    </div>
  );
}

export default App;
