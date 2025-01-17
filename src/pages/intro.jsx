import React, { useState } from "react";

const Intro = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleForm = () => setIsRegistering(!isRegistering);

  return (
    <div className="intro-container">
      <div className="intro-box">
        <h1 className="app-title">Welcome to myFi</h1>
        <p className="app-description">Track your finances with ease and security.</p>
        {isRegistering ? (
          <div className="form-container">
            <h2>Register</h2>
            <form>
              <input type="text" placeholder="Full Name" className="form-input" />
              <input type="email" placeholder="Email" className="form-input" />
              <input type="password" placeholder="Password" className="form-input" />
              <button type="submit" className="btn-primary">Sign Up</button>
            </form>
            <p>
              Already have an account?{" "}
              <span className="link-text" onClick={toggleForm}>Log In</span>
            </p>
          </div>
        ) : (
          <div className="form-container">
            <h2>Login</h2>
            <form>
              <input type="email" placeholder="Email" className="form-input" />
              <input type="password" placeholder="Password" className="form-input" />
              <button type="submit" className="btn-primary">Log In</button>
            </form>
            <p>
              Don't have an account?{" "}
              <span className="link-text" onClick={toggleForm}>Sign Up</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Intro;
