import styled from "styled-components";
import Screen from "./Screen";
import Controller from "./Controller";

const IpodContainer = styled.div`
    width: 350px;
    height: 600px;
    background-color: #6565657d;
    border-radius: 20px;
    overflow: hidden;
`;
const Ipod = (props)=>{
    const { menu, 
            wheelRef, 
            changeMenu, 
            visibleMenu, 
            playPauseSong, 
            showMenu, 
            nextSong,
            previousSong} = props;
    return (
        <IpodContainer>
            <Screen menu = {menu} visibleMenu={visibleMenu}/>
        <Controller wheelRef={wheelRef} 
                    changeMenu={changeMenu} 
                    playPauseSong={playPauseSong}
                    showMenu={showMenu}
                    nextSong={nextSong}
                    previousSong={previousSong}/>
        </IpodContainer>
    )
}

export default Ipod;