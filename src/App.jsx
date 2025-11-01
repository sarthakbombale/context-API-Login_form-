import React from "react";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

const App = () => {
  return (
    <UserContextProvider>
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #6a11cb, #2575fc)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          padding: "2rem",
        }}
      >
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
};

export default App;

