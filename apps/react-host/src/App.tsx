import React, { Suspense, useState } from "react";
import "./App.css";
const ReactRemote = React.lazy(() => import("reactRemote/App"));
import { AngularRemoteApp } from "./AngularRemoteApp";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: "3rem" }}
      className="App"
    >
      <div style={{ border: "1px solid blue" }}>
        <Suspense fallback="Loading React Remote">
          <ReactRemote />
        </Suspense>
      </div>
      <div style={{ border: "1px solid red" }}>
        <Suspense fallback="Loading Angular Remote">
          <AngularRemoteApp />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
