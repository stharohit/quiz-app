import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router/Router";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Router />
      </main>
    </BrowserRouter>
  );
};

export default App;
