import React, { Suspense, useState } from "react";
import "./App.css";
// const ReactRemote = React.lazy(() => import("reactRemote/App"));
// const AngularRemote = React.lazy(() =>
// // @ts-expect-error - angular am i right
// const AngularRemote = import("angularRemote/Component").then((m) => {
//   console.log(":::M", m);
//   return { default: m.Component };
// });
// const RemoteWrapper = React.lazy(() =>
//   import("./RemoteWrapper").then((module) => {
//     console.log(":::MODULE", module);
//     return { default: module.default };
//   })
// );

function App() {
  return (
    <div className="App">
      {/* <Suspense fallback="Loading React Remote">
        <ReactRemote />
      </Suspense> */}
      {/* <Suspense fallback="Loading Angular Remote">
        <RemoteWrapper />
      </Suspense> */}
      <Suspense fallback="Loading Angular Remote">
        {/* <AngularRemote /> */}
      </Suspense>
    </div>
  );
}

export default App;
