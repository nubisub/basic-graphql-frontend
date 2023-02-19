import { useState } from "react";
import "../styles/App.css";
import LinkList from "./LinkList.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <LinkList />
    </div>
  );
}

export default App;
