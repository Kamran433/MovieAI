const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjRkNjk3ODk0YzdlNWRiMzQ0YmE2MmNjMWNiYjE2OSIsInN1YiI6IjY2NTFhNTc5MjJkNzA0ZGViNjI2ZjFhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OG5gc4caaF6RIVd7oi09HbtO02BWKUKFq62DnU5GPfM",
  },
};
const need = "movie";
fetch(`https://api.themoviedb.org/3/${need}/changes`, options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
