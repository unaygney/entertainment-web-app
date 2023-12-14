import React from "react";
import Image from "next/image";
import deneme from "@/assets/thumbnails/bottom-gear/trending/small.jpg";
function TrendMovies({ trends }) {
  return (
    <div className="mt-6 pl-4     ">
      <h3 className="text-xl font-light text-white tracking-[-0.312px] leading-normal mb-4 ">
        Trending
      </h3>
      <div className="flex gap-4 overflow-x-scroll scroll-smooth scrollbar-hide   ">
        {trends.map((trend, i) => (
          <div
            key={i}
            className="relative shrink-0 w-[240px] h-[140px] md:w-[470px] md:h-[230px]     "
          >
            <Image
              src={deneme}
              alt={"movie image"}
              fill
              className="rounded-lg"
            />
            <p>{trend.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendMovies;
