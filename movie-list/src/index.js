import React from "react";
import { createRoot } from "react-dom/client";
import { List } from "./containers/List";

const App = () => {
  return <List />;
};

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
