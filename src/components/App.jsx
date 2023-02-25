import { useState } from "react";
import "../styles/App.css";
import LinkList from "./LinkList.jsx";
import CreateLink from "./CreateLink.jsx";
import Header from "./Header.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login.jsx";
import Search from "./Search.jsx";
import SignUp from "./SignUp.jsx";
import SignIn from "./SignIn.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route path="/" element={<Navigate replace to="/new/1" />} />
          <Route path="/create" element={<CreateLink />} />
          <Route path="/login" element={<Login />} />
          <Route path={"/search"} element={<Search />} />
          <Route path="/top" element={<LinkList />} />
          <Route path="/new/:page" element={<LinkList />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
