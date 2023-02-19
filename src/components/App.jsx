import { useState } from "react";
import "../styles/App.css";
import LinkList from "./LinkList.jsx";
import CreateLink from "./CreateLink.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/*<LinkList />*/}
      <CreateLink />
    </div>
  );
}

export default App;
