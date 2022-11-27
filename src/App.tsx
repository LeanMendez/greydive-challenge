import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./Pages/Home";
import Pruebas from "./Pages/Pruebas";
import "./styles/Globals.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Pruebas />} path="/pruebas/:cliente" />
          <Route element={<h1>ROUTE NOT FOUND</h1>} path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
