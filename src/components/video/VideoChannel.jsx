import React from "react";
import styled from "styled-components";

const VideoChannel = ({ channelInfo }) => {
  const { channelTitle, channelThumb } = channelInfo;
  return (
    <StyledWrap>
      <img src={channelThumb} alt={channelTitle} />
      <StyledText>{channelTitle}</StyledText>
    </StyledWrap>
  );
};

export default VideoChannel;

const StyledWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  img {
    width: 36px;
    height: 36px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 50%;
  }
`;

const StyledText = styled.p`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 500;
`;
