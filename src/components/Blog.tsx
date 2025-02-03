import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: "L'importance du tri des déchets pour un avenir durable",
    date: "2025-02-03",
    summary: "Découvrez comment le tri des déchets contribue à la préservation de l'environnement et à la réduction de la pollution.",
    content: "Le tri des déchets permet de réduire l'impact environnemental en facilitant le recyclage des matériaux comme le carton, l'aluminium et le verre. Cela contribue à la réduction des déchets dans les décharges et à la préservation des ressources naturelles."
  },
  {
    id: 2,
    title: "Comment EcoCollecte améliore la gestion des déchets dans notre village",
    date: "2025-01-28",
    summary: "Un aperçu de l'impact positif d'EcoCollecte sur la gestion des déchets locaux grâce à des partenariats avec des hôtels, restaurants et cafés.",
    content: "Grâce à notre réseau de partenaires, nous avons optimisé la collecte des déchets recyclables, amélioré la logistique et sensibilisé la communauté locale à l'importance du tri sélectif."
  }
];

const Blog = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-green-600 mb-6">Blog EcoCollecte</h1>
      <div className="space-y-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-green-800 mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-4">{post.date}</p>
            <p className="text-gray-700 mb-4">{post.summary}</p>
            <button className="text-green-600 hover:underline" onClick={() => alert(post.content)}>Lire plus</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
