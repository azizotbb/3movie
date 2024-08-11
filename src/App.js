import NavBar from "./components/NavBar";
import "./App.css";
import { Container } from "react-bootstrap";
import MovieList from "./components/MovieList";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [movie, setMovie] = useState([]);

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/popular?language=ar-US&page=1",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODk1NjI3NTcyMmIzZDg1NDQyMzUzMjljYmEzZjFlMSIsIm5iZiI6MTcyMzI4Njg1MC40NzM0MzQsInN1YiI6IjY2YjczZGI2NTYyZWY4M2UyMDAzNmVlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kf6ZKJCRf0sYqakXFg0633fefw0ynKLPOGoPHEXffvo",
    },
  };

  const getAllMovie = async () => {
    await axios
      .request(options)
      .then(function (response) {
        setMovie(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const search = (word) => {
    const options1 = {
      method: "GET",
      url: `https://api.themoviedb.org/3/search/movie?query=${word}&include_adult=false&language=en-US&page=1`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODk1NjI3NTcyMmIzZDg1NDQyMzUzMjljYmEzZjFlMSIsIm5iZiI6MTcyMzI4Njg1MC40NzM0MzQsInN1YiI6IjY2YjczZGI2NTYyZWY4M2UyMDAzNmVlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kf6ZKJCRf0sYqakXFg0633fefw0ynKLPOGoPHEXffvo",
      },
    };

    axios
      .request(options1)
      .then(function (response) {
        setMovie(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getAllMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App color-body">
      <NavBar search={search} />
      <Container>
        <MovieList movie={movie} />
      </Container>
    </div>
  );
}

export default App;
