import React, { FC, Fragment, VFC, useState } from "react";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";
import { useParams } from "react-router-dom";
import Seat from "@components/Seat";
import { Seatbox, Seatst } from "./style";

const key = process.env.REACT_APP_MOVIE_KEY;

const Detail: FC = () => {
  let seatNum = 0;
  const parm = useParams();
  const [seat, setSeat] = useState(
    Array.from(Array(3), () => new Array(10).fill(true))
  );

  const { data, error } = useSWR(
    `/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${key}`,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const found = data.movieListResult.movieList.find(
    (e: any) => e.movieCd === parm.id
  );

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div>이미지</div>
      <div>
        <div>
          {found.movieNm},{found.movieNmEn}
        </div>
        <div>{found.prdYear}</div>
        <div>{found.genreAlt}</div>
      </div>
      <Seatbox>
        {seat.map((e) => {
          return (
            <Seatst>
              {e.map((el) => {
                seatNum += 1;
                return <Seat state={el} seatNum={seatNum} />;
              })}
            </Seatst>
          );
        })}
      </Seatbox>
    </div>
  );
};

export default Detail;
