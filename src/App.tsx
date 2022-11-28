import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Navbar} from "./Components/Navbar";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Tests from "./Pages/Tests";
import "./styles/Globals.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Tests />} path="/tests/:cliente" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
