import React, { useEffect } from "react";
import "./App.css";
import Footer from "./Footer";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";

function App() {
  useEffect(() => {
    {
      window.scrollTo(0, document.body.scrollHeight);
    }
  }, []);
  return (
    <div className="app">
      <div className="app_body">
        <div className="app_body_left">
          <Leftbar />
        </div>
        <div className="app_body_right">
          <Rightbar />
        </div>
      </div>
      <div className="app_footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
