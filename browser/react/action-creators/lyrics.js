import { SET_LYRICS } from '../constants.js';




export const setLyrics = text => ({
    type: SET_LYRICS,
    lyric: text
  })

