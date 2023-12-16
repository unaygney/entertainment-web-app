import React from "react";

import TrendCard from "@/components/TrendCard";
function TrendMovies({ trends }) {
  return (
    <div className="mt-6 pl-4     ">
      <h3 className="text-xl font-light text-white tracking-[-0.312px] leading-normal mb-4  md:text-[32px] md:tracking-[-0.5px] ">
        Trending
      </h3>

      <div className="flex gap-4 overflow-x-scroll scroll-smooth scrollbar-hide   ">
        {trends.map((trend, i) => (
          <TrendCard key={i} trend={trend} />
        ))}
      </div>
    </div>
  );
}

export default TrendMovies;
