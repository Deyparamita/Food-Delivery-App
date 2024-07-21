import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";
const AppDownload = () => {
  return (
    <div>
      <div className="app-download" id="app-download">
        <p>
          For Better Experience Download <br /> this App
        </p>
        <div className="app-download-platforms">
          <img src={assets.play_store} alt="Play srore img" />
          <img src={assets.app_store} alt="App-store img" />
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
