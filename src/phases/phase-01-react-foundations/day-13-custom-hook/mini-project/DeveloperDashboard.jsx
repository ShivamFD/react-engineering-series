import useCounter from "../hooks/useCounter";
import useToggle from "../hooks/useToggle";

function DeveloperDashboard() {
  const {
    count,
    increment,
    decrement,
    reset,
  } = useCounter(0);

  const {
    isOn,
    toggle,
  } = useToggle(false);

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "25px",
        borderRadius: "12px",
        background: isOn ? "#1f2937" : "#f5f5f5",
        color: isOn ? "white" : "black",
        transition: "0.3s",
      }}
    >
      <h1>👨‍💻 Developer Dashboard</h1>

      <hr />

      <h2>Completed Tasks</h2>

      <h1>{count}</h1>

      <button onClick={increment}>
        ➕ Complete Task
      </button>

      <button
        onClick={decrement}
        style={{ marginLeft: "10px" }}
      >
        ➖ Undo
      </button>

      <button
        onClick={reset}
        style={{ marginLeft: "10px" }}
      >
        🔄 Reset
      </button>

      <hr
        style={{
          marginTop: "25px",
          marginBottom: "25px",
        }}
      />

      <h2>
        Theme :
        {isOn ? " 🌙 Dark" : " ☀️ Light"}
      </h2>

      <button onClick={toggle}>
        Toggle Theme
      </button>
    </div>
  );
}

export default DeveloperDashboard;