const UPDATE = 'UPDATE';

export const update = (trackID, trackData) => ({ trackID, trackData, type: UPDATE });

const defaultState = {
  data: {},
  timestamp: new Date(-8640000000000000).getTime(),
};

export default function updater(state = defaultState, action) {
  switch (action.type) {
    case UPDATE: {
      const { trackID, trackData } = action;
      const { data: prevData } = state;
      return {
        ...state,
        data: {
          ...prevData,
          [trackID]: trackData,
        },
        timestamp: new Date().getTime(),
      };
    }
    default:
      return state;
  }
}
