import { IAction, ITrack } from '../utils/interfaces';

const ADD_TRACK = 'ADD_TRACK';
const DEL_TRACK = 'DEL_TRACK';

export const addition = (trackData: ITrack) => ({ trackData, type: ADD_TRACK });
export const deletion = (trackID: string) => ({ trackID, type: DEL_TRACK });

export interface ICatalogerState {
  tracks: ITrack[];
}

const defaultState: ICatalogerState = {
  tracks: [],
};

export default function cataloger(state = defaultState, action: IAction): ICatalogerState {
  switch (action.type) {
    case ADD_TRACK: {
      const { trackData } = action;
      return {
        ...state,
        tracks: [...state.tracks, trackData],
      };
    }
    case DEL_TRACK: {
      const { trackID } = action;
      return {
        ...state,
        tracks: state.tracks.filter((track: ITrack) => track.trackID !== trackID),
      };
    }
    default:
      return state;
  }
}
