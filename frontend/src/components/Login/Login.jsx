import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Login.module.css";
import { loginSuccess } from "../../redux/authSlice";
import Logo from "../../assets/Login/Logo.png";
import { NavLink} from "react-router";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
    const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );
      dispatch(loginSuccess(response.data));
      sessionStorage.setItem("token", response.data.token);
      console.log(response.data);
      
        navigate("/book");
    } catch (err) {
      setError("Invalid email or password");
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
              <h2>Welcome Back</h2>
              <h4>Please enter your details</h4>
            </div>
            {error && <p className={styles.error}>{error}</p>}
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
                Login
              </button>
            </form>
            <div className={styles.loginFooter}>
              <h5>
                Don't have an account?{" "}
                <span>
                  <NavLink to="/signup">Sign up</NavLink>
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

export default Login;
