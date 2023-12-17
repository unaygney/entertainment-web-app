import React from "react";
import BookmarkContainer from "@/containers/BookmarkContainer";
import { getMovies } from "@/services/movies";
async function Bookmark() {
  const movies = await getMovies();
  const bookmarked = await movies.filter(
    (movie) => movie.isBookmarked === true
  );
  console.log(bookmarked);
  return <BookmarkContainer bookmarked={bookmarked} />;
}

export default Bookmark;
