import React from "react";
import "./App.css";
import { ProductsList } from "./components/ProductsList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductsList />
      </header>
    </div>
  );
}

export default App;
