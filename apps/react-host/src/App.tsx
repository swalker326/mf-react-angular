import React, { Suspense, useState } from "react";
import "./App.css";
const ReactRemote = React.lazy(() => import("reactRemote/App"));
import { AngularRemoteApp } from "./AngularRemoteApp";

function App() {
  return (
    <div className="App">
      <Suspense fallback="Loading React Remote">
        <ReactRemote />
      </Suspense>
      <Suspense fallback="Loading Angular Remote">
        <AngularRemoteApp />
      </Suspense>
    </div>
  );
}

export default App;
