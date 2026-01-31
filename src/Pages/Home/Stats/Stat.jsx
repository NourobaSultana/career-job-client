import React from "react";
import StatCard from "./StatCard";
const Stat = () => {
  const statsData = [
    {
      target: 30,
      suffix: "K+",
      title: "Completed Cases",
      desc: "We provide complete business-focused solutions",
    },
    {
      target: 12,
      suffix: "Y+",
      title: "Experience",
      desc: "Years of professional expertise",
    },
    {
      target: 95,
      suffix: "%",
      title: "Success Rate",
      desc: "High customer satisfaction rate",
    },
    {
      target: 50,
      suffix: "+",
      title: "Team Members",
      desc: "Skilled & dedicated professionals",
    },
  ];
  return (
    <div className="stats shadow grid sm:grid-cols-2 md:grid-cols-4 gap-6 p-2 mt-12">
      {statsData.map((item, index) => (
        <StatCard key={index} {...item} />
      ))}
    </div>
  );
};

export default Stat;
