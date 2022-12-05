import { FC } from "react";
import "./login.css";

const Root: FC<{ name: string }> = ({ name }) => {
  return (
    <div className="container">
      <header>
        <h1>Welcome</h1>
        <h3>Please Enter your account</h3>
      </header>

      <main>
        <form>
          <div className="field">
            <label htmlFor="username">Username</label>
            <input id="username" name="username" placeholder="Username" />
          </div>

          <div className="field">
            <label htmlFor="password">Username</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>

          <div className="remember-me">
            <input id="check" type="checkbox" name="check" />
            <label htmlFor="check">Remember Me</label>
          </div>

          <button type="submit">Sign In</button>
        </form>
      </main>
    </div>
  );
};

export default Root;
