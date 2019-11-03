import axios from 'axios';

const client = axios.create({
  baseURL: 'https://apis.tracker.delivery/',
});

export default function getTrack(carrierID, trackID) {
  return client.get(`/carriers/${carrierID}/tracks/${trackID}`);
}
