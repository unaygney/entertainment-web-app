import React from "react";
import DynamicContainer from "@/containers/DynamicContainer";
import { getMovies } from "@/services/movies";
import { notFound } from "next/navigation";
async function Page({ params }) {
  const movies = await getMovies();
  const { slug } = params;
  const title = slug === "movie" ? "Movies" : "TV Series";
  let filteredData;

  if (slug === "series") {
    filteredData = movies.filter(
      (movie) => movie.category.toLowerCase() === "tv series"
    );
  } else {
    filteredData = movies.filter(
      (movie) => movie.category.toLowerCase() === slug
    );
  }

  if (filteredData.length === 0) {
    notFound();
  }

  return <DynamicContainer movies={filteredData} title={title} slug={slug} />;
}

export default Page;
