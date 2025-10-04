import { lessons } from "../data/lessons";

export default function Modules({ userType, setScreen }) {
  return (
    <div>
      <h2>{userType === "farmer" ? "Farmer Modules" : "Pastoralist Modules"}</h2>
      <ul>
        {lessons[userType].map(l => (
          <li key={l.id}>
            <strong>{l.title}</strong> — {l.tip}
          </li>
        ))}
      </ul>
      <button onClick={() => setScreen("advice")}>Get AI Advice</button>
    </div>
  );
}
