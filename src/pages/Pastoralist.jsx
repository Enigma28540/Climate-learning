import { Link } from "react-router-dom";

export default function Pastoralist() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">🐄 Pastoralist Resilience</h2>
      <p className="mb-4">
        - Move herds based on seasonal grazing patterns to prevent overgrazing. <br />
        - Use community early warning systems to anticipate droughts. <br />
        - Diversify livestock (e.g., mixing goats, camels, and cattle) to reduce risk. <br />
        - Traditional knowledge: Observe animal behavior and local plants for climate cues. <br />
        - Modern science: Combine local wisdom with satellite-based weather forecasts.  
      </p>
      <Link to="/menu" className="text-green-600 underline">← Back to Menu</Link>
    </div>
  );
}
