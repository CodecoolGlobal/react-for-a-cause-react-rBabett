import Button from "./Button";
import Animals from './AnimalsObject';

const AnimalCard = ({name, age, handleClick}) => {

  const animalImages = Animals.map(animal => (<img key={animal.name + ' img'} src={require(animal.image).default} alt={animal.name} className='images'/>))
  
  return (
  <div className="animal_cards_info">
    <div>{animalImages}</div>
    <h4>{name}</h4>
    <p>Age: {age}</p>
    <Button key={name + 'btn'} className='submit_buttons' text='Adopt' handleClick={handleClick}/>
  </div>
  ); 
}

export default AnimalCard;