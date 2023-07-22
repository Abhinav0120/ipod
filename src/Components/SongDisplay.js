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
    const {id, singer, thumbnail, title} = props.visibleMenu;
    return(
            <SongDisplayContainer>

                <Background backgroundimage={thumbnail}></Background>
                <SongName>{title}</SongName>
                <SingerName>By {singer}.</SingerName>
                <SongProgressContainer>
                    <ProgressBar></ProgressBar>
                </SongProgressContainer>
            
            </SongDisplayContainer>
        
    );
}

export default SongDisplay;