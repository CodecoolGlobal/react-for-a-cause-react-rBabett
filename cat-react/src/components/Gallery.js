import AnimalCard from './AnimalCard';
import {useEffect, useState} from 'react';
import animals from './AnimalsObject';

const Gallery = (props) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    Promise.all(animals.map((animal) => {
      return import(`../images/${animal.image}`)
    })).then((images) => {
      setImages(images.map((image, index) => {
        return {...animals[index], image:image.default}
      }))
    })
  }, [])


  return (
    <div id="animals_container">
        <AnimalCard onAdoptClick={props.onAdoptClick} animals={images} />
    </div>
  )
}

export default Gallery;