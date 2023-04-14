import React from "react";
import styled from "styled-components";
import NoticeBodyContainer from "./NoticeBodyContainer";
import NoticeMajor from "./NoticeMajor";
import Header from "@/src/Common/Header";
import { BrowserRouter } from "react-router-dom";

const NoticePost = () => {
  return (
    <div>
      <Header />
      <NoticeHeadContainer>
        <Noticetitle>
          <h2>학부공지</h2>
        </Noticetitle>
        <NoticeSearchBar>
          <label></label>
          <input type="text" placeholder="여기에 검색하세요!" />
          <button type="submit">검색</button>
        </NoticeSearchBar>
      </NoticeHeadContainer>
      <BrowserRouter>
        <NoticeMajor />
      </BrowserRouter>
    </div>
  );
};

const NoticeHeadContainer = styled.div`
  /* border: solid 1px black; */
  padding: 1rem;
  /* background-color: grey; */
  margin: 2rem auto;
  width: 90vw;
  max-width: 95%;
`;

const Noticetitle = styled.div`
  width: 100px;
  /* border: solid 1px black; */
  margin: auto;
`;

const NoticeSearchBar = styled.div`
  width: 500px;
  /* border: solid 1px black; */
  margin: 0.5rem auto;
  & > button {
    margin: 0 0 0 20px;
    font: inherit;
    cursor: pointer;
    padding: 0.5rem;
    border: 1px solid #d9d9d9;
    background-color: #d9d9d9;
    color: black;
    border-radius: 12px;
    margin-right: 1rem;
  }
  & > button:hover {
    background-color: #adabab;
  }
  & > input {
    font: inherit;
    padding: 0.5rem;
    border-radius: 12px;
    border: 1px solid #ccc;
    width: 25rem;
    max-width: 100%;
    background-color: #ccc;
  }
  & > input:focus::placeholder {
    color: transparent;
  }
`;

export default NoticePost;
