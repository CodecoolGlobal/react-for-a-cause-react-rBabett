import './App.css';
import Contact from './components/Contact';
import RenderButtons from './components/Buttons';


function App() {
  return (
    <div>
      <div id="header">
        <RenderButtons />
      </div>
      <div id="page">
        <Contact />
      </div>
    </div>
  );
}

export default App;
