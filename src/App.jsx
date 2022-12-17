import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MovieDetail } from "./components";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact element={<HomePage />} path="/" />
          <Route exact element={<MovieDetail />} path="/Detail" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
