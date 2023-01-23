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
  ]

  return buttons.map((button) => <button id={button.name}>{button.name}</button>);

}

export default RenderButtons;