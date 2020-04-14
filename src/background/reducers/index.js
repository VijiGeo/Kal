import { combineReducers } from 'redux';
import { controllerReducer } from './controller';
import { dataReducer } from './data';

export default combineReducers({
  data: dataReducer,
  controller: controllerReducer
});
