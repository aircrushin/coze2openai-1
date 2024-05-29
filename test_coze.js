const response = await fetch('http://localhost:3000/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer pat_sodNU86RtNdePvGSuKsbA9fZLcSkZL12t5GM2tHwzJFlLEXJGrZy3BE52pEqCUwI',
  },
  body: JSON.stringify({
    model: 7356163193984974863,
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: '制定一个四川成都青羊区的道路养护方案，为期两个月' },
    ],
  }),
});

const data = await response.json();
console.log(data.choices[0].message.content);
