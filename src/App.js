import './App.css';
import React from "react";
import Ipod from "./Components/Ipod";
import ZingTouch from 'zingtouch';


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
              isSelected: true,
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
              isSelected: false,
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
        activeMenuItem: 0,
      }

      this.wheelRef = React.createRef();

  }

  componentDidMount() {
    this.setupRotateGesture();
  }

  componentWillUnmount() {
    this.cleanupRotateGesture();
  }

  setupRotateGesture() {
    const wheelElement = this.wheelRef.current;
    const zingTouchRegion = new ZingTouch.Region(wheelElement);
    const rotateGesture = new ZingTouch.Rotate();

    let prevRotation = 0;
    let currentRotation = 0;

    zingTouchRegion.bind(wheelElement, rotateGesture, (event) => {
      currentRotation = event.detail.distanceFromOrigin;

      const rotationThreshold = 50; // Adjust this threshold as needed

      if (Math.abs(currentRotation - prevRotation) >= rotationThreshold) {
        if (currentRotation > prevRotation) {
          // Clockwise rotation
          this.handleRotateClockwise();
        } else {
          // Counterclockwise rotation
          this.handleRotateCounterclockwise();
        }

        // Update prevRotation for the next rotation event
        prevRotation = currentRotation;
      }
    });
  }

  handleRotateClockwise() {
    const { activeMenuItem } = this.state;
    const { menuOptions } = this.state.menu;

    // Calculate the next active menu item index (clockwise)
    let nextActiveItem = (activeMenuItem + 1) % menuOptions.length;

    this.setState({ activeMenuItem: nextActiveItem });

    // Update isSelected for the menuOptions
    const updatedMenuOptions = menuOptions.map((option, index) => ({
      ...option,
      isSelected: index === nextActiveItem,
    }));

    // Update the menu state with the new menuOptions
    this.setState((prevState) => ({
      menu: {
        ...prevState.menu,
        menuOptions: updatedMenuOptions,
      },
    }));
  }

  handleRotateCounterclockwise() {
    const { activeMenuItem } = this.state;
    const { menuOptions } = this.state.menu;

    // Calculate the next active menu item index (counterclockwise)
    let nextActiveItem = (activeMenuItem - 1 + menuOptions.length) % menuOptions.length;

    this.setState({ activeMenuItem: nextActiveItem });

    // Update isSelected for the menuOptions
    const updatedMenuOptions = menuOptions.map((option, index) => ({
      ...option,
      isSelected: index === nextActiveItem,
    }));

    // Update the menu state with the new menuOptions
    this.setState((prevState) => ({
      menu: {
        ...prevState.menu,
        menuOptions: updatedMenuOptions,
      },
    }));
  }

  cleanupRotateGesture() {
    const wheelElement = this.wheelRef.current;
    const zingTouchRegion = new ZingTouch.Region(wheelElement);
    const rotateGesture = new ZingTouch.Rotate();

    zingTouchRegion.unbind(wheelElement, rotateGesture);
  }

  render(){
    const {menu, activeMenuItem} = this.state;
    console.log(activeMenuItem);
    return (
      <div className="App">
        <Ipod menu={menu} activeMenuItem={activeMenuItem} wheelRef={this.wheelRef}/>
      </div>
    );
  }
  
}

export default App;
