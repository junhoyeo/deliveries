import { connect } from 'react-redux';
import App from './App';

import { addition } from './reducers/cataloger.reducer';

const mapStateToProps = (state) => ({
  tracks: state.cataloger.tracks,
});

const mapDispatchToProps = (dispatch) => ({
  addTrack: (trackData) => dispatch(addition(trackData)),
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
