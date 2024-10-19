'use client';

import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

// Define marker icon to fix the missing icon issue
const icon = L.icon({
  iconUrl: "/marker-icon.png", // Add these files to your public folder
  iconRetinaUrl: "/marker-icon-2x.png",
  shadowUrl: "/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const MapClickHandler = ({
  setCoordinates,
}: {
  setCoordinates: (lat: number, lng: number) => void;
}) => {
  const [position, setPosition] = useState<L.LatLng | null>(null);

  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      setCoordinates(e.latlng.lat, e.latlng.lng);
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={icon}>
    </Marker>
  );
};

export default function Map({ 
  setCoordinates 
}: { 
  setCoordinates: (lat: number, lng: number) => void 
}) {
  return (
    <MapContainer
      center={[30.002516938570686, 76.83837890625001]}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <MapClickHandler setCoordinates={setCoordinates} />
    </MapContainer>
  );
}