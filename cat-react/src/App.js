import './App.css';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { useState } from 'react';


function App() {
  const [ActivePage, setActivePage] = useState('Home');
  if (ActivePage === 'Gallery') {
    console.log('Gallery')
  }
  
  return (
    <div>
      <div id="header">
        <Navbar handleClick={setActivePage}/>
      </div>
      <div id="page">
        {(ActivePage === 'Gallery') ?
          (<div>Hello</div>) : (<div>Nem hello</div>)
        }
      </div>
    </div>
  );
}

export default App;