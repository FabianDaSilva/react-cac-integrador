import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";

function  App() {

  const loggedIn = sessionStorage.getItem("user");
    
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={
            loggedIn
            ? (<Navigate replace to='/home'/>)
            : (<Navigate replace to='/signin'/>)
          }/>
          <Route path="/signin" element={<SigninPage />}/>
          <Route path="/signup" element={<SignupPage />}/>
          <Route path="/home" element={<HomePage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
