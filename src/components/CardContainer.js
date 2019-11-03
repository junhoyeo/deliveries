import { connect } from 'react-redux';
import CardItem from './CardItem';

import { update } from '../reducers/updater.reducer';

const mapStateToProps = (state) => ({
  timestamp: state.updater.timestamp,
  storedData: state.updater.data,
});

const mapDispatchToProps = (dispatch) => ({
  updateTimestamp: (trackID, trackData) => dispatch(update(trackID, trackData)),
});

const CardContainer = connect(mapStateToProps, mapDispatchToProps)(CardItem);

export default CardContainer;
