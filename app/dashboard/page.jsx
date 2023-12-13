"use client";
import Navbar from "@/components/Navbar";
import { getMovies } from "@/services/movies";
import React from "react";
import TrendMovies from "@/components/TrendMovies";

async function Dashboard() {
  const movies = await getMovies();
  const trends = movies.filter((movie) => movie.isTrending === true);
  console.log(trends);

  return (
    <div className="w-full min-h-screen bg-[#10141E] ">
      <Navbar />
      <TrendMovies trends={trends} />
    </div>
  );
}

export default Dashboard;
