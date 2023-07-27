import React from "react";
import Day from "../../Components/Day";
import Product from "../../Components/Product";
import Search from "../../Components/Search";
import { Header, Body } from "./styles";
import useSWR from "swr";
import fetcher from "../../fetcher";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Detail from "../Detail";

const key = process.env.REACT_APP_MOVIE_KEY;

const Main = () => {
  const { data, error } = useSWR(
    `/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${key}`,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <Header>
        <Search />
        <Day />
      </Header>
      <hr />
      <Body>
        {data.movieListResult.movieList.map((e: any, index: number) => {
          return <Product moviedata={e} id={e.movieCd} key={index} />;
        })}
      </Body>
    </div>
  );
};

export default Main;
