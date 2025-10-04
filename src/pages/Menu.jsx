import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h2 className="text-2xl font-bold mb-6">Choose a topic</h2>
      <div className="flex flex-col gap-4">
        <Link to="/farming" className="bg-blue-500 text-white px-4 py-2 rounded-lg">🌾 Farming Tips</Link>
        <Link to="/pastoralist" className="bg-orange-500 text-white px-4 py-2 rounded-lg">🐄 Pastoralist Resilience</Link>
        <Link to="/weather" className="bg-teal-500 text-white px-4 py-2 rounded-lg">📊 Weather & Market</Link>
        <Link to="/learning" className="bg-purple-500 text-white px-4 py-2 rounded-lg">🎓 Learning Modules</Link>
      </div>
    </div>
  );
}
