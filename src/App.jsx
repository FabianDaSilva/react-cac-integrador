import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="/signin" element={ <SigninPage/> }/>
        <Route path="/signup" element={ <SignupPage/> }/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
