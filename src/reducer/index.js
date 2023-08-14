import {combineReducers} from 'redux'
import addremove from './addremove'
import user from './user';
import zoomImg from './zoomimg';

const root=combineReducers({addremove,user,zoomImg});
export default root;