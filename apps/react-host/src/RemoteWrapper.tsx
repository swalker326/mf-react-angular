import React, { useEffect, useRef } from "react";

const RemoteWrapper = () => {
  const ref = useRef(null);

  useEffect(() => {
    let unmount;
    import("angularRemote/Component")
      .then((stuff) => {
        console.log(":::NG STUFF", stuff);
        unmount = stuff(ref.current);
      })
      .catch((err) => console.error("Error loading Angular component:", err));

    return () => {
      if (unmount) {
        unmount();
      }
    };
  }, []);

  return <div ref={ref}></div>;
};

export default RemoteWrapper;
