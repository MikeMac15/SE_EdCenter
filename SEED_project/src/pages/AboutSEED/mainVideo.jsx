import React from 'react';
import styled from 'styled-components';
import backgroundVideo from '/video/introvid.mp4'

const VideoSection = styled.div`
  position: relative;
  overflow: hidden;
`;

const Video = styled.video`
  width: 100%;
  height: auto;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.15);
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
`;


const VideoComponent = () => {
  return (
    <VideoSection>
      <Video autoPlay loop muted>
      <source src={backgroundVideo} type='video/mp4' />
        Your browser does not support the video tag.
      </Video>
      
    </VideoSection>
  );
};

export default VideoComponent;