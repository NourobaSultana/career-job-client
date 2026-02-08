import React, { Suspense, useEffect, useState } from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card.jsx";
import MiniCard from "./MiniCard";
import Stat from "./Stats/Stat";
import Hiring from "./Hiring";
import MarketingBanner from "./MarketingBanner";
import categoriesData from "../../Data/MiddleCard";
import MiniCardData from "../../Data/Minicard";
import HotJobs from "./HotJobs.jsx";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => {
        console.log("HOT JOBS 👉", data); // debug
        setJobs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="image">
      <h1 className="rob"></h1>
      <Banner></Banner>
      {/* middle card */}

      <div>
        <div className="text-center py-16 md:py-20 lg:py-24">
          <h2 className="text-3xl font-bold">Search jobs by category</h2>
          <h2 className=" text-xl text-gray-400 my-2">
            The right job for you, with 800+ new listings every day.
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4 max-w-7xl mx-auto">
        {categoriesData.map((category) => (
          <Card key={category.id} category={category}></Card>
        ))}
      </div>

      <Hiring></Hiring>

      {/* minicard Heading  */}
      <div className="text-center py-8 md:py-12 lg:py-16">
        <h2 className="text-3xl font-bold">Jobs Of The Day</h2>
        <p className="text-xl text-gray-400 mt-2">
          Search and connect with the right candidates faster
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 px-4 max-w-7xl mx-auto">
        {MiniCardData.map((mini) => (
          <MiniCard key={mini.id} mini={mini}></MiniCard>
        ))}
      </div>

      <Suspense fallback={"Loading Hot Jobs"}>
        <HotJobs jobs={jobs} loading={loading}></HotJobs>
      </Suspense>

      <MarketingBanner></MarketingBanner>
      <Stat></Stat>
    </div>
  );
};

export default Home;
