"use client";
import { getMovies } from "@/services/movies";
import React from "react";

async function Dashboard() {
  const movies = await getMovies();
  console.log(movies);

  return <div>dashboard</div>;
}

export default Dashboard;
