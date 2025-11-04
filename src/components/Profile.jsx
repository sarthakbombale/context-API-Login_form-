import React, { useContext } from "react";
import { motion } from "framer-motion";
import UserContext from "../context/UserContext"; 

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        textAlign: "center",
        color: "white",
        fontWeight: "600",
        fontSize: "1.2rem",
      }}
    >
      {!user ? (
        <p className="text-light">Please login to continue 🚀</p>
      ) : (
        <p>
          Welcome, <span style={{ color: "#FFD700" }}>{user.username}</span> 👋
        </p>
      )}
    </motion.div>
  );
};

export default Profile;
