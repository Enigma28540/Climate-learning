import { Link } from "react-router-dom";

export default function FarmingTips() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">🌾 Climate-Smart Farming Tips</h2>
      <p className="mb-4">
        - Use drought-resistant maize varieties. <br />
        - Practice crop rotation to preserve soil nutrients. <br />
        - Collect rainwater for irrigation. <br />
        - Combine traditional knowledge with modern forecasts.  
      </p>
      <Link to="/menu" className="text-green-600 underline">← Back to Menu</Link>
    </div>
  );
}
