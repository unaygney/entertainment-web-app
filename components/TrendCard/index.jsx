import React from "react";
import Image from "next/image";
import TvIcon from "@/assets/icons/icon-category-tv.svg";
import MovieIcon from "@/assets/icons/icon-category-movie.svg";

function TrendCard({ trend }) {
  return (
    <div className="relative shrink-0 w-[240px] h-[140px] md:w-[470px] md:h-[230px]">
      <Image
        src={trend.thumbnail.trending.small}
        alt={`${trend.title}'s thumbnail`}
        fill
        className="rounded-lg"
      />

      <div className="absolute bg-transparent left-4 bottom-4">
        <div className="flex gap-6">
          <h6 className="text-white opacity-75 leading-normal text-xs ">
            {trend.year}
          </h6>
          <ul className="flex list-disc gap-6 ">
            <li className="text-white opacity-75 leading-normal text-xs inline-flex items-center gap-1">
              {trend.category === "Movie" ? <MovieIcon /> : <TvIcon />}
              {trend.category}
            </li>
            <li className="text-white opacity-75 leading-normal text-xs">
              {trend.rating}
            </li>
          </ul>
        </div>
        <h3 className="text-[15px] md:text-2xl font-medium  text-white">
          {trend.title}
        </h3>
      </div>
    </div>
  );
}

export default TrendCard;
