import React, { FC, VFC } from "react";
import useSWR from "swr";
import fetcher from "../../fetcher";
import { useLocation } from "react-router-dom";

const key = process.env.REACT_APP_MOVIE_KEY;

const Detail: FC = () => {
  const location = useLocation();

  const { data, error } = useSWR(
    `/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${key}`,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const found = data.movieListResult.movieList.find(
    (e: any) => e.movieCd === location.state.mid
  );

  console.log(found);

  return (
    <div>
      <div>이미지</div>
      <div>
        <div>
          {found.movieNm},{found.movieNmEn}
        </div>
        <div>{found.prdYear}</div>
        <div>{found.genreAlt}</div>
        <div>좌석</div>
      </div>
    </div>
  );
};

export default Detail;
