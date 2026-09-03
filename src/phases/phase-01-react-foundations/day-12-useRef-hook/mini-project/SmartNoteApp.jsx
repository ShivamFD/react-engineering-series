import { useRef, useState } from "react";

function SmartNotesApp() {
  const [notes, setNotes] = useState([]);

  // Input ko access karne ke liye
  const inputRef = useRef(null);

  // Submission count (re-render nahi karega)
  const submissionCount = useRef(0);

  const addNote = () => {
    const value = inputRef.current.value.trim();

    if (value === "") return;

    setNotes((prev) => [...prev, value]);

    submissionCount.current++;

    inputRef.current.value = "";

    // Auto focus
    inputRef.current.focus();
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        padding: "20px",
        border: "2px solid #ddd",
        borderRadius: "10px",
        fontFamily: "Arial",
      }}
    >
      <h2>📝 Smart Notes App</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Write your note..."
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          fontSize: "16px",
        }}
      />

      <button
        onClick={addNote}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Add Note
      </button>

      <hr />

      <h3>Notes ({notes.length})</h3>

      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>

      <hr />

      <p>
        <strong>Total Submissions:</strong>{" "}
        {submissionCount.current}
      </p>

      <button
        onClick={() =>
          alert(`Submitted ${submissionCount.current} times`)
        }
      >
        Show Submission Count
      </button>
    </div>
  );
}

export default SmartNotesApp;