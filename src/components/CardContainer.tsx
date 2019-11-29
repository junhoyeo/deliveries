import { connect } from 'react-redux';
import CardItem from './CardItem';

import { IReducerState } from '../reducers';
import { deletion } from '../reducers/cataloger.reducer';
import { update } from '../reducers/updater.reducer';
import { ITrack } from '../utils/interfaces';

const mapStateToProps = (state: IReducerState) => ({
  storedData: state.updater.data,
  timestamp: state.updater.timestamp,
});

const mapDispatchToProps: any = (dispatch: any) => ({
  deleteTrack: (trackID: string) => dispatch(deletion(trackID)),
  updateTimestamp: (trackID: string, trackData: ITrack) => dispatch(update(trackID, trackData)),
});

const CardContainer = connect(mapStateToProps, mapDispatchToProps)(CardItem);

export default CardContainer;
