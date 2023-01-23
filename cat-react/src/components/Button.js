import Contact from "./Contact";

const Button = ({text, handleClick}) => {
  return (<button onClick={handleClick}>{text}</button>); 
} 

function RenderButtons() {

  /* const buttons = [
    {
      name: 'Donate',
      function: "",
    },
    {
      name: 'About',
      function: "",
    },
    {
      name: 'Contact',
      function: Contact,
    },
    {
      name: 'Gallery',
      function: "",
    }
  ]

  return buttons.map((button, id) => <button key={id} className="header_buttons" id={button.name} onClick= {button.function}>{button.name}</button>); */

}

export default Button;