import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Home from './components/Home';
import catlogo from './images/cat-logo.png';


function App() {
  const [ActivePage, setActivePage] = useState('Home');

  function switchToContactPage() {
    setActivePage('Contact');
  }
  
  return (
    <div id="container">
      <div id="header">
        <img src={catlogo} alt="cat logo" id="cat_logo"/>
        <Navbar handleClick={setActivePage}/>
      </div>
      <div id="page">
        {(ActivePage === 'About') ? (<About />) 
        : (ActivePage === 'Donate') ? (<Contact actvivePage={ActivePage} />)
        : (ActivePage === 'Gallery') ? (<Gallery onAdoptClick={switchToContactPage}/>)
        : (ActivePage === 'Contact') ? (<Contact ActivePage={ActivePage} />)
        : (<Home />)
        }
      </div>
    </div>
  );
} 

export default App;