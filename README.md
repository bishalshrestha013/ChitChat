# ChitChat

A simple real-time chat application with a Node.js backend and a React + Vite frontend.

## Features
- Real-time messaging using WebSockets
- Modern React frontend (Vite)
- Node.js backend server

## Project Structure
```
backend/
  server.js         # Node.js server
  package.json      # Backend dependencies
frontend/
  src/              # React source code
    App.jsx         # Main React component
    ws.js           # WebSocket client
    ...
  public/           # Static assets
  index.html        # Main HTML file
  package.json      # Frontend dependencies
  vite.config.js    # Vite configuration
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- pnpm (or npm/yarn)

### Install Dependencies

#### Backend
```bash
cd backend
pnpm install
```

#### Frontend
```bash
cd frontend
pnpm install
```

### Running the App

#### Start Backend Server
```bash
cd backend
node server.js
```

#### Start Frontend (Vite Dev Server)
```bash
cd frontend
pnpm run dev
```

Open your browser at [http://localhost:5173](http://localhost:5173) to use the chat app.

## Customization
- Update WebSocket server URL in `src/ws.js` if needed.
- Modify UI in `src/App.jsx` and styles in `src/app.css`.

## License
MIT
