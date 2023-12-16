"use client";
import Navbar from "@/components/Navbar";
import Input from "@/components/Input";
import React, { useState } from "react";
import TrendMovies from "@/components/TrendMovies";
import SearchIcon from "@/assets/icons/icon-search.svg";
import AllMovies from "@/components/AllMovies";
import EmptyBookmark from "@/assets/icons/icon-bookmark-empty.svg";
import FulllBookmark from "@/assets/icons/icon-bookmark-full.svg";
import MovieIcon from "@/assets/icons/icon-category-movie.svg";
import TvIcon from "@/assets/icons/icon-category-tv.svg";
import Image from "next/image";

function DashboardContainer({ trends, movies }) {
  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter(
    (movie) =>
      movie &&
      movie.title &&
      movie.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="w-full min-h-screen  bg-[#10141E]    ">
      <div className="flex flex-col lg:flex-row md:p-6 lg:p-8 ">
        <Navbar />
        {search ? (
          <main className="overflow-hidden w-full h-full px-6">
            <div className="flex items-center px-4 mt-6">
              <SearchIcon />
              <Input
                placeholder={"Please enter the name movies or series"}
                type={"text"}
                className={"border-none h-5 py-4  "}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <h3 className="text-xl font-light text-white tracking-[-0.312px] leading-normal md:text-[32px] md:tracking-[-0.5px]">{`Found ${
              filteredMovies.length
            } ${
              filteredMovies.length > 1 ? "results" : "result"
            } for '${search}'`}</h3>
            <div className="flex flex-wrap gap-4  ">
              {filteredMovies.map((movie, i) => (
                <div
                  key={i}
                  className="w-[45%] md:w-[32%] lg:w-[23%] flex flex-col gap-2 mt-4 md:mt-6 lg:mt-8 relative   "
                >
                  <div className="absolute right-4 top-4 w-8 h-8 rounded-full bg-[#10141e80] inline-flex items-center justify-center z-10">
                    {movie.isBookmarked ? <FulllBookmark /> : <EmptyBookmark />}
                  </div>
                  <div className="relative w-full  h-[110px] md:h-[140px] lg:h-[174px]">
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
                          {movie.category === "Movie" ? (
                            <MovieIcon />
                          ) : (
                            <TvIcon />
                          )}
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
          </main>
        ) : (
          <main className="overflow-hidden">
            <div className="flex items-center px-4 mt-6">
              <SearchIcon />
              <Input
                placeholder={"Please enter the name movies or series"}
                type={"text"}
                className={"border-none h-5 py-4  "}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <TrendMovies trends={trends} />
            <AllMovies movies={movies} />
          </main>
        )}
      </div>
    </div>
  );
}

export default DashboardContainer;
