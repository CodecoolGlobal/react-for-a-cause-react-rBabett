import { useState } from 'react';
import './App.css';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import About from './components/About';



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
        : (ActivePage === 'Gallery') ? (<div>Gallery component</div>)
        : (ActivePage === 'Contact') ? (<Contact />)
        : (<div>Home</div>)
        }
      </div>
    </div>
  );
} 

export default App;