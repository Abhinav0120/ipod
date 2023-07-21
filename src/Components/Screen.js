import styled from "styled-components";

const ScreenContainer = styled.div`
    background-color: grey;
    height:47%;
    margin: 5px;
    border-radius: 20px;
    overflow: hidden;
`
const Menu = styled.div`
    // background-color: #e0dcdc;
    background-color: white;
    width: 49%;
    height: 99%;
    border-radius: 20px 0px 0px 20px;
    padding: 1%;
`
const MenuHeader = styled.div`
    margin: 10px;
    font-size: 1.5rem;
    font-weight: 600;
`
// const MenuList = styled.ul`
    
// `
const MenuOption1  = styled.div`
    margin: 10px;
    font-size: 1.5rem;
    width: 80%;
    padding: 5px;
    border-radius: 5px;
`

const MenuOption2  = styled.div`
    margin: 10px;
    font-size: 1.5rem;
    width: 80%;
    background-color: dodgerblue;
    color: white;
    padding: 5px;
    border-radius: 5px;
`
const Screen = (props)=>{
    const {menu, visibleMenu} = props;
    // const {options } = visible;
    console.log(visibleMenu);
    return(
        <ScreenContainer>
        {
            visibleMenu != null? <Menu>
            <MenuHeader>Menu</MenuHeader>
                {visibleMenu.options.map((option)=>{
                    return (
                        option.isSelected ? <MenuOption2 key={option.id}>{option.title}</MenuOption2>
                        :
                        <MenuOption1 key={option.id}>{option.title}</MenuOption1>
                    )
                })}
            </Menu>: null
        }
        </ScreenContainer>
    );
}

export default Screen;