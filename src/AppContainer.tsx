import { connect } from 'react-redux';
import App from './App';

import { IReducerState } from './reducers';
import { addition } from './reducers/cataloger.reducer';
import { update } from './reducers/updater.reducer';
import { ITrack } from './utils/interfaces';

const mapStateToProps = (state: IReducerState) => ({
  tracks: state.cataloger.tracks,
});

const mapDispatchToProps = (dispatch: any) => ({
  addTrack: (trackData: ITrack) => dispatch(addition(trackData)),
  updateTimestamp: (trackID: string, trackData: ITrack) => dispatch(update(trackID, trackData)),
});

// @ts-ignore
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
