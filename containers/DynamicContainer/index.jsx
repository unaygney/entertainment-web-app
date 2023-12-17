"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Input from "@/components/Input";
import SearchIcon from "@/assets/icons/icon-search.svg";
import Card from "@/components/Card";

function DynamicContainer({ movies, title }) {
  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter(
    (movie) =>
      movie &&
      movie.title &&
      movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen  bg-[#10141E] pb-10    ">
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
                <Card key={i} movie={movie} />
              ))}
            </div>
          </main>
        ) : (
          <main className="overflow-hidden px-4 ">
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
            <h3 className="text-xl font-light text-white tracking-[-0.312px] leading-normal md:text-[32px] md:tracking-[-0.5px]">
              {title}
            </h3>
            <div className="flex flex-wrap gap-4 ">
              {filteredMovies.map((movie, i) => (
                <Card movie={movie} key={i} />
              ))}
            </div>
          </main>
        )}
      </div>
    </div>
  );
}

export default DynamicContainer;
