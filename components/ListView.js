import { config, useTransition } from "@react-spring/core";
import { animated } from "@react-spring/web";
import Image from "next/dist/client/image";
import { useState } from "react";
import DetailView from "./DetailView";

const ListView = ({ category, location, name, contact, image }) => {
  const [show, set] = useState(false);

  const transitions = useTransition(show, {
    from: { opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.default,
  });

  return (
    <div className="relative h-48 w-screen sm:w-96 cursor-pointer">
      <Image
        className="object-cover w-screen"
        src={image}
        layout="fill"
        objectFit="cover"
        className="sm:rounded-lg"
      />
      <Image
        src="/Cuts/cellGradientBackground@2x.png"
        layout="fill"
        objectFit="cover"
        className={`${!show && "sm:rounded-lg"}`}
        priority
        as="cellGradientBackground"
        onClick={() => set(!show)}
      />
      <div className="flex flex-col justify-center h-[60px] absolute bottom-0 text-white pl-3">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-xs">{category}</p>
      </div>
      {transitions(
        (styles, item) =>
          item && (
            <animated.div style={styles}>
              <DetailView
                category={category}
                location={location}
                name={name}
                contact={contact}
                show={show}
              />
            </animated.div>
          )
      )}
    </div>
  );
};

export default ListView;
