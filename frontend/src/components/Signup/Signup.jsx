import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Signup.module.css";
import { loginSuccess } from "../../redux/authSlice";
import Logo from "../../assets/Login/Logo.png";
import { NavLink } from "react-router";
const Signup = () => {
  
  const dispatch = useDispatch();
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    try {
      await axios.post("http://localhost:5000/api/auth/register", { email, password });
      setSuccess("Signup successful.");
      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
        // console.log();
        
      setError(err.response.data.message);
    }
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.header}>
            <img src={Logo} alt="Logo" />
            <h1>TheBookFactory</h1>
          </div>
          <div className={styles.loginContainer}>
            <div className={styles.loginHeader}>
              <h2>Join Us</h2>
              <h4>Please enter your details</h4>
            </div>
            {error && <p className={styles.error}>{error}</p>}
            {success && <p className={styles.success}>{success}</p>}
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label>Email address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className={styles.loginButton}>
                Sign Up
              </button>
            </form>
            <div className={styles.loginFooter}>
              <h5>
                Already Have An Account?{" "}
                <span>
                  <NavLink to="/">Login</NavLink>
                </span>
              </h5>
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}></div>
      </div>
    </>
  );
};

export default Signup;
