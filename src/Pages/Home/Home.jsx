import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Location from "./Location";
import Card from "./Card";
import JobsCard from "./JobsCard";
import cards from "../../Data/cards";
import MiniCard from "./MiniCard";
import Stats from "./Stats";
import Stat from "./Stats/Stat";
import StatCard from "./Stats/StatCard";

const Home = () => {
  return (
    <div className="image">
      <h1 className="rob"></h1>
      <Banner></Banner>
      <Card></Card>
      <MiniCard></MiniCard>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {cards.map((card) => (
          <JobsCard key={card.id} card={card}></JobsCard>
        ))}
      </div>
      <Stat></Stat>
    </div>
  );
};

export default Home;
