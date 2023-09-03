import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import shops from "../../Data/Shops";

function Map() {
  return (
    <div className="map-container">
      <h2>İstanbul Şubelerimiz</h2>
      <MapContainer
        style={{ height: "400px", width: "100%", position: "relative" }}
        center={[41.01366081092815, 28.987802949292963]}
        zoom={10}
      >
        {" "}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {shops.map((shop, index) => (
          <Marker key={index} position={[shop.latitude, shop.longitude]}>
            <Popup>{shop.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
