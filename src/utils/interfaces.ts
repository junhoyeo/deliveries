export interface ICarrier {
  id: string;
  name: string;
  tel: string;
}

export interface IRecieved {
  name: string;
  time: string;
}

export interface IStatus {
  id: string;
  text: string;
  illust?: string;
}

export interface IProgress {
  description: string;
  location: { name: string; };
  status: IStatus;
  time: string;
}

export interface ITrack {
  trackID: string;
  carrior?: ICarrier;
  from?: IRecieved;
  progresses?: IProgress[];
  state: IStatus;
  to?: IRecieved;
  name?: string;
  carrierID?: string;
}

export interface IAction {
  trackID: string;
  trackData: ITrack;
  type: string;
}
