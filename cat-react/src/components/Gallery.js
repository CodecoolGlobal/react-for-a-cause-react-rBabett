import AnimalCard from './AnimalCard';
import Animals from './AnimalsObject';

const Gallery = () => {

  const animalCards = Animals.map(animal => (<AnimalCard key={animal.name} name={animal.name} age={animal.age} handleClick={animal.imagehandle} />))
  //const AnimalImages = animals.map(animal => (<img src={require(`../images/${animal.image}`).default} alt={animal.name} className='images'/>))

  const animalImages = Animals.map(animal => (<img key={animal.name + ' img'} src={require(animal.image).default} alt={animal.name} className='images'/>))
  //console.log(Object.values(AnimalImages));

  return (
    <div id="animals">
      <div>{animalImages}</div>
      <div>{animalCards}</div>
    </div>
  )
}

const ThankYou = (e) => {
  //Thank you for adopting e.target.innerText! (animal.name)
  console.log(e.target.innerText)
}


export default Gallery;