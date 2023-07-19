import './App.css';
import React from "react";
import Ipod from "./Components/Ipod";

class App extends React.Component {
  constructor(){
      super();

      this.state ={
        menu :{
          menuOptions:[
            {
              id: 1,
              title: "Cover Flow",
              options: [],
              // isActive:false,
              isSelected: false,
              isVisible: false
            },
            {
              id: 2,
              title: "Music",
              options: [
                {
                  id: 1,
                  title:"All Songs",
                  options: [],
                  isSelected: false,
                  isVisible: false,
                },
                {
                  id: 2,
                  title:"Artist",
                  options: [],
                  isSelected: false,
                  isVisible: false,
                },
                {
                  id: 3,
                  title: "Albums",
                  options: [],
                  isSelected: false,
                  isVisible: false,
                }
              ],
              // isActive:false,
              isSelected: true,
              isVisible: false
            },
            {
              id: 3,
              title: "Games",
              options: [],
              // isActive:false,
              isSelected:false,
              isVisible: false
            },
            {
              id: 4,
              title: "Setting",
              options: [],
              // isActive:false,
              isSelected:false,
              isVisible: false
            }
          ],

          isVisible: true,
        },
        
      }
  }

  render(){
    const {menu} = this.state;
    return (
      <div className="App">
        <Ipod menu={menu}/>
      </div>
    );
  }
  
}

export default App;
