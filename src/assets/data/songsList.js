import thumbnails from '../thumbnails/thumbnails';
import songs from '../songs/songs';

 const songsList =  [
    {
      id: 0,
      type: "song",
      title:"Justice",
      thumbnail: thumbnails.thumbnail1,
      singer:"Justin Bieber",
      song: new Audio(songs.Justice),
      isSelected: true,
      isVisible: false,
    },
    {
      id: 1,
      type: "song",
      title:"Lovely",
      thumbnail: thumbnails.thumbnail2,
      singer:"Billie Eilish",
      song: new Audio(songs.Lovely),
      isSelected: false,
      isVisible: false,
    },
    {
      id: 2,
      type: "song",
      title:"Perfect",
      thumbnail: thumbnails.thumbnail3,
      singer:"Ed Sheeran",
      song: new Audio(songs.Perfect),
      isSelected: false,
      isVisible: false,
    }
  ];

  export default songsList;