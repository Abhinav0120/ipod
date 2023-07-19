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
    const {menu} = props;
    const {menuOptions , isVisible} = menu;
    console.log(menuOptions,isVisible);
    return(
        <ScreenContainer>
            {
                isVisible? <Menu>
                <MenuHeader>Menu</MenuHeader>
                    {menuOptions.map((options)=>{
                        return (
                            options.isSelected ? <MenuOption2 key={options.id}>{options.title}</MenuOption2>
                            :
                            <MenuOption1 key={options.id}>{options.title}</MenuOption1>
                        )
                    })}
                    {/* <MenuOptions>CoverFlow</MenuOptions>
                    <MenuOptions>Music</MenuOptions>
                    <MenuOptions>Games</MenuOptions>
                    <MenuOptions>Setting</MenuOptions> */}
                </Menu>: null
            }
        </ScreenContainer>
    );
}

export default Screen;