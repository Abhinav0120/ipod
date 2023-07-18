import styled from "styled-components";

const ControllerContainer = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wheel = styled.div`
    width: 250px;
    height: 250px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content:center;
    align-items: center;
`
const CenterButton = styled.div`
    width: 100px;
    height: 100px;
    background-color: grey;
    border-radius: 50%;
`

const Controller = ()=>{
    return(
        <ControllerContainer>
            <Wheel>
                {/* Wheel */}
                <CenterButton>
                    
                </CenterButton>
            </Wheel>
        </ControllerContainer>
    )
}

export default Controller;