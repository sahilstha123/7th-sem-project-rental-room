import { MapContainer, TileLayer } from "react-leaflet";
import "./map.scss";
import "leaflet/dist/leaflet.css";
import Pin from "../pin/Pin";

function Map({ items }) {
  // Define the boundaries for Kathmandu
  const kathmanduBounds = [
    [27.65, 85.15], // Southwest corner
    [27.8, 85.4], // Northeast corner
  ];

  return (
    <MapContainer
      center={[27.7172, 85.324]} // Center of Kathmandu
      zoom={12} // Appropriate zoom level for Kathmandu
      scrollWheelZoom={true}
      className="map"
      maxBounds={kathmanduBounds} // Restrict map bounds to Kathmandu
      maxBoundsViscosity={1.0} // Sticky effect on map bounds
    >
      {/* OpenStreetMap Tile Layer */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Pins/Markers */}
      {items.map((item) => (
        <Pin item={item} key={item.id} />
      ))}
    </MapContainer>
  );
}

export default Map;
