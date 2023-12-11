import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import useApiSearch from "../../hook/useApiSearch";
import VideoCard from "../videoCard/VideoCard";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [keyword, setKeyword] = useState("");
  const { isLoading, error, data } = useApiSearch(keyword);

  useEffect(() => {
    setKeyword(searchParams.get("search_query"));
  }, [searchParams]);

  return (
    <StyledVideoList>
      {data?.map((video, index) => (
        <VideoCard key={index} data={video} />
      ))}
    </StyledVideoList>
  );
};

export default Search;
const StyledVideoList = styled.div`
  display: grid;
  overflow: hidden;
  grid-auto-flow: row;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  padding: 0 20px;

  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0;
  }
`;
/*
  NOTE :
  const location = useLocation();
  const queryString = location.search;
  -> 전체 쿼리 스트링을 하나의 문자열로 표현
*/
