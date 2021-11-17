import ListView from "./ListView";

const FoodSpotCard = ({ name, category, contact, image, location }) => {
  return (
    <div className="sm:mb-5">
      <ListView
        category={category}
        image={image}
        location={location}
        name={name}
        contact={contact}
      />
    </div>
  );
};

export default FoodSpotCard;
