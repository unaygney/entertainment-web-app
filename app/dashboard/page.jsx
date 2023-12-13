"use client";
import Navbar from "@/components/Navbar";
import { getMovies } from "@/services/movies";
import React from "react";

async function Dashboard() {
  const movies = await getMovies();
  console.log(movies);

  return (
    <div className="w-full min-h-screen bg-[#10141E] ">
      <Navbar />
    </div>
  );
}

export default Dashboard;
