function RenderButtons() {
  const buttons = [
    {
      name: 'Donate',
    },
    {
      name: 'About',
    },
    {
      name: 'Contact',
    },
    {
      name: 'Gallery',
    }
  ]

  return buttons.map((button) => <button className="header_buttons" id={button.name}>{button.name}</button>);

}

export default RenderButtons;