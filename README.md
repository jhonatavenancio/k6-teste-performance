# 🚀 Testes de Desempenho com K6

<img width="296" height="118" alt="image" src="https://github.com/user-attachments/assets/db673393-52e4-4677-82db-9789ee2ffa34" /> 




Projeto utilizando **[K6](https://k6.io/)** para realizar testes de desempenho.  
Esse teste utiliza API pública do **Rick and Morty API** ([https://rickandmortyapi.com](https://rickandmortyapi.com)), para validar desempenho.

---

## 🎯 Objetivos
- Validar **testes de carga, estresse, pico e sustentação**.  
- Criar cenários com `k6` e validar thresholds (tempo de resposta, taxa de erros).  
- Gerar relatórios (JSON, CSV e HTML) para análise. 

---

## 📂 Estrutura do Projeto
```

k6-rick/
├── src/
│   ├── smoke.js       # Smoke test (validação inicial do ambiente)
│   ├── load.js        # Teste de carga (usuários constantes)
│   ├── stress.js      # Teste de estresse (crescimento gradual)
│   ├── spike.js       # Teste de pico (carga súbita)
│   └── soak.js        # Teste de sustentação (longa duração)
├── README.md          # Documentação do projeto
└── Resultado.csv      # Resultado de exemplo


````

---


## ▶️ Como Executar os Testes

<img width="939" height="306" alt="image" src="https://github.com/user-attachments/assets/2931797c-a929-43fb-a5c2-c3d86d6f27e2" />


### Smoke test

```bash
k6 run smoke.js
```

### Carga

```bash
k6 run load.js
```

### Estresse

```bash
k6 run stress.js
```

### Pico

```bash
k6 run spike.js
```

### Sustentação

```bash
k6 run soak.js
```

---

## 📊 Relatórios e Outputs

Gerar saída em JSON:

```bash
k6 run --out json=resultado.json load.js
```

Gerar saída em CSV:

```bash
k6 run --out csv=resultado.csv load.js
```


