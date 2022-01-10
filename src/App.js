import "./App.css";
import { useState } from "react";

function App() {
  const [state, setState] = useState({
    text: "Change to blue",
    style: { backgroundColor: "red" },
    disabled: false,
  });
  const onClick = () => {
    state.text === "Change to blue"
      ? setState({ text: "Change to red", style: { backgroundColor: "blue" } })
      : setState({ text: "Change to blue", style: { backgroundColor: "red" } });
  };

  return (
    <div>
      <button
        onClick={() => onClick()}
        style={state.style}
        disabled={state.disabled}
      >
        {state.text}
      </button>
      <input
        type="checkbox"
        onChange={(e) => setState({ disabled: e.target.checked })}
        defaultChecked={state.disabled}
        aria-checked={state.disabled}
      />
    </div>
  );
}

export default App;
