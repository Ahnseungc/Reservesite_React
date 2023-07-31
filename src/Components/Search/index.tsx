import React, { FC } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

interface Props {
  SearchMovie: (e: any) => void;
}

const Search: FC<Props> = ({ SearchMovie }) => {
  return (
    <InputGroup
      size="lg"
      style={{
        width: "80%",
        height: "30%",
      }}
    >
      <Form.Control
        placeholder="검색어를 입력하세요"
        aria-label="search"
        aria-describedby="search1"
        onChange={SearchMovie}
      />
      <button></button>
    </InputGroup>
  );
};

export default Search;
