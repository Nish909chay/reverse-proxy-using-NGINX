# Understanding Proxy Servers 

## Introduction

Project Name: Understanding Proxy Servers – Reverse Proxy Servers
Objective: To explore the implementation and working of forward and reverse proxy servers as part of backend system design fundamentals.
## What is a Proxy Server?

A **proxy server** acts as an intermediary between a client (like your browser) and another server (like a website or API). Instead of connecting directly, your requests go through the proxy, which can add security, caching, logging, or even change the request/response.

- **Forward Proxy:** Sits between the client and the internet. It hides the client from the server, often used for privacy, filtering, or access control.
- **Reverse Proxy:** Sits in front of backend servers. It hides the servers from the client, often used for load balancing, security, or exposing multiple services under one domain.

## Project Structure

```
reverse-proxy-demo/
├── server1.js         # Express server for API v1
├── server2.js         # Express server for API v2
├── client/            # React frontend (with build/ for production)
│   ├── src/           # React source code
│   └── build/         # Production-ready static files
├── nginx.conf         # Example NGINX config (if used)
└── README.md          # This file
```

- **server1.js / server2.js:** Simple Express servers simulating backend APIs.
- **client/:** A modern React app demonstrating how a frontend interacts with proxied APIs.
- **nginx.conf:** (If present) Example configuration for using NGINX as a reverse proxy.

## How to Run the Project Locally

1. **Install dependencies:**
   ```powershell
   cd client
   npm install
   cd ..
   npm install
   ```

2. **Start the backend servers:**
   ```powershell
   node server1.js
   node server2.js
   ```

3. **Build and serve the frontend:**
   ```powershell
   cd client
   npm run build
   # Serve with NGINX or use a static server for testing:
   npm install -g serve
   serve -s build
   ```

4. **(Optional) Set up NGINX as a reverse proxy:**
   - Use the provided `nginx.conf` as a template.
   - Start NGINX and visit `http://localhost/` to see the app in action.

## What I Learned

- The difference between forward and reverse proxies, and when to use each.
- How to set up a reverse proxy using NGINX to route requests to different backend services.
- How to secure API endpoints with authentication and rate limiting at the proxy layer.
- How a frontend app can interact with multiple backend APIs through a single entry point.
- The basics of system design for scalable and secure backend architectures.

## Next Steps / Future Learning Goals

- Explore advanced proxy features: SSL termination, caching, and load balancing.
- Set up a forward proxy and experiment with client-side privacy and filtering.
- Integrate WebSocket support through the reverse proxy for real-time features.
- Learn about API gateways and how they extend the reverse proxy concept.
- Dive deeper into security best practices for production proxy deployments.

---

**Happy learning and building! If you're also on a backend journey, feel free to fork, experiment, and share your insights.**
