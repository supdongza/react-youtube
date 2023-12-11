import React, { useMemo } from "react";
import styled from "styled-components";
import useApiChannel from "../../hook/useApiChannel";
import { useLocation, useParams } from "react-router-dom";
import VideoChannel from "./VideoChannel";
import useApiRelated from "../../hook/useApiRelated";
import VideoCard from "../videoCard/VideoCard";

const Video = () => {
  const { videoId } = useParams();
  const { state: video } = useLocation();
  const { title, description, channelId, channelTitle } = video;
  const { data: channelThumb } = useApiChannel(channelId);
  const { data: relatedVideos } = useApiRelated(channelId);

  console.log(relatedVideos);

  const iframeProps = useMemo(() => {
    return {
      id: "player",
      type: "text/html",
      width: "100%",
      height: "auto",
      src: `https://www.youtube.com/embed/${videoId}`,
      frameBorder: "0",
    };
  }, [videoId]);

  return (
    <StyledWrap>
      <StyledVideoInfo>
        <StyledVideoBox>
          <iframe title="videoDetail" {...iframeProps}></iframe>
        </StyledVideoBox>
        <StyledTitle>{title}</StyledTitle>
        <VideoChannel channelInfo={{ channelTitle, channelThumb }} />
        <StyledDescBox>
          <StyledDesc>{description}</StyledDesc>
        </StyledDescBox>
      </StyledVideoInfo>
      <StyledVideoList>
        {relatedVideos?.map((video, index) => (
          <VideoCard key={index} data={video} />
        ))}
      </StyledVideoList>
    </StyledWrap>
  );
};

export default Video;

const StyledWrap = styled.article`
  display: flex;
  padding: 0 20px;
  gap: 0 20px;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
const StyledVideoInfo = styled.div`
  flex: 1;
`;
const StyledVideoBox = styled.div`
  position: relative;
  padding-top: calc(1 / 2 * 100%);
  border-radius: 10px;
  overflow: hidden;
  iframe {
    position: absolute;
    inset: 0;
    height: 100%;
  }
`;
const StyledVideoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  width: 25%;
  & > div {
    &:nth-child(n + 5) {
      display: none;
    }
  }
  @media only screen and (max-width: 900px) {
    display: grid;
    overflow: hidden;
    grid-auto-flow: row;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px 10px;
    width: 100%;
    margin-top: 30px;
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const StyledTitle = styled.strong`
  display: block;
  margin-top: 12px;
  font-size: 20px;
  line-height: 28px;
`;
const StyledDescBox = styled.div`
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.05);
  padding: 20px 50px 20px 20px;
`;
const StyledDesc = styled.span`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
