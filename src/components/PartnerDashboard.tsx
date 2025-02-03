import React from 'react';

const partners = [
  {
    id: 1,
    name: "Hôtel Éco-Resort",
    wasteCollected: "150 kg",
    lastCollection: "2025-01-30",
    status: "Actif"
  },
  {
    id: 2,
    name: "Café Vert",
    wasteCollected: "85 kg",
    lastCollection: "2025-01-28",
    status: "En attente"
  },
  {
    id: 3,
    name: "Restaurant BioSaveur",
    wasteCollected: "200 kg",
    lastCollection: "2025-01-25",
    status: "Actif"
  }
];

const PartnerDashboard = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-green-600 mb-6">Tableau de Bord des Partenaires</h1>
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
