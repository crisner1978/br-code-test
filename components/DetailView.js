import Map from "./Map";

const DetailView = ({ category, location, name, phone, open, twitter }) => {
  return (
    <div
      className={`${
        open && "hidden"
      } absolute bg-white top-[197px] z-10 w-96 pb-4 rounded-b-lg border-b shadow-sm`}
    >
      <div className="h-[180px] flex items-center justify-center bg-gray-300 -mt-2">
        <Map location={location} />
      </div>
      <div className="flex flex-col ">
        <div className="pl-3 bg-secondary text-white h-[60px] justify-center">
          <h3 className="mt-[8px] font-semibold">{name}</h3>
          <p className="text-xs">{category}</p>
        </div>
        <div className="text-neutral ml-3">
          <p className="mt-4">
            {location.address}
            <br />
            {location.formattedAddress[1]}
          </p>
          <p className="mt-[26px]">{phone || "No phone listed"}</p>
          <p className="mt-[26px]">{twitter ? `@${twitter}` : "Not listed"}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
