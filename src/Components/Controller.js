import styled from "styled-components";

const ControllerContainer = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`
const Wheel = styled.div`
    width: 250px;
    height: 250px;
    background-color: #ffffff80;
    border-radius: 50%;
    display: flex;
    justify-content:center;
    align-items: center;
    position: relative;
`
const CenterButton = styled.div`
    width: 100px;
    height: 100px;
    background-color: #3d3b3ba8;
    border-radius: 50%;
    position: absolute;
    left: 36%;
`

const PreviousButton = styled.img`
    width: 40px;
    height: 40px;
    position: absolute;
    left: 20px;
`
const NextButton = styled.img`
    width: 40px;
    height: 40px;
    position: absolute;
    left: 190px;
`

const PlayPauseButton = styled.img`
    width: 50px;
    height: 50px;
    position: absolute;
    left: 100px;
    top: 190px;   
`

const MenuOption = styled.span`
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.3rem;
    position: absolute;
    left: 92px;
    top: 20px;    
`

const Controller = (props)=>{
    const { wheelRef, 
            changeMenu, 
            playPauseSong, 
            showMenu,
            nextSong, 
            previousSong } = props;
    return(
        <ControllerContainer draggable="false">
            <Wheel ref={wheelRef} draggable="false">
                <PreviousButton draggable="false" 
                                src="https://cdn-icons-png.flaticon.com/128/10054/10054759.png" 
                                placeholder="Previous Song" 
                                role="img"
                                onClick={(e)=>{
                                    e.stopPropagation();
                                    previousSong()
                                }}/>

                <MenuOption draggable="false"  onClick={(e)=>{
                    e.stopPropagation();
                    showMenu();
                }}>Menu</MenuOption>

                <NextButton draggable="false" 
                            src="https://cdn-icons-png.flaticon.com/128/10054/10054695.png" 
                            placeholder="Next Song" 
                            role="img"
                            onClick={(e)=>{
                                e.stopPropagation();
                                nextSong()
                            }}/>

                <PlayPauseButton onClick={(e)=>{
                    e.stopPropagation();
                    playPauseSong();
                }} draggable="false" src="https://cdn-icons-png.flaticon.com/128/8191/8191650.png" placeholder="Pause Play button" role="img" />

            </Wheel>
            <CenterButton onClick={(e)=>{ 
                                            e.stopPropagation();
                                            changeMenu();
                                        }
                                    } draggable="false"/>
        </ControllerContainer>
    )
}

export default Controller;