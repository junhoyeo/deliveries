import axios from 'axios';

const client = axios.create({
  baseURL: 'https://apis.tracker.delivery/',
});

export default function getTrack(carrierID: string, trackID: string) {
  return client.get(`/carriers/${carrierID}/tracks/${trackID}`);
}
