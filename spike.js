import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '5s', target: 100 }, // sobe instantaneamente
    { duration: '10s', target: 100 },
    { duration: '5s', target: 0 },
  ],
};

export default function () {
  http.get('https://rickandmortyapi.com/api/location');
  sleep(1);
}
