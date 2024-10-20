import React, { useState } from "react";
import "./App.css";
const ReactRemote = React.lazy(() => import("reactRemote/App"));

function App() {
  return (
    <div className="App">
      <ReactRemote />
    </div>
  );
}

export default App;
