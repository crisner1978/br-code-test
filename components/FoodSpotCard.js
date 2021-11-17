import { useState } from "react";
import ListView from "./ListView";

const FoodSpotCard = ({ name, category, twitter, phone, image, location }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="sm:mb-5">
      <ListView
        category={category}
        image={image}
        location={location}
        name={name}
        open={open}
        setOpen={setOpen}
        phone={phone}
        twitter={twitter}
      />
    </div>
  );
};

export default FoodSpotCard;
