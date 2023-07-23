import styled from "styled-components";

const MenuContainer = styled.div`
    // background-color: #e0dcdc;
    background-color: #ffffff42;
    width: 49%;
    height: 99%;
    border-radius: 20px 0px 0px 20px;
    padding: 1%;
    color: white;
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

const Menu = (props) =>{
    const {visibleMenu} = props;
    return(
        // visibleMenu.options.length !== 0 ?
        <MenuContainer>
            <MenuHeader>{visibleMenu.title}</MenuHeader>
            {
                visibleMenu.options.map((option)=>{
                    return (
                        option.isSelected ? <MenuOption2 key={option.id}>{option.title}</MenuOption2>
                        :
                        <MenuOption1 key={option.id}>{option.title}</MenuOption1>
                    )
                })
            }
        </MenuContainer> 
        // : <UnderDevelopment>{visibleMenu.status}</UnderDevelopment>
    )
}

export default Menu;