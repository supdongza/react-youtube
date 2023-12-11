import React from "react";
import styled from "styled-components";
import useApiTrending from "../../hook/useApiTrending";
import VideoCard from "../videoCard/VideoCard";

const Home = () => {
  const { isLoading, error, data } = useApiTrending();
  console.log(data);

  return (
    <div>
      <StyledVideoList>
        {data?.map((video, index) => (
          <VideoCard key={index} data={video} />
        ))}
      </StyledVideoList>
    </div>
  );
};

export default Home;

const StyledVideoList = styled.div`
  display: grid;
  overflow: hidden;
  grid-auto-flow: row;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px 10px;
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
