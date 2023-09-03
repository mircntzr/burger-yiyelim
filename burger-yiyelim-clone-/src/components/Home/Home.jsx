import React from "react";
import { Link } from "react-router-dom";
import BannerPhoto from "../../assets/banneryeni.jpg";
import "./Home.css";
import MapCard from "../MapCard/MapCard";

function Home() {
  return (
    <div
      className="main-page"
      style={{ backgroundImage: `url(${BannerPhoto})` }}
    >
      <div className="order">
        <Link to="menu">
          <button>Sipariş Ver</button>
        </Link>
      </div>
      <MapCard />
    </div>
  );
}

export default Home;
