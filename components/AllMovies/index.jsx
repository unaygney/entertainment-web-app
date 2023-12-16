import React from "react";
import Image from "next/image";
import TvIcon from "@/assets/icons/icon-category-tv.svg";
import MovieIcon from "@/assets/icons/icon-category-movie.svg";

function AllMovies({ movies }) {
  console.log(movies);
  return (
    <section className="flex flex-col  mt-6 px-6 pb-10">
      <h3 className="text-xl font-light text-white tracking-[-0.312px] leading-normal md:text-[32px] md:tracking-[-0.5px]  ">
        Recommended for you
      </h3>
      <div className="flex flex-wrap justify-between ">
        {movies.map((movie, i) => (
          <div
            key={i}
            className="w-[45%] md:w-[32%] lg:w-[23%] flex flex-col gap-2 mt-4 md:mt-6 lg:mt-8  "
          >
            <div className="relative  h-[110px] md:h-[140px] lg:h-[174px]">
              <Image
                src={movie.thumbnail.regular.small}
                alt="movie image"
                fill
                className="rounded-lg md:hidden"
              />
              <Image
                src={movie.thumbnail.regular.medium}
                alt="movie image"
                fill
                className="rounded-lg hidden md:block lg:hidden"
              />
              <Image
                src={movie.thumbnail.regular.large}
                alt="movie image"
                fill
                className="rounded-lg hidden lg:block"
              />
            </div>
            <div>
              <div className="flex gap-6">
                <h6 className="text-white opacity-75 leading-normal text-xs ">
                  {movie.year}
                </h6>
                <ul className="flex list-disc gap-6 ">
                  <li className="text-white opacity-75 leading-normal text-xs inline-flex items-center gap-1">
                    {movie.category === "Movie" ? <MovieIcon /> : <TvIcon />}
                    {movie.category}
                  </li>
                  <li className="text-white opacity-75 leading-normal text-xs">
                    {movie.rating}
                  </li>
                </ul>
              </div>
              <h3 className="text-[15px] md:text-lg font-medium  text-white">
                {movie.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AllMovies;
