import Loader from "react-loader-spinner";
import useSwr from "swr";
import FoodSpotCard from "../components/FoodSpotCard";

async function fetcher(url) {
  const res = await fetch(url);
  return res.json();
}

const Feed = () => {
  const { data, error } = useSwr(
    "https://s3.amazonaws.com/br-codingexams/restaurants.json",
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data)
    return (
      <div>
        <Loader
          type="ThreeDots"
          color="#43E895"
          height={100}
          width={100}
          timeout={2500}
        />{" "}
      </div>
    );
  const { restaurants: foodSpot } = data;

  return (
    <main className="grid grid-cols-1 md:max-w-4xl mx-auto">
      <section className="sm:pt-5 px-10 flex-grow mx-auto">
        <h2 className="hidden sm:inline-flex sm:text-3xl font-semibolld pb-5">
          Restaurants
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
          {foodSpot?.map(
            (
              { name, category, location, contact, backgroundImageURL: image },
              index
            ) => (
              <FoodSpotCard
                key={index}
                name={name}
                category={category}
                location={location}
                phone={contact?.formattedPhone}
                twitter={contact?.twitter}
                image={image}
              />
            )
          )}
        </div>
      </section>
    </main>
  );
};

export default Feed;
