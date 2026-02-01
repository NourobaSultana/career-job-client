import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
import JobsCard from "./JobsCard";
import cards from "../../Data/cards";
import MiniCard from "./MiniCard";
import Stat from "./Stats/Stat";
import Hiring from "./Hiring";
import MarketingBanner from "./MarketingBanner";

const Home = () => {
  return (
    <div className="image">
      <h1 className="rob"></h1>
      <Banner></Banner>
      <Card></Card>
      <Hiring></Hiring>
      <MiniCard></MiniCard>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
        {cards.map((card) => (
          <JobsCard key={card.id} card={card}></JobsCard>
        ))}
      </div>
      <MarketingBanner></MarketingBanner>
      <Stat></Stat>
    </div>
  );
};

export default Home;
