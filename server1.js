const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>API v1</title>
        <style>
          body { font-family: 'Segoe UI', Arial, sans-serif; background: #f4f8fb; color: #222; margin: 0; }
          .container { max-width: 420px; margin: 10vh auto; background: #fff; border-radius: 16px; box-shadow: 0 2px 16px rgba(0,0,0,0.07); padding: 2.5rem 2rem; text-align: center; }
          h1 { color: #3a7bd5; margin-bottom: 1rem; }
          .api-version { font-size: 1.2rem; color: #555; margin-bottom: 1.5rem; }
          .badge { display: inline-block; background: linear-gradient(90deg, #a1c4fd 0%, #c2e9fb 100%); color: #fff; border-radius: 8px; padding: 0.4rem 1.2rem; font-weight: 600; font-size: 1rem; margin-bottom: 1.5rem; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Welcome to API v1</h1>
          <div class="badge">/api/v1/</div>
          <div class="api-version">Hello from Server 1 (API v1)</div>
        </div>
      </body>
    </html>
  `);
});

app.listen(3001, () => console.log('Server 1 running on port 3001'));
