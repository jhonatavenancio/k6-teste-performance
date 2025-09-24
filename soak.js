import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 10,
  duration: '5m',
};

export default function () {
  http.get('https://rickandmortyapi.com/api/character/1');
  sleep(2);
}
