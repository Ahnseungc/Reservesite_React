import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Detail from "./Page/Detail";
import ResentReserve from "./Page/ResentReserve";
import Main from "./Page/Main";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Main} />
          <Route path="/reserve" Component={ResentReserve} />
          <Route path="/Detail" Component={Detail} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
