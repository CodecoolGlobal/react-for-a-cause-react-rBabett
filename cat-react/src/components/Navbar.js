import { useState } from 'react'
import React from 'react'
import Button from './Button'
import Contact from './Contact'

const Navbar = ({handleClick}) => {

  const buttons = [
    {
      name: 'Home',
      handle: (e) => {handleClick(e.target.innerText)},
    },
    {
      name: 'About',
      handle: (e) => {handleClick(e.target.innerText)},
    },
    {
      name: 'Donate',
      handle: (e) => {handleClick(e.target.innerText)},
    },
    {
      name: 'Gallery',
      handle: (e) => {handleClick(e.target.innerText)},
    },
    {
      name: 'Contact',
      handle: (e) => {handleClick(e.target.innerText)},
    },
  ]

  //console.log(ActivePage);

  const headerButtons = buttons.map(button => (<Button key={button.name} className="navbar_buttons" text={button.name} handleClick={button.handle}/>))
  
  /* const ChangeActivePage = (e) => {
    setActivePage(e.target.innerText);
  }; */
  
  return (
    <div id="header">
      <div>{headerButtons}</div>
    </div>
    )
  }


export default Navbar