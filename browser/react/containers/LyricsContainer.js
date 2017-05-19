import React from 'react';
import Lyrics from '../components/Lyrics';
import fetchLyrics from '../action-creators/lyrics';
import store from '../store';
import axios from 'axios';

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

  handleSubmit (e) {
    const artist = this.state.artistQuery;
    const song = this.state.songQuery;
    e.preventDefault();
    if (this.state.artistQuery && this.state.songQuery) {
      store.dispatch(fetchLyrics(artist, song));
    }
  }

  render () {
    return (
      <Lyrics
        text={this.state.lyrics.text}
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
