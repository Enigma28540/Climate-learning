import { Link } from "react-router-dom";

export default function Weather({ user }) {
  if (!user) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">🌦️ Weather Updates</h2>
        <p>Please set up your profile first.</p>
        <Link to="/" className="text-green-600 underline">Go to Profile</Link>
      </div>
    );
  }

  const { name, location, language, learningStyle } = user;

  // Local weather messages (mock data for demo)
  const weatherData = {
    Narok: {
      text: "Light rains expected next week. Prepare for planting.",
      story: "Narok farmers say: 'When the acacia flowers, rains will soon follow.'",
      quiz: "What should farmers do before expected rains? (A) Prepare land (B) Do nothing (C) Harvest maize"
    },
    Turkana: {
      text: "Dry and hot conditions. Conserve water.",
      story: "Turkana herders: 'The dry wind warns us — move the herds to riverbeds.'",
      quiz: "What is most important during a hot dry spell? (A) Store water (B) Sell cattle (C) Burn pasture"
    },
    Kitui: {
      text: "Scattered showers possible, good for cassava and millet.",
      story: "In Kitui, when clouds gather in the east, rains often bless the fields.",
      quiz: "Which crop thrives with scattered rains? (A) Cassava (B) Wheat (C) Rice"
    }
  };

  const translations = {
    Kiswahili: {
      greeting: `Habari ${name || "rafiki"} wa ${location}!`,
      back: "← Rudi kwenye Menyu"
    },
    Maa: {
      greeting: `Supa ${name || "enkai"} oo ${location}!`,
      back: "← Aing'u Menu"
    },
    English: {
      greeting: `Hello ${name || "friend"} from ${location}!`,
      back: "← Back to Menu"
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">🌦️ Weather Updates</h2>
      <p className="mb-4">
        {translations[language].greeting}<br />
        {weatherData[location][learningStyle]}
      </p>
      <Link to="/menu" className="text-green-600 underline">
        {translations[language].back}
      </Link>
    </div>
  );
}
