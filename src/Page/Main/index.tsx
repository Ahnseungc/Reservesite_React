import React, { Fragment, useCallback, useState } from "react";
import Day from "../../Components/Day";
import Product from "../../Components/Product";
import Search from "../../Components/Search";
import { Header, Body } from "./styles";
import useSWR from "swr";
import fetcher from "../../fetcher";

const key = process.env.REACT_APP_MOVIE_KEY;

const Main = () => {
  const [filtermovie, setFiltermovie] = useState("");

  const SearchMovie = useCallback((e: any) => {
    setFiltermovie(e.target.value);
  }, []);

  const { data, error } = useSWR(
    `/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${key}`,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const findMovie = data.movieListResult.movieList.filter(
    (e: any, index: number) => {
      return e.movieNm
        .replace(" ", "")
        .toLowerCase()
        .includes(filtermovie.replace(" ", "").toLowerCase());
    }
  );

  return (
    <Fragment>
      <Header>
        <Search SearchMovie={SearchMovie} />
        <Day />
      </Header>
      <hr />
      <Body>
        {filtermovie
          ? findMovie.map((e: any, index: number) => {
              return <Product moviedata={e} id={e.movieCd} key={index} />;
            })
          : data.movieListResult.movieList.map((e: any, index: number) => {
              return <Product moviedata={e} id={e.movieCd} key={index} />;
            })}
      </Body>
    </Fragment>
  );
};

export default Main;
