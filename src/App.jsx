import "./App.css";
import MemeGenerator from "./routes/MemeGenerator";
import { Providers } from "./contexts/provider";

function App() {
  return (
    <Providers>
      <div className="App">
  
        <MemeGenerator />
      </div>
    </Providers>
  );
}

export default App;
