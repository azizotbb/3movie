import React from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";

export default function MovieList({ movie }) {
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
    </Row>
  );
}
