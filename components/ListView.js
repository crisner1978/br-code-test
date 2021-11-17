import Image from "next/dist/client/image";
import DetailView from "./DetailView";

const ListView = ({
  category,
  location,
  name,
  phone,
  twitter,
  image,
  open,
  setOpen,
}) => {
  return (
    <div className="relative h-48 w-96 cursor-pointer">
      <Image
        
        src={image}
        layout="fill"
        objectFit="cover"
        className="sm:rounded-lg"
      />
      <Image
        src="/Cuts/cellGradientBackground@2x.png"
        layout="fill"
        objectFit="cover"
        className={`${open && "sm:rounded-lg"}`}
        priority
        onClick={() => setOpen(!open)}
      />
      <div className="flex flex-col justify-center h-[60px] absolute bottom-0 text-white pl-3">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-xs">{category}</p>
      </div>
      <DetailView
        category={category}
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

export default ListView;
