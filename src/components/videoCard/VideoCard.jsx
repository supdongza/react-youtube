import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Video from "../video/Video";

const VideoCard = ({ data }) => {
  const { id, snippet: video } = data;

  return (
    <>
      <StyledWrap>
        {/* video/${id}, /video/${id} 차이 */}
        <Link to={`/video/${id}`} state={video}>
          <StyledThumb>
            <img src={video.thumbnails.high.url} alt="" />
          </StyledThumb>
          <StyledTitle>{video.title}</StyledTitle>
          <StyledChannelTitle>{video.channelTitle}</StyledChannelTitle>
        </Link>
      </StyledWrap>
    </>
  );
};

export default VideoCard;

const StyledWrap = styled.div``;
const StyledThumb = styled.div`
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
    vertical-align: top;
    @media only screen and (max-width: 500px) {
      border-radius: 0;
    }
  }
`;
const StyledTitle = styled.strong`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 12px 0 4px;
  padding: 0 5px;
  font-weight: 500;
  font-size: 16px;
  color: #000;
`;
const StyledChannelTitle = styled.span`
  padding: 0 5px;
  font-size: 14px;
  color: #aaa;
`;
