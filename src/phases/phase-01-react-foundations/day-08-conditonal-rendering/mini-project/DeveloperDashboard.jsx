import React, { useState } from 'react';

function DeveloperDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [isAdmin, setIsAdmin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoggedIn(true);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="dashboard">
      <h1>Developer Dashboard</h1>

      {isLoading && <p className="status" style={{background: "#eab308"}}>Loading...</p>}

      {!isLoggedIn ? (
        <div>
          <p>Please log in to access dashboard</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div>
          <p className="status" style={{background: isOnline ? "#10b981" : "#ef4444"}}>
            {isOnline ? "🟢 Online" : "🔴 Offline"}
          </p>

          {isAdmin && <p className="status" style={{background: "#8b5cf6"}}>👑 Admin</p>}

          {notifications.length === 0 ? (
            <p>No new notifications</p>
          ) : (
            <p>You have {notifications.length} notifications</p>
          )}

          <button onClick={() => setIsOnline(!isOnline)}>
            Toggle Online Status
          </button>
        </div>
      )}
    </div>
  );
}

export default DeveloperDashboard;