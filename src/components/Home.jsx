export default function Home({ setUserType, setScreen }) {
  return (
    <div>
      <h1>🌾 Climate Learning Platform</h1>
      <p>Select your profile:</p>
      <button onClick={() => { setUserType("farmer"); setScreen("modules"); }}>Farmer</button>
      <button onClick={() => { setUserType("pastoralist"); setScreen("modules"); }}>Pastoralist</button>
    </div>
  );
}
