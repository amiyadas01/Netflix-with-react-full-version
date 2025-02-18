import features from "./Feature";
import FeatureCard from "./FeatureCard";

const FeatureCards = () => {
  return (
    <div className="bg-black text-white py-16">
      <h2 className=" text-xl md:text-3xl font-semibold text-center mb-10">
        More reasons to join
      </h2>
      <div className=" sm:max-w-xl max-w-lg md:max-w-5xl lg:max-w-5xl 2xl:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;