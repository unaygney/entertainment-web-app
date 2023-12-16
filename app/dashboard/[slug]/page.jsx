import React from "react";
import DynamicContainer from "@/containers/DynamicContainer";
import { getMovies } from "@/services/movies";
import { notFound } from "next/navigation";
async function Page({ params }) {
  const movies = await getMovies();
  const { slug } = params;
  const filteredData = movies.filter(
    (movie) => movie.category.toLowerCase() == slug
  );
  if (filteredData.length === 0) {
    notFound();
  }

  return <DynamicContainer movies={filteredData} />;
}

export default Page;
