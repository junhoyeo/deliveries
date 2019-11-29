import { connect } from 'react-redux';
import CardItem from './CardItem';

import { deletion } from '../reducers/cataloger.reducer';
import { update } from '../reducers/updater.reducer';

const mapStateToProps = state => ({
  storedData: state.updater.data,
  timestamp: state.updater.timestamp,
});

const mapDispatchToProps = dispatch => ({
  deleteTrack: trackID => dispatch(deletion(trackID)),
  updateTimestamp: (trackID, trackData) => dispatch(update(trackID, trackData)),
});

const CardContainer = connect(mapStateToProps, mapDispatchToProps)(CardItem);

export default CardContainer;
