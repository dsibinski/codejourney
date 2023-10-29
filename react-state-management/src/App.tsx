import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { PersonData } from "./components/props/PersonData";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <NaiveComponent /> */}
        {/* <TheReactWayComponent /> */}
        {/* <ObjectHolderComponent /> */}
        <PersonData />
      </header>
    </div>
  );
}

export default App;
