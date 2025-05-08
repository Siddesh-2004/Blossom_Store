import React from "react";

const flowers = [
    {
      name: "Rose",
      image: "src/assets/primaryAssets/rose.jpeg",
      freshnessDuration: "7 days",
    },
    {
      name: "Tulip",
      image: "src/assets/primaryAssets/tulip.jpeg",
      freshnessDuration: "5 days",
    },
    {
      name: "Lily",
      image: "src/assets/primaryAssets/lily.jpeg",
      freshnessDuration: "6 days",
    },
    {
      name: "Sunflower",
      image: "src/assets/primaryAssets/sunflower.jpeg",
      freshnessDuration: "8 days",
    },
    {
      name: "Orchid",
      image: "src/assets/primaryAssets/orchid.jpeg",
      freshnessDuration: "10 days",
    },
    {
      name: "Daisy",
      image: "src/assets/primaryAssets/daisy.jpeg",
      freshnessDuration: "6 days",
    },
    {
      name: "Carnation",
      image: "src/assets/primaryAssets/carnation.jpeg",
      freshnessDuration: "7–14 days",
    },
    {
      name: "Peony",
      image: "src/assets/primaryAssets/peony.jpeg",
      freshnessDuration: "5–7 days",
    },
    {
      name: "Hydrangea",
      image: "src/assets/primaryAssets/hydrangea.jpeg",
      freshnessDuration: "5 days",
    },
    {
      name: "Chrysanthemum",
      image: "src/assets/primaryAssets/chrysanthemum.jpeg",
      freshnessDuration: "10–14 days",
    },
  ];
  

const FlowerCard = ({ flower }) => (
  <div className="bg-white shadow-lg rounded-2xl w-64 m-4 overflow-hidden">
    <img
      src={flower.image}
      alt={flower.name}
      className="w-full h-40 object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">{flower.name}</h2>
      <p className="text-gray-600 text-sm">Fresh for: {flower.freshnessDuration}</p>
    </div>
  </div>
);

const FlowerFreshness = () => {
  return (
    <div className="p-8 bg-pink-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Flower Freshness</h1>
      <div className="flex flex-wrap justify-center">
        {flowers.map((flower, index) => (
          <FlowerCard key={index} flower={flower} />
        ))}
      </div>
    </div>
  );
};

export default FlowerFreshness;
