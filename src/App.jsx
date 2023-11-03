import "./App.css";
import MemeGenerator from "./MemeGenerator";
import { Providers } from "./contexts/provider";
function App() {
  return (
    <Providers>
      <div className="App">
        <h1>Создайте свой мем</h1>
        <MemeGenerator />
      </div>
    </Providers>
  );
}

export default App;
