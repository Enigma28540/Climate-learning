export default function Advice({ userType, setScreen }) {
  const advice = userType === "farmer"
    ? "Rainfall expected to be below average next week. Delay planting by 5 days."
    : "High heat forecast — ensure animals have shaded resting areas.";

  return (
    <div>
      <h2>Personalized AI Advice</h2>
      <p>{advice}</p>
      <button onClick={() => setScreen("home")}>Back Home</button>
    </div>
  );
}
