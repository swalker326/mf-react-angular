import { useEffect } from "react";
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
      <app-root></app-root>
    </div>
  );
};
