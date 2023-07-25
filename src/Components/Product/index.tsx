import React, { useState, useEffect, FC } from "react";

import Container from "react-bootstrap/Container";

const key = process.env.REACT_APP_MOVIE_KEY;

interface IProps {
  moviedata: any;
  id: number;
}

const Product: FC<IProps> = (moviedata, id) => {
  console.log(moviedata.moviedata);

  return (
    <Container
      key={id}
      style={{
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid black ",
        marginBottom: "5vh",
        borderRadius: "20px",
      }}
    >
      <div className="name">{moviedata.moviedata.movieNm}</div>
      <div className="state">{moviedata.moviedata.prdtStatNm}</div>
      <div className="year">{moviedata.moviedata.prdtYear}</div>
      <div className="genre">{moviedata.moviedata.repGenreNm}</div>
      <div className="nation">{moviedata.moviedata.repNationNm}</div>
    </Container>
  );
};

export default Product;
