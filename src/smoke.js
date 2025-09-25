import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const res = http.get('https://rickandmortyapi.com/api/character');
  check(res, {
    'status 200': (r) => r.status === 200,
    'duration < 2s': (r) => r.timings.duration < 2000,
  });
}
