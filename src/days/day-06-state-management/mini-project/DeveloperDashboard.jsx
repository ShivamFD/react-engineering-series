import React, { useState } from 'react';

function DeveloperDashboard() {
  const [followers, setFollowers] = useState(1240);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [username, setUsername] = useState("shivamcodes");

  return (
    <div className="dashboard-card">
      <h2>{username}</h2>
      <p>Frontend React Developer</p>

      <h3>{followers.toLocaleString()} Followers</h3>

      <div style={{ margin: "20px 0" }}>
        <button 
          onClick={() => setIsFollowing(!isFollowing)}
          style={{ margin: "8px", padding: "10px 20px" }}
        >
          {isFollowing ? "Following ✓" : "Follow"}
        </button>

        <button 
          onClick={() => setIsOnline(!isOnline)}
          style={{ margin: "8px", padding: "10px 20px" }}
        >
          {isOnline ? "🟢 Online" : "🔴 Offline"}
        </button>
      </div>

      <input 
        type="text" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Change username"
        style={{ padding: "10px", width: "70%", borderRadius: "8px", marginTop: "10px" }}
      />

      <p>Live Username: <strong>@{username}</strong></p>
    </div>
  );
}

export default DeveloperDashboard;