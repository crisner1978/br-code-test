import Loader from "react-loader-spinner";
import useSwr from "swr";
import FoodSpotCard from "../components/FoodSpotCard";

async function fetcher(url) {
  const res = await fetch(url);
  return res.json();
}

const Feed = (props) => {
  const url = "https://s3.amazonaws.com/br-codingexams/restaurants.json";
  const { data, error } = useSwr(url, fetcher, {
    initialData: props,
    revalidateOnMount: true,
  });
  if (error) return <div>failed to load</div>;
  if (!data)
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader
          type="ThreeDots"
          color="#43E895"
          height={100}
          width={100}
          timeout={2500}
        />
      </div>
    );

  const { restaurants: spot } = data;

  return (
    <main className="flex flex-col items-center max-w-2xl md:max-w-4xl xl:max-w-6xl mx-auto">
      <section className="sm:pt-5">
        <h2 className="hidden sm:inline-flex sm:text-3xl font-semibolld pb-5">
          Restaurants
        </h2>
        <div className="flex flex-col md:grid grid-cols-2 md:gap-x-10">
          {spot?.map(
            (
              { name, category, location, contact, backgroundImageURL: image },
              index
            ) => (
              <FoodSpotCard
                key={index}
                name={name}
                category={category}
                location={location}
                contact={contact}
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

export async function getStaticProps(context) {
  const res = await fetch(
    "https://s3.amazonaws.com/br-codingexams/restaurants.json"
  );
  const { spots } = await res.json();
  console.log("yoooo", spots);
  return {
    props: {
      restaurants,
    },
  };
}
