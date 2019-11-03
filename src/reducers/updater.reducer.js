const UPDATE = 'UPDATE';

export const update = (trackID, trackData) => ({ type: UPDATE, trackID, trackData });

const defaultState = {
  timestamp: new Date(-8640000000000000).getTime(),
  data: {},
};

export default function updater(state = defaultState, action) {
  switch (action.type) {
    case UPDATE: {
      const { trackID, trackData } = action;
      const { data: prevData } = state;
      return {
        ...state,
        timestamp: new Date().getTime(),
        data: {
          ...prevData,
          [trackID]: trackData,
        },
      };
    }
    default:
      return state;
  }
}
