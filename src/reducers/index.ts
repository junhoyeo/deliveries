import { combineReducers } from 'redux';

import cataloger, { ICatalogerState } from './cataloger.reducer';
import updater, { IUpdaterState } from './updater.reducer';

export interface IReducerState {
  cataloger: ICatalogerState;
  updater: IUpdaterState;
}

const rootReducer = combineReducers({
  cataloger,
  updater,
});

export default rootReducer;
