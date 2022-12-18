import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { FirebaseContext } from "./context/firebase";
import { firebase } from './lib/firebase.prod';
import "./style/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>
);
