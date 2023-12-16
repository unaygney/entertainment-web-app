import { getMovies } from "@/services/movies";
import DashboardContainer from "@/containers/DashboardContainer";
import React from "react";

async function Dashboard() {
  const movies = await getMovies();
  const trends = await movies.filter((movie) => movie.isTrending === true);

  return <DashboardContainer movies={movies} trends={trends} />;
}

export default Dashboard;
