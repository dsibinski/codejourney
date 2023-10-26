import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ObjectHolderComponent } from "./components/ObjectHolderComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <NaiveComponent /> */}
        {/* <TheReactWayComponent /> */}
        <ObjectHolderComponent />
      </header>
    </div>
  );
}

export default App;
