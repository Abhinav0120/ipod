import './App.css';
import React from "react";
import Ipod from "./Components/Ipod";
import ZingTouch from 'zingtouch';
import songsList from './assets/data/songsList';
import thumbnails from './assets/thumbnails/thumbnails';

class App extends React.Component {
  constructor(){
      super();
      this.state ={
        menu :{
          title: "Menu",
          options:[
            {
              id: 1,
              title: "Cover Flow",
              options: [],
              // isActive:false,
              isSelected: true,
              isVisible: false,
              imgsource: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWMlMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
              status: "This Feature is under development!",
            },
            {
              id: 2,
              title: "Music",
              options: [
                {
                  id: 1,
                  title:"All Songs",
                  options: songsList,
                  isSelected: true,
                  isVisible: false,
                  status: "This Feature is under Development..!",

                },
                {
                  id: 2,
                  title:"Artist",
                  options: [
                    {
                      type:"artist",
                      id: 1,
                      title:"JustinBieber",
                      thumbnail: thumbnails.artist1,
                      isSelected: true,
                      isVisible: false,
                    },
                    {
                      type:"artist",
                      id: 2,
                      title:"Billie Eilish",
                      thumbnail: thumbnails.artist2,
                      isSelected: false,
                      isVisible: false,
                    },
                    {
                      type:"artist",
                      id: 1,
                      title:"Ed Sheeran",
                      thumbnail: thumbnails.artist3,
                      isSelected: false,
                      isVisible: false,
                    },
                  ],
                  isSelected: false,
                  isVisible: false,
                  imgsource: "",
                  status: "This Feature is under Development..!",
                },
                {
                  id: 3,
                  title: "Albums",
                  options: [],
                  isSelected: false,
                  isVisible: false,
                  imgsource: "https://images.unsplash.com/photo-1609271368026-c91c7886c92e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
                  status: "This Feature is under Development..!",
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
              isVisible: false,
              imgsource: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?cs=srgb&dl=pexels-lucie-liz-3165335.jpg&fm=jpg",
              status: "This Feature is under Development..!",
            },
            {
              id: 4,
              title: "Setting",
              options: [],
              // isActive:false,
              isSelected:false,
              isVisible: false,
              imgsource:"https://icon-library.com/images/settings-icon-ios/settings-icon-ios-8.jpg",
              status: "This Feature is under Development..!",
            }
          ],

          isVisible: false,
        },
        activeMenuItem: 0,
        menuNo: 0,
        visibleMenu:null,
        menuHistory: [],
        isPlaying: false,
        currentSong:null,
      }
      this.wheelRef = React.createRef();
  }


  changeMenu = () =>{
    const {menu, visibleMenu, menuHistory, currentSong, isPlaying} = this.state;
    if(menuHistory.length === 0){
      this.setState({visibleMenu: menu,menuHistory:[...menuHistory, menu]})
    }else if(visibleMenu.options!=null && visibleMenu.options.length !== 0){
      const newVisibleMenuArray = visibleMenu.options.filter((options, index) => index === this.state.activeMenuItem);
      const newVisibleMenu = newVisibleMenuArray[0];
      console.log(newVisibleMenu);
      this.setState({visibleMenu:newVisibleMenu, menuHistory: [...menuHistory, newVisibleMenu], activeMenuItem:0});
      console.log(this.state.activeMenuItem);
      if(newVisibleMenu.song!=null){
        newVisibleMenu.song.play();
        this.setState({currentSong: newVisibleMenu.song, isPlaying: true});
      };
    }
  }

  showMenu = () =>{
    const {menu, menuHistory, currentSong, isPlaying } = this.state;

    if(menuHistory.length === 0){
      this.setState({visibleMenu: menu,menuHistory:[...menuHistory, menu]})
    }else if (menuHistory.length >= 1) {
      
      menuHistory.pop(); // Remove the current menu from the history
  
      // Get the previous menu from the history
      const prevMenu = menuHistory[menuHistory.length - 1];

      if(isPlaying && currentSong !== null){
        currentSong.pause();

      }
  
      // Update the state with the new activeMenuItem and visibleMenu
      this.setState({
        activeMenuItem: 0, // Reset to the first menu item when going back to a submenu
        visibleMenu: prevMenu,
        menuHistory: [...menuHistory], // Update the menu history (without mutating the original array)
        isPlaying: false,
      });
    }

  }

  playPauseSong = () =>{
    const {visibleMenu, isPlaying, currentSong} = this.state;
    if(visibleMenu!= null){
      if(visibleMenu.type!=null && visibleMenu.type == "song"){
        if(isPlaying && currentSong!=null){
          currentSong.pause();
          this.setState({isPlaying:false, currentSong:null});
        }else{
          console.log(visibleMenu.song);
          this.setState({currentSong: visibleMenu.song, isPlaying:true});
          visibleMenu.song.play();
          console.log(currentSong);
          // currentSong.play();
        }
      }
     }
  }

  nextSong = () => {
    const { visibleMenu, isPlaying, currentSong } = this.state;
    if (visibleMenu != null) {
      if (visibleMenu.type != null && visibleMenu.type === "song") {
        if (isPlaying && currentSong != null) {
          currentSong.pause();
        }
  
        const nextId = visibleMenu.id + 1;
        const nextSongItem = songsList.find((songItem) => songItem.id === nextId);
  
        if (nextSongItem) {
          nextSongItem.song.play();
          this.setState({ visibleMenu: nextSongItem, isPlaying: true, currentSong: nextSongItem.song });
        } else {
          // If nextId is not found, it means the current song is the last one.
          // So, play the first song in the songsList array.
          const firstSong = songsList[0];
          firstSong.song.play();
          this.setState({ visibleMenu: firstSong, isPlaying: true, currentSong: firstSong.song });
        }
      }
    }
  };


  previousSong = () => {
    const { visibleMenu, isPlaying, currentSong } = this.state;
  
    if (visibleMenu != null) {
      if (visibleMenu.type != null && visibleMenu.type === "song") {
        if (isPlaying && currentSong != null) {
          currentSong.pause();
        }
        const nextId = visibleMenu.id - 1;
        const nextSongItem = songsList.find((songItem) => songItem.id === nextId);
  
        if (nextSongItem) {
          nextSongItem.song.play();
          this.setState({ visibleMenu: nextSongItem, isPlaying: true, currentSong: nextSongItem.song });
        } else {
          // If nextId is not found, it means the current song is the last one.
          // So, play the first song in the songsList array.
          const firstSong = songsList[songsList.length-1];
          firstSong.song.play();
          this.setState({ visibleMenu: firstSong, isPlaying: true, currentSong: firstSong.song });
        }
      }
    }
  };

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
    if(this.state.visibleMenu==null){
      return;
    }
    const options = this.state.visibleMenu.options;
    if(options == null || options.length === 0){
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
    this.setState((prevState) => ({
      visibleMenu: {
        ...prevState.visibleMenu,
        options: updatedoptions,
      },
    }));
  }

  handleRotateCounterclockwise() {
    const { activeMenuItem } = this.state;
    if(this.state.visibleMenu==null){
      return;
    }
    const options = this.state.visibleMenu.options;
    if(options == null || options.length === 0){
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
    this.setState((prevState) => ({
      visibleMenu: {
        ...prevState.visibleMenu,
        options: updatedoptions,
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
    const {menu, activeMenuItem, visibleMenu} = this.state;
    return (
      <div className="App">
        <Ipod menu={menu} 
              activeMenuItem={activeMenuItem} 
              wheelRef={this.wheelRef} 
              changeMenu={this.changeMenu}
              visibleMenu = {visibleMenu}
              playPauseSong = {this.playPauseSong}
              showMenu={this.showMenu}
              nextSong={this.nextSong}
              previousSong={this.previousSong}/>
      </div>
    );
  }
  
}

export default App;
