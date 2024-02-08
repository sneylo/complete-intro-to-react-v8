import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  <div>
    <h1>Adopt ME</h1>
    <Pet name="Luna" animal="dog" breed="civava" />
    <Pet name="XDD" animal="BIRD" breed="PIRAT" />
    <Pet name="Jendo" animal="huh" breed="POTKAN" />
  </div>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
