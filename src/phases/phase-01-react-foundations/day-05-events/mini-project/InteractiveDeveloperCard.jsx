import React, { useState } from 'react';

function InteractiveDeveloperCard() {
  const [follow, setFollow] = useState(false);
  const [greeting, setGreeting] = useState("");
  const [name, setName] = useState("Shivam");

  const handleFollow = () => {
    setFollow(!follow);
    alert(follow ? "Unfollowed 😢" : "Followed Successfully! 🎉");
  };

  const handleInputChange = (e) => {
    setGreeting(e.target.value);
  };

  return (
    <div className="interactive-card">
      <h2>Hi, I'm {name} 👋</h2>
      <p>Interactive Developer Card</p>

      <input 
        type="text" 
        placeholder="Type something..." 
        onChange={handleInputChange}
        style={{ padding: "10px", margin: "15px 0", width: "80%", borderRadius: "8px" }}
      />

      {greeting && <p><strong>Live Greeting:</strong> {greeting}</p>}

      <button onClick={handleFollow} style={{ margin: "10px", padding: "12px 30px" }}>
        {follow ? "Following ✓" : "Follow"}
      </button>

      <button onClick={() => alert("Thank you for visiting my profile!")}>
        View Profile
      </button>
    </div>
  );
}

export default InteractiveDeveloperCard;