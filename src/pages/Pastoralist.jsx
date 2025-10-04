import { Link } from "react-router-dom";

export default function Pastoralists({ user }) {
  if (!user) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">🐄 Pastoralist Tips</h2>
        <p>Please set up your profile first.</p>
        <Link to="/" className="text-green-600 underline">Go to Profile</Link>
      </div>
    );
  }

  const { name, location, language, learningStyle } = user;

  // Localized advice
  const advice = {
    Narok: {
      text: "Ensure water points are shared fairly and rotate grazing areas.",
      story: "Narok elders say: 'Grass must rest, as people must — move your herds so the land heals.'",
      quiz: "What is the best way to prevent overgrazing? (A) Rotate grazing (B) Keep herds in one area (C) Cut all grass early"
    },
    Turkana: {
      text: "Use early warning weather info to move herds before drought.",
      story: "In Turkana, herders follow the stars and clouds to guide livestock migrations.",
      quiz: "When drought signs appear, what should a pastoralist do first? (A) Move early (B) Wait until grass is gone (C) Sell all animals"
    },
    Kitui: {
      text: "Adopt fodder crops like Napier grass and store hay.",
      story: "Farmers in Kitui cut and dry Napier grass, saving cattle during dry spells.",
      quiz: "Which fodder crop is drought-tolerant in Kitui? (A) Napier (B) Wheat (C) Rice"
    }
  };

  const translations = {
    Kiswahili: {
      greeting: `Habari ${name || "mfugaji"} wa ${location}!`,
      back: "← Rudi kwenye Menyu"
    },
    Maa: {
      greeting: `Supa ${name || "olmaa"} oo ${location}!`,
      back: "← Aing'u Menu"
    },
    English: {
      greeting: `Hello ${name || "Pastoralist"} from ${location}!`,
      back: "← Back to Menu"
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">🐄 Pastoralist Tips</h2>
      <p className="mb-4">
        {translations[language].greeting}<br />
        {advice[location][learningStyle]}
      </p>
      <Link to="/menu" className="text-green-600 underline">
        {translations[language].back}
      </Link>
    </div>
  );
}
