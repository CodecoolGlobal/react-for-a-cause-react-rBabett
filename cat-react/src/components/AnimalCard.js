import Button from "./Button";

/* function importAll(r) {
  let images = {};
   r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images
}
 const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
 console.log(images) */


const AnimalCard = ({name, age, handleClick}) => {

  return (
  <div className="animal_cards_info">
    <h4>{name}</h4>
    <p>Age: {age}</p>
    <Button key={name + 'btn'} className='submit_buttons' text='Adopt' handleClick={handleClick}/>
  </div>
  ); 
}

export default AnimalCard;