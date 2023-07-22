import styled from "styled-components";
import Menu from "./Menu";
import SongDisplay from "./SongDisplay";

const ScreenContainer = styled.div`
    background-color: grey;
    height:47%;
    margin: 5px;
    border-radius: 20px;
    overflow: hidden;
`
const UnderDevelopment = styled.div`
    background-color: white;
    width: 100%;
    height: 99%;
    border-radius: 20px 0px 0px 20px;
    padding: 1%;
    font-size: 1.5rem;
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
                        : <UnderDevelopment>{visibleMenu.status}</UnderDevelopment> 
                    :visibleMenu.type!=null?
                        visibleMenu.type=="song"?<SongDisplay visibleMenu={visibleMenu}/>
                    :null
                :null
            :null
        }
        </ScreenContainer>
    );
}

export default Screen;