
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ArtistDisplayContainer = styled.div`
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
const ArtistDisplay = (props) =>{
    const { visibleMenu } = props;
    const {id, singer, thumbnail, title} = visibleMenu;
    return(
            <ArtistDisplayContainer>

                <Background backgroundimage={thumbnail}></Background>
                <SongName>{title}</SongName>
            </ArtistDisplayContainer>
        
    );
}

export default ArtistDisplay;