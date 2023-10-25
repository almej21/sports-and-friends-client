/* eslint-disable jsx-a11y/alt-text */
import ChatProvider from "context/ChatProvider.js";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ChatPage from "routes/chatpage/ChatPage";
import Fixturesplay from "routes/fixturesplay/Fixturesplay";
import Login from "routes/login/Login";
import Register from "routes/register/Register";
import Userinfo from "routes/userinfo/Userinfo";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Router>
      <ChatProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/fixturesplay" element={<Fixturesplay />} />
            <Route path="/userinfo" element={<Userinfo />} />
          </Routes>
        </div>
      </ChatProvider>
    </Router>
  );
}

export default App;
