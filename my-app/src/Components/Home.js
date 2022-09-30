import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="main">
      <div>
        <img src={"/Components/7.jpg"} alt="Category" />
      </div>

      <div className="awards">
        <h3>Awards</h3>
        <h3>Followers.Rewards.</h3>
        <p>
          Our work speaks for itself - Specscart has been awarded first prize in
          {"\n"}
          Venture Further 2018 Business Category. We are constantly working
          {"\n"} to innovate new ways and technology to become UK’s leading Eye
          {"\n"} Care provider
        </p>

        <img src={"/components/centre.png"} alt="centre" />

        <h2>Our Feeds</h2>
      </div>
    </div>
  );
}

export default Home;
