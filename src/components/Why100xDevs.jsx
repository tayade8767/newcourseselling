import React from 'react';

// First, define the FeatureCard component
const FeatureCard = ({ title, description, icon, underlineColor }) => (
  <div className="flex flex-col space-y-2 p-4">
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <h3 className="text-xl font-bold">
          {title}
          <div className={`h-1 w-24 mt-1 ${underlineColor}`}></div>
        </h3>
      </div>
      <div className="bg-gray-200 p-3 rounded-full">
        {icon}
      </div>
    </div>
    <p className="text-gray-600 mt-2">{description}</p>
  </div>
);

// Then define your features array
const features = [
  {
    title: "Learn from the best",
    description: "Harkirat is the best in India when it comes to learning about remote work and open source",
    icon: "⚓",
    underlineColor: "bg-purple-500"
  },
  {
    title: "Beginner friendly",
    description: "Start from the basics and go deep into the technology using projects",
    icon: "⭐",
    underlineColor: "bg-red-500"
  },
  {
    title: "Reach your inflection point",
    description: "Become a self sufficient developer in tech",
    icon: "🚀",
    underlineColor: "bg-yellow-500"
  },
  {
    title: "Open source",
    description: "Helping you make your first open source contribution",
    icon: "🔍",
    underlineColor: "bg-yellow-500"
  },
  {
    title: "Version control",
    description: "Helping you understand the basics of how version control is implemented in the industry",
    icon: "📥",
    underlineColor: "bg-purple-500"
  },
  {
    title: "Assignments",
    description: "Harkirat has personally created assignments after every week of study, so it's extremely hands on",
    icon: "📝",
    underlineColor: "bg-red-500"
  }
];

// Main component
function Why100xDevs() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-16">Why 100xdevs?</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            underlineColor={feature.underlineColor}
          />
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center mt-16">About 100xDevs</h2>
       

    </div>
  );
}

export default Why100xDevs;