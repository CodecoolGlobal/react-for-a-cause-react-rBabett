import Button from "./Button";

const AnimalCard = ({ animals }) => {
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
            <p className="age_and_toys">Age: {age}<br></br><br></br>
              Favorite toy: {toy}
            </p>
            <Button
              key={name + "btn"}
              className="submit_buttons"
              text="Adopt"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimalCard;
