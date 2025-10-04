import { useState } from "react";
import Home from "./components/Home";
import Modules from "./components/Modules";
import Advice from "./components/Advice";

function App() {
  const [screen, setScreen] = useState("home");
  const [userType, setUserType] = useState(null);

  return (
    <div className="p-4 text-center">
      {screen === "home" && <Home setUserType={setUserType} setScreen={setScreen} />}
      {screen === "modules" && <Modules userType={userType} setScreen={setScreen} />}
      {screen === "advice" && <Advice userType={userType} setScreen={setScreen} />}
    </div>
  );
}
export default App;
