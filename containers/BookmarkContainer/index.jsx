"use client";
import Navbar from "@/components/Navbar";
import Input from "@/components/Input";
import React, { useState } from "react";
import SearchIcon from "@/assets/icons/icon-search.svg";

import Card from "@/components/Card";

function BookmarkContainer({ bookmarked }) {
  const [search, setSearch] = useState("");

  const bookmarkedMovie = bookmarked.filter(
    (movie) => movie.category === "Movie"
  );
  const bookmarkedTVSeries = bookmarked.filter(
    (series) => series.category === "TV Series"
  );

  const filteredMovies = bookmarked.filter(
    (movie) =>
      movie &&
      movie.title &&
      movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen  bg-[#10141E] pb-10   ">
      <div className="flex flex-col lg:flex-row md:p-6 lg:p-8 ">
        <Navbar activePage={"bookmark"} />
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
                <Card key={i} movie={movie} />
              ))}
            </div>
          </main>
        ) : (
          <main className="overflow-hidden w-full h-full px-6">
            <div className="flex items-center  mt-6">
              <SearchIcon />
              <Input
                placeholder={"Please enter the name movies or series"}
                type={"text"}
                className={"border-none h-5 py-4  "}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="mt-3">
              <h3 className="text-xl font-light text-white tracking-[-0.312px] leading-normal md:text-[32px] md:tracking-[-0.5px]">
                Bookmarked Movies
              </h3>
              <div className="flex flex-wrap gap-4 ">
                {bookmarkedMovie.map((movie, i) => (
                  <Card movie={movie} key={i} />
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-light text-white tracking-[-0.312px] leading-normal md:text-[32px] md:tracking-[-0.5px]">
                Bookmarked TV Series
              </h3>
              <div className="flex flex-wrap gap-4 ">
                {bookmarkedTVSeries.map((movie, i) => (
                  <Card movie={movie} key={i} />
                ))}
              </div>
            </div>
          </main>
        )}
      </div>
    </div>
  );
}

export default BookmarkContainer;
