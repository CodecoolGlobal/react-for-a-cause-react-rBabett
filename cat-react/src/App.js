import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Home from './components/Home';
import catlogo from './images/cat-logo.png';
import Donate from './components/Donate'


function App() {
  const [activePage, setActivePage] = useState('Home');

  function switchToContactPage() {
    setActivePage('Contact');
  }

  function switchToHomePage() {
    setActivePage('Home');
  }
  
  return (
    <div id="container">
      <div id="header">
        <img src={catlogo} alt="cat logo" id="cat_logo"/>
        <Navbar handleClick={setActivePage}/>
      </div>
      <div id="page">
        {(activePage === 'About') ? (<About />) 
        : (activePage === 'Donate') ? (<Contact  actvivePage={activePage} switchPage={switchToHomePage}/>)
        : (activePage === 'Gallery') ? (<Gallery onAdoptClick={switchToContactPage}/>)
        : (activePage === 'Contact') ? (<Contact  activePage={activePage} switchPage={switchToHomePage}/>)
        : (<Home />)
        }
      </div>
    </div>
  );
} 

export default App;