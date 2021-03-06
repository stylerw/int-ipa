import { StrictMode } from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import Manifest from "./Manifest";
import Debug from "./utils/Debug";
import smoothscroll from "smoothscroll-polyfill";

import { BrowserRouter, HashRouter } from "react-router-dom";

import "./index.css";
import { browserRouter } from "./config";

const Router = ({ children }: { children: React.ReactNode }) => {
  if (browserRouter) {
    return <BrowserRouter children={children} />;
  } else {
    return <HashRouter children={children} />;
  }
};

ReactDOM.render(
  <StrictMode>
    <Debug>
      <Manifest>
        <Router>
          <App />
        </Router>
      </Manifest>
    </Debug>
  </StrictMode>,
  document.getElementById("root")
);

smoothscroll.polyfill();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
