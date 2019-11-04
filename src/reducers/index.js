import { combineReducers } from 'redux';

import cataloger from './cataloger.reducer';
import updater from './updater.reducer';

const rootReducer = combineReducers({
  cataloger,
  updater,
});

export default rootReducer;
