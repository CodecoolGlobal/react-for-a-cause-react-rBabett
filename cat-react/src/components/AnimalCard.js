import Button from "./Button";

const AnimalCard = ({ animals, onAdoptClick }) => {
  return (
    <div className="animal_cards">
      {animals.map(({name, image, age, toy}) => (
        <div key={name} className="animal_cards_info">
          <img
            key={name + "img"}
            src={image}
            alt={name}
            className="card_images"
          />
          <div className="animal_info">
            <h4 className="animal_name">{name}</h4>
            <p className="age_and_toys"><b>Age:</b> {age}<br></br><br></br>
              <b>Favorite toy:</b> {toy}
            </p>
            <Button
              handleClick={onAdoptClick}
              key={name + "btn"}
              className="adopt_buttons"
              text="Adopt"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimalCard;
