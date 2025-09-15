import { useState } from "react";
import classes from "./LoginForm.module.css";

export default function LoginForm(props) {
  const [authEmail, setAuthEmail] = useState(true);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  // const [isLoggedIn, setIsLoggedIn] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    if (!email.includes("@") || !email.includes(".")) {
      setAuthEmail(false);
      setEmail("");
      setPass("");
      return;
    }
    sessionStorage.setItem(email, pass);
    console.log(email, pass);
    props.onRender(email);
  };

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={pass}
              id="password"
              onChange={(e) => setPass(e.target.value)}
            />
            {!authEmail && <h>Enter Valid Email</h>}
          </div>
          <button onClick={submitHandler}>Login</button>
        </form>
      </section>
    </main>
  );
}
