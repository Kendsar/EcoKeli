import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Custom marker icon
const icon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const partners = [
  {
    id: 1,
    name: "Hôtel Éco-Resort",
    wasteCollected: "150 kg",
    lastCollection: "2025-01-30",
    status: "Actif",
    location: [36.8065, 10.1815] as [number, number]
  },
  {
    id: 2,
    name: "Café Vert",
    wasteCollected: "85 kg",
    lastCollection: "2025-01-28",
    status: "En attente",
    location: [36.8028, 10.1689] as [number, number]
  },
  {
    id: 3,
    name: "Restaurant BioSaveur",
    wasteCollected: "200 kg",
    lastCollection: "2025-01-25",
    status: "Actif",
    location: [36.8188, 10.1658] as [number, number]
  }
];

const PartnerDashboard = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-green-600 mb-6">Tableau de Bord des Partenaires</h1>

      {/* Map Section */}
      <div className="h-96 mb-8">
        <MapContainer center={[36.8065, 10.1815]} zoom={13} className="h-full w-full rounded-lg shadow-md">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          {partners.map((partner) => (
            <Marker key={partner.id} position={partner.location} icon={icon}>
              <Popup>
                <strong>{partner.name}</strong><br />
                Déchets collectés : {partner.wasteCollected}<br />
                Dernière collecte : {partner.lastCollection}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Partner Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((partner) => (
          <div key={partner.id} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-green-800 mb-2">{partner.name}</h2>
            <p className="text-gray-600">Déchets collectés : <strong>{partner.wasteCollected}</strong></p>
            <p className="text-gray-600">Dernière collecte : {partner.lastCollection}</p>
            <p className={
              partner.status === "Actif" 
                ? "text-green-500 font-medium mt-2" 
                : "text-yellow-500 font-medium mt-2"
            }>
              Statut : {partner.status}
            </p>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
              Voir les détails
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerDashboard;
