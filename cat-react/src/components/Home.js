import { useEffect, useState } from "react";
import animals from "./AnimalsObject";
import Articles from "./Articles";

const Home = () => {
  const [images, setImages] = useState([]);

  
  useEffect(() => {
    Promise.all(
      animals.map((animal) => {
        return import(`../images/${animal.image}`);
      })
    ).then((images) => {
      setImages(
        images.map((image, index) => {
          return { ...animals[index], image: image.default };
        })
        );
      });
    }, []);
    
    const animalsWithArticle = []
    for (const animal of images) {
      if (animal.title) {
        animalsWithArticle.push(animal);
      }
    }

  return (
    <div id="animals_container">
      <Articles animals={animalsWithArticle} />
    </div>
  );
};

export default Home;