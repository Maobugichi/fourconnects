import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {HashRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/Root";
import MainPage from "./components/MainPage";
import MyProvider from "./components/MyProvider";
import "./index.css"
import GameRules from "./components/GameRules";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/> 
          <Route path="/playcpu/:playcpuId" element={<MainPage/>}/>
          <Route path="/gamerules/:gamesrulesId" element={<GameRules/>}/>
        </Routes>
      </HashRouter>
    </MyProvider>
  </React.StrictMode>
 
);
