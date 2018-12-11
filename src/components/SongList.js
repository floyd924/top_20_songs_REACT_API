import React, {Component} from 'react';
import Song from './Song.js';

// class SongList extends Component {
//   render(){
//     return(
//       <div>
//         <h3>this will be a song</h3>
//         <h3>this will be another song</h3>
//         <h3>this will be another and so forth</h3>
//       </div>
//
//     )
//   }
// }

const SongList = (props) => {
  if(props.songsArray.length === 0) return null;
  console.log("props are:", props);
  const allSongs = props.songsArray.feed.entry.map((song, index) => {
    return ({
      name: song["im:name"]
    }

    )
  })

  console.log("allsongs is", allSongs);;

  return null;
}

export default SongList;
