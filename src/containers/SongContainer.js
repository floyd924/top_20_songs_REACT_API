import React, {Fragment, Component} from 'react';
import SongList from '../components/SongList.js';

class SongContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      songsArray: []
    };
  }
  componentDidMount(){
    console.log("mounted");
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      console.log("data:", data);
      this.setState({songsArray: data})
    });

    request.send();
  }

  render(){
    console.log("the songs array in SOngContainer is", this.state.songsArray);
    return(
      <Fragment>
        <h1>Itunes Top 20 of (probably bad) songs</h1>
        <SongList songsArray={this.state.songsArray}/>
        <h2>this is the eeeeeend of the page, yo</h2>
      </Fragment>

    )

  }

}

export default SongContainer;
