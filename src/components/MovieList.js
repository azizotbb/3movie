import React from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import Pagination from "./Pagination";
export default function MovieList({ movie, getPageMovie, numOfPage }) {
  return (
    <Row className="mt-3 ">
      {movie.length >= 1 ? (
        movie.map((mov) => {
          return <CardMovie key={mov.id} mov={mov} />;
        })
      ) : (
        <h2 className="text-center p-5" style={{ color: "white" }}>
          لا يوجد افلام...
        </h2>
      )}
      <Pagination getPageMovie={getPageMovie} numOfPage={numOfPage} />
    </Row>
  );
}
