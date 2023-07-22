import styled from "styled-components";
import Screen from "./Screen";
import Controller from "./Controller";

const IpodContainer = styled.div`
    width: 350px;
    height: 600px;
    background-color: lightgrey;
    border-radius: 20px;
    overflow: hidden;
`;
const Ipod = (props)=>{
    const {menu, activeMenuItem, wheelRef, changeMenu, visibleMenu, playPauseSong, showMenu} = props;
    return (
        <IpodContainer>
            <Screen menu = {menu} visibleMenu={visibleMenu}/>
        <Controller wheelRef={wheelRef} 
                    changeMenu={changeMenu} 
                    playPauseSong={playPauseSong}
                    showMenu={showMenu}/>
        </IpodContainer>
    )
}

export default Ipod;