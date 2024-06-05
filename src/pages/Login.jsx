import { Link } from "react-router-dom";
import "../css/login.css";

function Login() {
  return (
    <>
      <section className="section-login">
        <div className="form-box">
          <div className="form-value">
            <form action="#">
              <h2 className="title-login">Log in To Your Account</h2>
              <div className="inputbox">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="inputbox">
                <label htmlFor="password" className="label">
                  Password
                </label>
                <input type="password" id="password" name="password" />
                <span className="password-eye">
                  <i className="fas fa-eye"></i>
                </span>
              </div>
              <div className="forget">
                <Link to="/forget">
                  <span>Forget your password?</span>
                </Link>
              </div>
            </form>
            <Link to="/home">
              <button className="login-btn">Login</button>
            </Link>
            <div className="register">
              <p>
                Dont have an account?
                <Link to="/register">
                  <span>Sign Up</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
