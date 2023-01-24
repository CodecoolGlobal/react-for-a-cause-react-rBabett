import { useState } from 'react';
import './App.css';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { useState } from 'react';



function App() {
  const [ActivePage, setActivePage] = useState('Home');
  
  return (
    <div>
      <div id="header">
        <Navbar handleClick={setActivePage}/>
      </div>
      <div id="page">
        {(ActivePage === 'About') ? (<div>About component</div>) 
        : (ActivePage === 'Donate') ? (<div>Donate component</div>)
        : (ActivePage === 'Gallery') ? (<div>Gallery component</div>)
        : (ActivePage === 'Contact') ? (<div>Contact component</div>)
        : (<div>Home</div>)
        }
      </div>
    </div>
  );
} 

export default App;