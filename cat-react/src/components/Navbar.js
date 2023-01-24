import React from 'react'
import Button from './Button'
import Contact from './Contact'

const Navbar = () => {

  const buttons = [
    {
      name: 'Home',
      handle: () => {console.log("Home")}
    },
  {
    name: 'Donate',
    handle: () => {console.log("Donate")},
  },
  {
    name: 'About',
    handle: () => {console.log("About")},
  },
  {
    name: 'Contact',
    handle: () => {console.log("Contact")},
  },
  {
    name: 'Gallery',
    handle: () => {console.log("Gallery")},
  }
]
  return (
    <>{buttons.map(button => (<Button key={button.name} text={button.name} handleClick={button.handle}/>))}</>
  )
}

export default Navbar