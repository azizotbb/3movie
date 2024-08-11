import NavBar from "./components/NavBar";
import "./App.css";
import { Container } from "react-bootstrap";
import MovieList from "./components/MovieList";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
function App() {
  const [movie, setMovie] = useState([]);
  const [numOfPage, setNumOfPage] = useState(0);

  const getAllMovie = async () => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/popular?language=ar-US&page=1`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODk1NjI3NTcyMmIzZDg1NDQyMzUzMjljYmEzZjFlMSIsIm5iZiI6MTcyMzI4Njg1MC40NzM0MzQsInN1YiI6IjY2YjczZGI2NTYyZWY4M2UyMDAzNmVlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kf6ZKJCRf0sYqakXFg0633fefw0ynKLPOGoPHEXffvo",
      },
    };

    await axios
      .request(options)
      .then(function (response) {
        setMovie(response.data.results);
        setNumOfPage(response.data.total_pages);
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

  const getPageMovie = async (pageNum) => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/popular?language=ar-US&page=${pageNum}`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODk1NjI3NTcyMmIzZDg1NDQyMzUzMjljYmEzZjFlMSIsIm5iZiI6MTcyMzI4Njg1MC40NzM0MzQsInN1YiI6IjY2YjczZGI2NTYyZWY4M2UyMDAzNmVlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kf6ZKJCRf0sYqakXFg0633fefw0ynKLPOGoPHEXffvo",
      },
    };

    await axios
      .request(options)
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
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MovieList
                  movie={movie}
                  getPageMovie={getPageMovie}
                  numOfPage={numOfPage}
                />
              }
            />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
