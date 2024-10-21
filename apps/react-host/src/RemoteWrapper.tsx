import React, { useEffect, useRef } from "react";

const RemoteWrapper = () => {
  const ref = useRef(null);

  useEffect(() => {
    // let unmount;
    import("angularRemote/Component")
      .then(({ AppComponent }) => {
        console.log(":::NG STUFF", AppComponent);
        ref.current = new AppComponent();
      })
      .catch((err) => console.error("Error loading Angular component:", err));

    // return () => {
    //   if (unmount) {
    //     unmount();
    //   }
    // };
  }, []);

  return (
    <div ref={ref}>
      <h1>Angular Remote</h1>
    </div>
  );
};

export default RemoteWrapper;
