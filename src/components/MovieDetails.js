import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function MovieDetails() {
  const params = useParams();
  const [details, setDetails] = useState([]);

  const getDetails = () => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${params.id}?language=ar-US`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODk1NjI3NTcyMmIzZDg1NDQyMzUzMjljYmEzZjFlMSIsIm5iZiI6MTcyMzM3MjAwMi42NzQxMTksInN1YiI6IjY2YjczZGI2NTYyZWY4M2UyMDAzNmVlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YonVxU8OZZ6HxgbxgHiruw1ko83ijqYZQ_NVOuxb-r4",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setDetails(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App color-body">
      <Container sm="5">
        <Row className="m-5 details-col">
          <Col xs={6} md={4}>
            <Image
              src={"https://image.tmdb.org/t/p/w500" + details.poster_path}
              rounded
              className="details-img"
            />
          </Col>
          <Col>
            <h4 className="details-text">
              {" "}
              اسم الفيلم :<br /> {details.title}{" "}
            </h4>
            <h4 className="details-text">
              تاريخ الفيلم : <br />
              {details.release_date}
            </h4>
            <h4 className="details-text">
              عدد المقيمين :<br /> {details.vote_count}
            </h4>
            <h4 className="details-text">
              التقيم :<br /> {details.vote_average}
            </h4>
          </Col>
        </Row>

        <Row className="details-col">
          <Col>
            <h4>القصه:</h4>
            <p>{details.overview}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
