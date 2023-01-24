import AnimalCard from './AnimalCard';
import Animals from './AnimalsObject';

const Gallery = () => {

  const animalCards = Animals.map(animal => (<AnimalCard key={animal.name} name={animal.name} age={animal.age} handleClick={animal.imagehandle} />))

  return (
    <div id="animals">
      <div>{animalCards}</div>
    </div>
  )
}

/* const ThankYou = (e) => {
  //Thank you for adopting e.target.innerText! (animal.name)
  console.log(e.target.innerText)
} */


export default Gallery;