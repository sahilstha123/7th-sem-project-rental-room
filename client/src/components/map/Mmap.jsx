import { MapContainer, TileLayer } from "react-leaflet";
import "./map.scss";
import "leaflet/dist/leaflet.css";
import Pin from "../pin/Pin";

function Map({ items }) {
  // Define the boundaries for Nepal
  const nepalBounds = [
    [26.347, 80.058], // Southwest corner (approx)
    [30.447, 88.201], // Northeast corner (approx)
  ];

  // Set the center of the map dynamically based on items
  const center =
    items.length === 1
      ? [items[0].latitude, items[0].longitude] // Use item's coordinates if one item
      : [28.3949, 84.124]; // Default to center of Nepal (Kathmandu) if multiple items

  return (
    <MapContainer
      center={center} // Dynamically set the center of the map
      zoom={7} // Zoom level for Nepal
      scrollWheelZoom={true}
      className="map"
      maxBounds={nepalBounds} // Restrict map bounds to Nepal
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
