import { IAction, ITrack } from '../utils/interfaces';

const UPDATE = 'UPDATE';

export const update = (trackID: string, trackData: ITrack) => ({ trackID, trackData, type: UPDATE });

export interface IStoredData {
  [trackID: string]: ITrack;
}

export interface IUpdaterState {
  data: IStoredData;
  timestamp: number;
}

const defaultState: IUpdaterState = {
  data: {},
  timestamp: new Date(-8640000000000000).getTime(),
};

export default function updater(state = defaultState, action: IAction): IUpdaterState {
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
