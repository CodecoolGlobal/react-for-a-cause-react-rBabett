import Button from "./Button";

const AnimalCard = ({ animals }) => {
  return (
    <div className="animal_cards">
      {animals.map(({name, image, age}) => (
        <div key={name} className="animal_cards_info">
          <img
            key={name + "img"}
            src={image}
            alt={name}
            className="images"
          />
          <div clasName="animal_info">
            <h4>{name}</h4>
            <p>Age: {age}</p>
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
