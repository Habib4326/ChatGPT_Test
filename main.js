const apiKey = 'YOUR_OMDB_API_KEY'; // Replace with your OMDb API key

function searchMovies() {
  const query = document.getElementById('searchInput').value;
  const url = `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=707d12b4}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const resultsDiv = document.getElementById('movieResults');
      resultsDiv.innerHTML = '';

      if (data.Response === "True") {
        data.Search.forEach(movie => {
          const movieCard = document.createElement('div');
          movieCard.className = 'movie-card';

          movieCard.innerHTML = `
            <img src="${movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/100x150'}" alt="${movie.Title}" width="100" />
            <h3>${movie.Title}</h3>
            <p>Year: ${movie.Year}</p>
          `;

          resultsDiv.appendChild(movieCard);
        });
      } else {
        resultsDiv.innerHTML = `<p>No results found for "${query}"</p>`;
      }
    })
    .catch(error => {
      console.error('Error fetching movie data:', error);
    });
}
