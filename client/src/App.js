import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Chat from './components/Chat';
import Toast from './components/Toast';
import './App.css';

// Dummy authentication and API fetch for demo
const DUMMY_USER = { username: 'admin', password: 'password' };

function App() {
  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState('');
  const [toast, setToast] = useState({ message: '', type: '' });
  const [v1Data, setV1Data] = useState('');
  const [v2Data, setV2Data] = useState('');
  const [loadingV1, setLoadingV1] = useState(false);
  const [loadingV2, setLoadingV2] = useState(false);
  const [socket, setSocket] = useState(null);

  // Simulate login
  const handleLogin = (username, password) => {
    if (username === DUMMY_USER.username && password === DUMMY_USER.password) {
      setUser({ username });
      setLoginError('');
      setToast({ message: 'Login successful!', type: 'success' });
    } else {
      setLoginError('Invalid username or password');
      setToast({ message: 'Login failed', type: 'error' });
    }
  };

  // Fetch API v1 and v2 data
  React.useEffect(() => {
    if (!user) return;
    setLoadingV1(true);
    setLoadingV2(true);
    fetch('/api/v1/')
      .then(res => res.text())
      .then(data => setV1Data(data))
      .catch(() => setToast({ message: 'Failed to fetch API v1', type: 'error' }))
      .finally(() => setLoadingV1(false));
    fetch('/api/v2/')
      .then(res => res.text())
      .then(data => setV2Data(data))
      .catch(() => setToast({ message: 'Failed to fetch API v2', type: 'error' }))
      .finally(() => setLoadingV2(false));
  }, [user]);

  // WebSocket connection for chat
  React.useEffect(() => {
    if (!user) return;
    const ws = new window.WebSocket('ws://localhost:4000');
    ws.onopen = () => setToast({ message: 'Connected to chat', type: 'success' });
    ws.onclose = () => setToast({ message: 'Disconnected from chat', type: 'error' });
    setSocket(ws);
    return () => ws.close();
  }, [user]);

  return (
    <div className="App">
      <Toast message={toast.message} type={toast.type} onClose={() => setToast({ message: '', type: '' })} />
      {!user ? (
        <Login onLogin={handleLogin} error={loginError} />
      ) : (
        <>
          <Dashboard v1Data={v1Data} v2Data={v2Data} loadingV1={loadingV1} loadingV2={loadingV2} />
          <Chat socket={socket} username={user.username} />
        </>
      )}
    </div>
  );
}

export default App;
