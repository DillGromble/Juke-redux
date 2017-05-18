import React from 'react';
import Lyrics from '../components/Lyrics';
import store from '../store';


class LyricsContainer extends React.Component {

  constructor (props) {
    super(props)
    this.state = Object.assign({
      artistQuery: '',
      songQuery: ''
    }, store.getState())

    this.handleArtistInput = this.handleArtistInput.bind(this);
    this.handleSongInput = this.handleSongInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  handleArtistInput (artist) {
    this.setState({ artistQuery: artist })
  }

  handleSongInput (song) {
    this.setState({ songQuery: song })
  }

  handleSubmit () {
    console.log(this.state);
  }

  render () {
    return (
      <Lyrics
        text={this.state.text}
        setArtist={this.handleArtistInput}
        setSong={this.handleSongInput}
        artistQuery={this.state.artistQuery}
        songQuery={this.state.songQuery}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}


export default LyricsContainer;
