const ADD_TRACK = 'ADD_TRACK';
const DEL_TRACK = 'DEL_TRACK';

export const addition = trackData => ({ trackData, type: ADD_TRACK });
export const deletion = trackID => ({ trackID, type: DEL_TRACK });

const defaultState = {
  tracks: [],
};

export default function cataloger(state = defaultState, action) {
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
        tracks: state.tracks.filter(track => track.trackID !== trackID),
      };
    }
    default:
      return state;
  }
}
