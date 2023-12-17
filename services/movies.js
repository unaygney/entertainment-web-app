const API_URL = "https://657ee6fa9d10ccb465d57adf.mockapi.io/movies";

export const getMovies = async () => {
  try {
    const response = await fetch(API_URL, { cache: "no-store" });
    return response.json();
  } catch (err) {
    throw new Error("Failed fetching data!");
  }
};
