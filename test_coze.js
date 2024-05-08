const response = await fetch('http://localhost:3000/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer pat_BYAN3UTjLd6075hEjYiN3e2tGZxcelbETnITxESMIWJb0xQg36uW7qSnhnFEcWiA',
  },
  body: JSON.stringify({
    model: 7363127235433742344,
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: '什么是索飞安全？' },
    ],
  }),
});

const data = await response.json();
console.log(data.choices[0].message.content);
