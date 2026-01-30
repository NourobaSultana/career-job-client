import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Location from "./Location";
import Card from "./Card";
import JobsCard from "./JobsCard";

const Home = () => {
  return (
    <div className="image">
      <h1 className="rob"></h1>
      <Banner></Banner>
      <Card></Card>
      <JobsCard></JobsCard>
    </div>
  );
};

export default Home;
