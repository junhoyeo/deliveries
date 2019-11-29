import getTrack from './getTrack';

export default async function updateTrack(delivery, updateTimestamp) {
  const { carrierID, trackID } = delivery;

  const { data, status } = await getTrack(carrierID, trackID);
  updateTimestamp(trackID, data);
  return { status, data };
}
