import React from 'react';
import { Users, Truck, BarChart3, Building2, Recycle } from 'lucide-react';

const Home = () => {
  const team = [
    {
      name: 'Marie Laurent',
      role: 'Directrice Générale',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200'
    },
    {
      name: 'Thomas Dubois',
      role: 'Responsable Opérations',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200'
    },
    {
      name: 'Sophie Martin',
      role: 'Responsable Développement',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200'
    },
    {
      name: 'Lucas Petit',
      role: 'Responsable Technique',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200'
    },
    {
      name: 'Emma Bernard',
      role: 'Responsable Communication',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200'
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative bg-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ensemble pour un avenir plus propre
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Nous révolutionnons la gestion des déchets pour les professionnels avec des solutions innovantes et écologiques.
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-md font-medium text-lg hover:bg-green-100 transition">
              Devenir partenaire
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Services de Collecte</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Cartons',
              icon: <Building2 className="h-12 w-12 text-green-600" />,
              description: 'Collecte et recyclage de cartons pour commerces et entreprises'
            },
            {
              title: 'Aluminium',
              icon: <Recycle className="h-12 w-12 text-green-600" />,
              description: 'Récupération et valorisation des déchets aluminium'
            },
            {
              title: 'Verre',
              icon: <Truck className="h-12 w-12 text-green-600" />,
              description: 'Collecte du verre pour les cafés, bars et restaurants'
            }
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Notre Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: '500+', label: 'Partenaires', icon: <Users className="h-8 w-8" /> },
              { number: '1000T', label: 'Déchets collectés', icon: <Truck className="h-8 w-8" /> },
              { number: '30%', label: 'Réduction CO2', icon: <BarChart3 className="h-8 w-8" /> }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow text-center">
                <div className="flex justify-center mb-4 text-green-600">{stat.icon}</div>
                <div className="text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Notre Équipe</h2>
        <div className="grid md:grid-cols-5 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;