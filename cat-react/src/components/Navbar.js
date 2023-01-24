import { useState } from 'react'
import React from 'react'
import Button from './Button'

const Navbar = () => {

  const buttons = [
    {
      name: 'Home',
      handle: (e) => {ChangePage(e)},
    },
    {
      name: 'Donate',
      handle: (e) => {ChangePage(e)},
    },
    {
      name: 'About',
      handle: (e) => {ChangePage(e)},
    },
    {
      name: 'Contact',
      handle: (e) => {ChangePage(e)},
    },
    {
      name: 'Gallery',
      handle: (e) => {ChangePage(e)},
    }
  ]

  const [headerName, setheaderName] = useState('Home');
  const filteredButtons = buttons.filter(button => button !== headerName)
  const headerButtons = filteredButtons.map(button => (<Button key={button.name} className="navbar_buttons" text={button.name} handleClick={button.handle}/>))

  const ChangePage = (e) => {
    setheaderName(e.target.innerText);
  };
  
  return (
    <div id="header">
      <h2>{headerName}</h2>
      <div>{headerButtons}</div>
    </div>
    )
}

export default Navbar