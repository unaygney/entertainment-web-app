import Navbar from "@/components/Navbar";
import Input from "@/components/Input";
import { getMovies } from "@/services/movies";
import React from "react";
import TrendMovies from "@/components/TrendMovies";
import SearchIcon from "@/assets/icons/icon-search.svg";

async function Dashboard() {
  const movies = await getMovies();
  const trends = movies.filter((movie) => movie.isTrending === true);

  return (
    <div className="w-full min-h-screen  bg-[#10141E]    ">
      <div className="flex flex-col lg:flex-row md:p-6 lg:p-8 ">
        <Navbar />
        <main className="overflow-hidden">
          <div className="flex items-center px-4 mt-6">
            <SearchIcon />
            <Input
              placeholder={"Please enter the name movies or series"}
              type={"text"}
              className={"border-none h-5 py-4  "}
            />
          </div>
          <TrendMovies trends={trends} />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
