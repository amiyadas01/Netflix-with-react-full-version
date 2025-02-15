/* eslint-disable react/prop-types */
const FeatureCard = ({ icon, title, description }) => {
    return (
      <div className="bg-gradient-to-tl from-[#4c0101] to-[#00004d] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    );
  };
  
  export default FeatureCard;