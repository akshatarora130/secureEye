// MapComponent.tsx
"use client";

import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


// Fix for the default marker icon issue
const DefaultIcon = L.icon({
    iconUrl: "/marker-icon.png",
    shadowUrl: "/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

type MapComponentProps = {
  initialPosition: [number, number];
  onPositionChange: (lat: number, lng: number) => void;
};

const MapMarker = ({ onPositionChange }: { onPositionChange: (lat: number, lng: number) => void }) => {
  const [position, setPosition] = useState<L.LatLng | null>(null);

  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
      onPositionChange(e.latlng.lat, e.latlng.lng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : <Marker position={position} />;
};

export default function MapComponent({ initialPosition, onPositionChange }: MapComponentProps) {
  return (
    <div className="h-[400px] w-full relative">
      <MapContainer
        center={initialPosition}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={initialPosition} />
        <MapMarker onPositionChange={onPositionChange} />
      </MapContainer>
    </div>
  );
}