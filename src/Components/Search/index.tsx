import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

const Search = () => {
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
      />
      <button></button>
    </InputGroup>
  );
};

export default Search;
