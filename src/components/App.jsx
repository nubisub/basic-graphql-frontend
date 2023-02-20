import { useState } from "react";
import "../styles/App.css";
import LinkList from "./LinkList.jsx";
import CreateLink from "./CreateLink.jsx";
import Header from "./Header.jsx";
import { Route, Routes } from "react-router-dom";
import Login from "./Login.jsx";
import Search from "./Search.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route path="/" element={<LinkList />} />
          <Route path="/create" element={<CreateLink />} />
          <Route path="/login" element={<Login />} />
          <Route path={"/search"} element={<Search />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
