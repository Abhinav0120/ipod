
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SongDisplayContainer = styled.div`
    background-color: Black;
    width: 100%;
    height: 99%;
    border-radius: 20px 0px 0px 20px;
    padding: 1%;
    font-size: 1.5rem;

    display: flex;
    flex-direction: column;
    // align-items: flex-start;
    justify-content: flex-end;
    position: relative;
`
const Background = styled.div`
    // background-color: black;
    width: 100%;
    height: 100%;
    border-radius: 20px 0px 0px 20px;
    // padding: 1%;
    font-size: 1.5rem;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;

    background-image: ${(props) => `url(${props.backgroundimage})`};
    background-size: cover; /* Set the background image to cover the entire container */
    background-position: center; /* Center the background image */
    opacity: 65%;
`

const SongName = styled.div`
    color: white;
    font-weight: 600;
    z-index: 1;
    margin-left: 10px;
    text-transform: capitalize;
`
const SingerName = styled.div`
    color: lightgrey;
    z-index: 1;
    margin-left: 10px;
    font-size: 1.2rem;
    text-transform: capitalize;
`
const SongProgressContainer = styled.div`
    width: 90%;
    height: 2%;
    // display: flex;
    // align-items: center;
    background-color: grey;
    margin: 4%;
    margin-top: 7%;
    // margin-bottum: 7%;
    border-radius: 5px;
    z-index: 1;
    overflow: hidden;
`
const ProgressBar = styled.div`
    width: 10%;
    background-color: red;
    height: 100%;
`
const SongDisplay = (props) =>{
    const { visibleMenu } = props;
    const {id, singer, thumbnail, title} = visibleMenu;

    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
      const audioElement = visibleMenu?.song;
      if (audioElement) {
        // Attach event listener to track timeupdate
        audioElement.addEventListener("timeupdate", handleTimeUpdate);
      }
  
      return () => {
        // Clean up the event listener on unmount
        if (audioElement) {
          audioElement.removeEventListener("timeupdate", handleTimeUpdate);
        }
      };
    }, [visibleMenu]);

    const handleTimeUpdate = (e) => {
        const audioElement = e.target;
        setCurrentTime(audioElement.currentTime);
    };
  
    // Calculate the progress percentage
    const songDuration = visibleMenu?.song?.duration || 0;
    const progressPercentage = (currentTime / songDuration) * 100;

    return(
            <SongDisplayContainer>

                <Background backgroundimage={thumbnail}></Background>
                <SongName>{title}</SongName>
                <SingerName>By {singer}.</SingerName>
                <SongProgressContainer>
                    <ProgressBar style={{ width: `${progressPercentage}%` }}></ProgressBar>
                </SongProgressContainer>
            
            </SongDisplayContainer>
        
    );
}

export default SongDisplay;