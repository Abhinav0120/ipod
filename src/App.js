import './App.css';
import React from "react";
import Ipod from "./Components/Ipod";
import ZingTouch from 'zingtouch';


class App extends React.Component {
  constructor(){
      super();

      this.state ={
        menu :{
          options:[
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
                  isSelected: true,
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

          isVisible: false,
        },
        activeMenuItem: 0,
        menuNo: 0,
        visibleOptions: [],
        visibleMenu: null,
      }

      this.wheelRef = React.createRef();

  }

  changeMenu = () =>{
    const {menu, visibleOptions } = this.state;
    const { options } = menu;
    
    if(visibleOptions.length === 0){
      this.setState({visibleOptions:options, menuNo:this.state.menuNo+1});
    }else{
      const selectedOptions = visibleOptions.filter((options, index) => index === this.state.activeMenuItem);
      console.log(selectedOptions);
      const newVisibleOptions = selectedOptions[0].options;
      
      this.setState({visibleOptions:newVisibleOptions, menuNo:this.state.menuNo+1});
    }
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
    const options = this.state.visibleOptions;
    if(options.length === 0){
      return;
    }

    // Calculate the next active menu item index (clockwise)
    let nextActiveItem = (activeMenuItem + 1) % options.length;

    this.setState({ activeMenuItem: nextActiveItem });

    // Update isSelected for the options
    const updatedoptions = options.map((option, index) => ({
      ...option,
      isSelected: index === nextActiveItem,
    }));

    // Update the menu state with the new options
    // this.setState((prevState) => ({
    //   menu: {
    //     ...prevState.menu,
    //     options: updatedoptions,
    //   },
    //   visibleOptions : updatedoptions,
    // }));

    this.setState({visibleOptions:updatedoptions});
  }

  handleRotateCounterclockwise() {
    const { activeMenuItem } = this.state;
    const options = this.state.visibleOptions;
    if(options.length === 0){
      return;
    }
    // Calculate the next active menu item index (counterclockwise)
    let nextActiveItem = (activeMenuItem - 1 + options.length) % options.length;

    this.setState({ activeMenuItem: nextActiveItem });

    // Update isSelected for the options
    const updatedoptions = options.map((option, index) => ({
      ...option,
      isSelected: index === nextActiveItem,
    }));

    // Update the menu state with the new options
    // this.setState((prevState) => ({
    //   menu: {
    //     ...prevState.menu,
    //     options: updatedoptions,
    //   },
    // }));
    this.setState({visibleOptions:updatedoptions});

  }

  cleanupRotateGesture() {
    const wheelElement = this.wheelRef.current;
    const zingTouchRegion = new ZingTouch.Region(wheelElement);
    const rotateGesture = new ZingTouch.Rotate();

    zingTouchRegion.unbind(wheelElement, rotateGesture);
  }

  render(){
    const {menu, activeMenuItem, visibleOptions} = this.state;
    // console.log(activeMenuItem);
    return (
      <div className="App">
        <Ipod menu={menu} 
              activeMenuItem={activeMenuItem} 
              wheelRef={this.wheelRef} 
              changeMenu={this.changeMenu}
              visibleOptions = {visibleOptions}/>
      </div>
    );
  }
  
}

export default App;
