import React from "react";
import { Col } from "react-bootstrap";

export default function CardMovie({ mov }) {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
      <div className="card">
        <img
          src={"https://image.tmdb.org/t/p/w500" + mov.poster_path}
          className="card-img"
          alt="movie"
        />
        <div className="card-overlay">
          <div className="my-5 text-center">
            <p>اسم الفيلم : {mov.title}</p>
            <p> تاريخ الاصدار : {mov.release_date} </p>
            <p>عدد المقيمين : {mov.vote_count}</p>
            <p>التقيم : {mov.vote_average}</p>
          </div>
        </div>
      </div>
    </Col>
  );
}
