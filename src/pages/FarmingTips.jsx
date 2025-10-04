import { Link } from "react-router-dom";

export default function FarmingTips({ user }) {
  if (!user) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">🌾 Farming Tips</h2>
        <p>Please set up your profile first.</p>
        <Link to="/profile" className="text-green-600 underline">Go to Profile</Link>
      </div>
    );
  }

  const { name, role, location, language, learningStyle } = user;

  // Example localized advice
  const advice = {
    Narok: {
      text: "Plant drought-resistant maize and rotate with beans.",
      story: "In Narok, Mama Naserian planted beans after maize — the soil stayed fertile and yields improved.",
      quiz: "Which crop is best to rotate with maize in Narok? (A) Beans (B) Rice (C) Coffee",
    },
    Turkana: {
      text: "Use zai pits and sorghum for dry conditions.",
      story: "Turkana elders say: 'Water is life — capture it in pits before it escapes.'",
      quiz: "Which method helps store water in dry Turkana soils? (A) Zai pits (B) Flood irrigation (C) None",
    },
    Kitui: {
      text: "Try cassava and millet to withstand drought.",
      story: "In Kitui, youth groups grow cassava — feeding families even in long dry spells.",
      quiz: "Which crop is drought-tolerant in Kitui? (A) Cassava (B) Wheat (C) Rice",
    }
  };

  // Language translations (very simple simulation)
  const translations = {
    Kiswahili: {
      greeting: `Habari ${name || role} wa ${location}!`,
      back: "← Rudi kwenye Menyu",
    },
    Maa: {
      greeting: `Supa ${name || role} oo ${location}!`,
      back: "← Aing'u Menu",
    },
    English: {
      greeting: `Hello ${name || role} from ${location}!`,
      back: "← Back to Menu",
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">🌾 Farming Tips</h2>
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
