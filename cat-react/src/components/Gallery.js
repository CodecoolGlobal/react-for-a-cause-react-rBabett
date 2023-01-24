import AnimalCard from './components/AnimalCard';

const Gallery = () => {

  const animals = [
    {
      name: 'Gary',
      image: '../public/animals/puppy1',
      age: '2 years',
      handle: (e) => {ThankYou()},
    },
  ]

}

const ThankYou = (e) => {
  //Thank you for adopting e.target.innerText! (animal.name)
}