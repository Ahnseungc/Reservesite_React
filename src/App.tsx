import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import loadable from "@loadable/component";
const Detail = loadable(() => import("./Page/Detail"));
const ResentReserve = loadable(() => import("./Page/ResentReserve"));
const Main = loadable(() => import("./Page/Main"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/main" Component={Main} />
          <Route path="/reserve" Component={ResentReserve} />
          <Route path="/detail/:id" Component={Detail} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
