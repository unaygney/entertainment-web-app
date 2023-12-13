import React from "react";

function TrendMovies({ trends }) {
  return (
    <div className="flex-1 mt-10">
      {trends.map((trend) => (
        <p>{trend.title}</p>
      ))}
    </div>
  );
}

export default TrendMovies;
