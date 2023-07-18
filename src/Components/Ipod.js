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
const Ipod = ()=>{
    return (
        <IpodContainer>
            <Screen/>
            <Controller/>
        </IpodContainer>
    )
}

export default Ipod;