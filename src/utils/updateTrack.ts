import getTrack from './getTrack';
import { ITrack } from './interfaces';

export default async function updateTrack(
  delivery: ITrack, updateTimestamp: (trackID: string, trackData: ITrack) => void) {

  const { carrierID, trackID } = delivery;
  const { data, status } = await getTrack(carrierID, trackID);
  updateTimestamp(trackID, data);
  return { status, data };
}
