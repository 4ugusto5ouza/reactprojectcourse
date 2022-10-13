import React from "react";
import { createRoot } from "react-dom/client";
import { List } from "./containers/List";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar sticky-top navbar-light bg-dark">
        <h1 className="navbar-brand text-light">MovieList</h1>
      </nav>
      <List />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
