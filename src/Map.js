// Map.js
import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

const Map = ({ points }) => {
  return (
    <MapContainer
      center={points[0]}
      zoom={13}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {points.map((point, index) => (
        <Marker key={index} position={point} />
      ))}
    </MapContainer>
  );
};

export default Map;
