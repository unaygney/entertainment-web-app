const API_URL = "https://657ee6fa9d10ccb465d57adf.mockapi.io/movies";

export const getMovies = async () => {
  try {
    const response = await fetch(API_URL, { cache: "no-store" });
    return response.json();
  } catch (err) {
    throw new Error("Failed fetching data!");
  }
};

export const getPost = async (id) => {
  try {
    const changeData = await getDataWithId(id);
    const allMovies = await getMovies();

    const updatedMovies = allMovies.map((movie) => {
      if (movie.id === id) {
        return changeData;
      }
      return movie;
    });

    console.log(updatedMovies);
    const response = await fetch(API_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedMovies),
    });

    if (!response.ok) {
      throw new Error("Failed to update data");
    }

    return response.json();
  } catch (err) {
    throw new Error("Failed while posting data");
  }
};

export const getDataWithId = async (id) => {
  try {
    const response = await getMovies();
    const filteredData = response.find((card) => card.id == id);

    if (filteredData) {
      const updatedData = {
        ...filteredData,
        isBookmarked: !filteredData.isBookmarked,
      };
      return updatedData;
    }
  } catch (err) {
    throw new Error("Something went wrong!");
  }
};
