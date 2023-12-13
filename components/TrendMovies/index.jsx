import React from "react";

function TrendMovies({ trends }) {
  return (
    <div>
      {trends.map((trend) => (
        <p>{trend.title}</p>
      ))}
    </div>
  );
}

export default TrendMovies;
