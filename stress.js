import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 10 }, // sobe até 10 VUs
    { duration: '30s', target: 50 }, // sobe até 50 VUs
    { duration: '30s', target: 100 }, // até 100 VUs
    { duration: '20s', target: 0 },  // encerra
  ],
};

export default function () {
  http.get('https://rickandmortyapi.com/api/episode');
  sleep(1);
}
