import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { TheReactWayComponent } from "./components/TheReactWayComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <NaiveComponent /> */}
        <TheReactWayComponent />
      </header>
    </div>
  );
}

export default App;
