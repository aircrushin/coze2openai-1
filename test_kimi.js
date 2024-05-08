const response = await fetch('https://airkimi.zeabur.app/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1c2VyLWNlbnRlciIsImV4cCI6MTcyMjE0ODcyOCwiaWF0IjoxNzE0MzcyNzI4LCJqdGkiOiJjb25rMHUydG5uMHF0MzY1cjFwZyIsInR5cCI6InJlZnJlc2giLCJzdWIiOiJjbmtudW04bnNtbWg4M2xlcGszMCIsInNwYWNlX2lkIjoiY25rbnI2aHJkaWphaWxpaDJkMzAiLCJhYnN0cmFjdF91c2VyX2lkIjoiY25rbnI2aHJkaWphaWxpaDJkMmcifQ.qc7D5KsRo2L3szR9shnvzvZY1HPlc_q4WU5QxynhZFIKpiAU1DrjKNT5r5Ezzxn1CrHB8E_OG022q1mUeQZhuw',
  },
  body: JSON.stringify({
    model: 'kimi',
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: '什么是索飞安全' },
    ],
    "use_search": false,
  }),
});

const data = await response.json();
console.log(data.choices[0].message.content);