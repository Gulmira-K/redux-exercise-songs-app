import { combineReducers } from "redux"

const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duraton: '2:20' },
    { title: 'All star', duration: '3:00' },
    { title: 'I want it that way', duration: '3:10' }
  ]
}


const selectedSongReducer = ( selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }

  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})
