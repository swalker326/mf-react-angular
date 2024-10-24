import { useEffect } from "react";
//@ts-expect-error - angular stuffs
import { mount } from "angularRemote/Module";

export const AngularRemoteApp = () => {
  useEffect(() => {
    mount();
    return () => {
      // Do some unmounting here
    };
  }, []);
  return (
    <div className="angular-remote-app">
      {/* @ts-expect-error - angular stuffs */}
      <app-root></app-root>
    </div>
  );
};
