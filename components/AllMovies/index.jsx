import React from "react";
import Card from "@/components/Card";

function AllMovies({ movies }) {
  return (
    <section className="flex flex-col  mt-6 px-6 pb-10">
      <h3 className="text-xl font-light text-white tracking-[-0.312px] leading-normal md:text-[32px] md:tracking-[-0.5px]  ">
        Recommended for you
      </h3>
      <div className="flex flex-wrap justify-between ">
        {movies.map((movie, i) => (
          <Card key={i} movie={movie} />
        ))}
      </div>
    </section>
  );
}

export default AllMovies;
