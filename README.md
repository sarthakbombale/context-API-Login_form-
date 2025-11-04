🌐 Live Demo
Check out the live version here:
👉 https://context-api-log.netlify.app/


🧠 Context API Login Form
This is a simple React-based login form that uses Context API to manage global user state across components. It demonstrates how to avoid prop drilling and share authentication data efficiently in a modern frontend app.
🔐 What It Does
- Provides a login form with controlled inputs
- Stores user data globally using React Context
- Displays user profile conditionally after login
- Uses Bootstrap for clean, responsive UI
- Built with Vite for fast development and optimized builds
🧠 How Context Is Used
- UserContext.js creates the context
- UserContextProvider.jsx wraps the app and provides user and setUser
- Login.jsx updates the context on login
- Profile.jsx reads from context to show user info

