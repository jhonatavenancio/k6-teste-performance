import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 20,           // 20 usuários virtuais
  duration: '30s',   // durante 30 segundos
  thresholds: {
    http_req_duration: ['p(95)<1000'], // 95% das reqs < 1s
    http_req_failed: ['rate<0.01'],    // menos de 1% falhas
  },
};

export default function () {
  const res = http.get('https://rickandmortyapi.com/api/character');
  check(res, {
    'status 200': (r) => r.status === 200,
  });
  sleep(1);
}
