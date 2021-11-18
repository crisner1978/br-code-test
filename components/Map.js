import { LocationMarkerIcon } from "@heroicons/react/outline";
import { useRef, useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

const Map = ({ location, name }) => {
  const mapRef = useRef();
  const [viewport, setViewport] = useState({
    container: mapRef.current,
    width: "100%",
    height: "100%",
    latitude: location.lat,
    longitude: location.lng,
    zoom: 16,
    pitch: 50,
  });
  const [selected, setSelected] = useState({});

  return (
    <ReactMapGL
      ref={mapRef}
      mapStyle="mapbox://styles/crisner1978/ckw2xq9h11b6j14p9hb16xvh7"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      <div>
        <Marker
          longitude={location.lng}
          latitude={location.lat}
          offsetLeft={-12}
        >
          <p
            className="cursor-pointer"
            onClick={() => setSelected(!selected)}
            aria-label="location-pin"
          >
            <LocationMarkerIcon className="h-6 text-primary animate-bounce" />
          </p>
        </Marker>
        {selected ? (
          <Popup
            className="z-50"
            onClose={() => setSelected(!selected)}
            closeOnClick={true}
            longitude={location.lng}
            latitude={location.lat}
          >
            <div className="flex items-center gap-3 px-2">
              <p className="text-neutral text-xs font-semibold">{name}</p>
            </div>
          </Popup>
        ) : (
          false
        )}
      </div>
    </ReactMapGL>
  );
};

export default Map;
