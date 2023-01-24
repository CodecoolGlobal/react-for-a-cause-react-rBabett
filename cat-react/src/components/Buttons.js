import { useState } from 'react';

function RenderButtons() {
  const buttons = ['Donate', 'About', 'Contact', 'Gallery', 'Home']

  const [headerName, setheaderName] = useState('Home');

  const filteredButtons= buttons.filter(button => button !== headerName)

  const headerButtons = filteredButtons.map((button) => <button className="header_buttons" id={button} onClick={ChangePage}>{button}</button>);

  function ChangePage(event) {
    setheaderName(event.target.id);
  };
  
  return (
    <div id="header">
      <h2>{headerName}</h2>
      <div>{headerButtons}</div>
    </div>
  )
}

export default RenderButtons;