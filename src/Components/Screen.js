import styled from "styled-components";
import Menu from "./Menu";
import SongDisplay from "./SongDisplay";
import ArtistDisplay from "./ArtistDisplay";

const ScreenContainer = styled.div`
    background-color: grey;
    height:47%;
    margin: 5px;
    border-radius: 20px;
    overflow: hidden;
    background-image: url(https://images.unsplash.com/photo-1599855129460-58c62b60e3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80);
    background-size: cover; /* Set the background image to cover the entire container */
    background-position: center; /* Center the background image */
    opacity: 100%;

`
const UnderDevelopment = styled.div`
    background-color: white;
    width: 100%;
    height: 99%;
    border-radius: 20px 0px 0px 20px;
    padding: 1%;
    font-size: 1.5rem;

    background-image: ${(props) => `url(${props.backgroundimage})`};
    background-size: cover; /* Set the background image to cover the entire container */
    background-position: center; /* Center the background image */
    // opacity: 80%;
`

const Screen = (props)=>{
    const {menu, visibleMenu} = props;
    // const {options, type } = visibleMenu;
    console.log(visibleMenu);
    return(
        <ScreenContainer>
        {
            visibleMenu != null ? 
                visibleMenu.options!=null?
                    visibleMenu.options.length !== 0 ? 
                        <Menu visibleMenu={visibleMenu} /> 
                        : <UnderDevelopment backgroundimage={visibleMenu?.imgsource}></UnderDevelopment> 
                    :visibleMenu.type!=null?
                        visibleMenu.type=="song"?<SongDisplay visibleMenu={visibleMenu}/>
                        :visibleMenu.type=="artist"?<ArtistDisplay visibleMenu={visibleMenu}/> :null
                    :null
                :null
        }
        </ScreenContainer>
    );
}

export default Screen;