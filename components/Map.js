import { LocationMarkerIcon } from "@heroicons/react/outline";
import { getCenter } from "geolib";
import { useEffect, useRef, useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import useSWR from "swr";

async function fetcher(url) {
  const res = await fetch(url);
  return res.json();
}

const Map = () => {
  const mapRef = useRef();
  const [viewport, setViewport] = useState("");
  const [selected, setSelected] = useState({});

  const { data, error } = useSWR(
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
        />
      </div>
    );

  const { restaurants: newData } = data;

  useEffect(() => {
    const coordinates = newData.map((result) => ({
      longitude: result.location.lng,
      latitude: result.location.lat,
    }));

    const center = getCenter(coordinates);
    setViewport({
      container: mapRef.current,
      width: "100%",
      height: "100%",
      latitude: center.latitude,
      longitude: center.longitude,
      zoom: 12,
    });
    return () => coordinates;
  }, [newData]);

  return (
    <ReactMapGL
      ref={mapRef}
      mapStyle="mapbox://styles/crisner1978/ckw2xq9h11b6j14p9hb16xvh7"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {newData.map((result, index) => (
        <div key={index}>
          <Marker
            longitude={result.location.lng}
            latitude={result.location.lat}
            offsetLeft={-12}
          >
            <p
              className="cursor-pointer"
              onClick={() => setSelected(result)}
              aria-label="location-pin"
            >
              <LocationMarkerIcon className="h-6 text-primary animate-bounce" />
            </p>
          </Marker>
          {selected.name === result.name ? (
            <Popup
              className="z-50"
              onClose={() => setSelected({})}
              closeOnClick={true}
              longitude={result.location.lng}
              latitude={result.location.lat}
            >
              <div className="flex items-center gap-3 px-2">
                <p className="text-neutral font-semibold">{result.name}</p>
              </div>
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
