const API_URL = "https://6550e6577d203ab6626e4f34.mockapi.io/api/v1/movies";

export const getMovies = async () => {
  try {
    const response = await fetch(API_URL);
    return response.json();
  } catch (err) {
    throw new Error("Failed fetching data!");
  }
};
