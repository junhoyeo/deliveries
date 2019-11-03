import { combineReducers } from 'redux';

import updater from './updater.reducer';

const rootReducer = combineReducers({
  updater,
});

export default rootReducer;
