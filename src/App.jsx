import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<SigninPage />} path="/" />
          <Route element={<SignupPage />} path="/signup" />
          <Route element={<HomePage />} path="/home" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
