import "../css/register.css";

function Register() {
  return (
    <>
      <section className="register-section">
        <div className="form-box">
          <div className="form-value">
            <form>
              <h2 className="register-title">Register Your New Account</h2>
              <div className="inputbox">
                <label htmlFor="name" className="label">
                  Name
                </label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="inputbox">
                <label htmlFor="tgl" className="label">
                  Birth Date
                </label>
                <input type="date" id="date" name="date" placeholder="Birth Date" />
              </div>
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
              <div className="age">
                <label>
                  <input type="checkbox" />
                  Are you over 18 years old?
                </label>
              </div>
            </form>
            <button className="register-btn">Create Account</button>
            <div className="register">
              <p>
                Already have an account? <a href="#">Log in</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
