import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import linkedinLogo from "./assets/linkedin.png";
import emailLogo from "./assets/envelope-solid.svg";
import "./App.css";
import Nav from "./components/nav/nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <h1>Carlin Preun</h1>
        <Nav />
        <ul className="contacts">
          <li>
            <a href="https://www.linkedin.com/in/carlin-preun" target="_blank">
              <img src={linkedinLogo} alt="Linkedin" width={25} />
            </a>
          </li>
          <li>
            <a href="mailto:carlinpreun@hotmail.com">
              <img src={emailLogo} alt="Email" />
            </a>
          </li>
        </ul>
      </main>

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
