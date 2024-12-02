import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {HashRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/Root";
import MainPage from "./components/MainPage";
import MyProvider from "./components/MyProvider";
import "./index.css"
import GameRules from "./components/GameRules";
import { Navigate } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/fourconnects" />} />
          <Route path="/fourconnects" element={<HomePage />} />
          <Route path="/fourconnects/playcpu/:playcpuId" element={<MainPage/>}/>
          <Route path="/fourconnects/gamerules/:gamesrulesId" element={<GameRules/>}/>
        </Routes>
      </HashRouter>
    </MyProvider>
  </React.StrictMode>
 
);
