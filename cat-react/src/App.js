import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Donate from './components/Donate';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Home from './components/Home';


function App() {
  const [ActivePage, setActivePage] = useState('Home');
  
  return (
    <div>
      <div id="header">
        <Navbar handleClick={setActivePage}/>
      </div>
      <div id="page">
        {(ActivePage === 'About') ? (<About />) 
        : (ActivePage === 'Donate') ? (<div>Donate component</div>)
        : (ActivePage === 'Gallery') ? (<Gallery />)
        : (ActivePage === 'Contact') ? (<Contact />)
        : (<Home />)
        }
      </div>
    </div>
  );
} 

export default App;