import { Link } from "react-router-dom";

export default function Weather() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">📊 Weather & Market Updates</h2>
      <p className="mb-4">
        🌦️ <strong>Weather Forecast:</strong>  
        - Today: Sunny with scattered clouds. <br />
        - Next 3 days: Light showers expected in the afternoons. <br />
        - Advice: Harvest early if crops are mature to avoid rainfall damage.
      </p>
      <p className="mb-4">
        🛒 <strong>Market Prices:</strong> (sample data) <br />
        - Maize: 3,200 KES per 90kg bag. <br />
        - Beans: 6,500 KES per 90kg bag. <br />
        - Goats: 4,000–5,500 KES depending on weight.
      </p>
      <p className="mb-4">
        🔍 Tip: Check local cooperative or radio announcements for real-time updates.
      </p>
      <Link to="/menu" className="text-green-600 underline">← Back to Menu</Link>
    </div>
  );
}
