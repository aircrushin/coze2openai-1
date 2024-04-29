const response = await fetch('http://localhost:3000/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer pat_kTOtCOx1H1wGaafTFHh2nQ3OPzUY5ZHLgLUSgvE4ihQalK1lcd4zATsrWPvL8rjp',
  },
  body: JSON.stringify({
    model: 7363122563914432520,
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: 'Hello, how are you?' },
    ],
  }),
});

const data = await response.json();
console.log(data);