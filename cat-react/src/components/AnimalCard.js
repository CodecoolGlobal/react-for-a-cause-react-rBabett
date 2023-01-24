const AnimalCard = ({image, className, name, age, handleClick}) => {
  return (
  <div className="animal_cards">
    <img src={image} alt={name} className={className}></img>
    <h4>{name}</h4>
    <p>Age: {age}</p>
    <Button key={name} className='submit_buttons' text='Adopt' handleClick={handleClick}/>
  </div>
  ); 
} 

export default Button;