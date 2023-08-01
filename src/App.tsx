import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import loadable from "@loadable/component";
const Detail = loadable(() => import("./pages/Detail"));
const ResentReserve = loadable(() => import("./pages/ResentReserve"));
const Main = loadable(() => import("./pages/Main"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Main} />
          <Route path="/reserve" Component={ResentReserve} />
          <Route path="/detail/:id" Component={Detail} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
