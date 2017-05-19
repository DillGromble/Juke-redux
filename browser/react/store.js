import { createStore, applyMiddleware, combineReducers } from 'redux';
import lyricsReducer from './reducers/lyrics-reducer';
import playerReducer from './reducers/player-reducer';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';



const middleWare = applyMiddleware(loggerMiddleware, thunkMiddleware);

const store = createStore(combineReducers({
  lyrics: lyricsReducer,
  player: playerReducer
  }), middleWare);


export default store;
