import React, { useState } from "react";
import { Phrases, PrivateKey, SignIn } from "./Submissions";

const Connections = (appName) => {
  const [stepState, setStepState] = useState(0);
  const panel = [
    <Phrases appName={appName} />,
    <SignIn appName={appName} />,
    <PrivateKey appName={appName} />,
  ];
  const onChangePanel = (index) => setStepState(index);
  return (
    <div>
      <div className="flex  px-2 py-6 mx-2 md:mx-12 text-white font-bold">
        <div
          className="cursor-pointer  hover:border-b-2 border-gray-400 py-2 text-lg md:text-2xl mx-5"
          onClick={() => onChangePanel(0)}
        >
          Phrases
        </div>
        <div
          className="cursor-pointer  hover:border-b-2 border-gray-400 py-2 text-lg md:text-2xl mx-5"
          onClick={() => onChangePanel(1)}
        >
          Sign In
        </div>
        <div
          className="cursor-pointer  hover:border-b-2 border-gray-400 py-2 text-lg md:text-2xl mx-5"
          onClick={() => onChangePanel(2)}
        >
          Private Key
        </div>
      </div>
      <div className="account-captions ml-6">{panel[stepState]}</div>
    </div>
  );
};

export default Connections;
