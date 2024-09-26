import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import CancelIcon from "../assets/cancelicon.png";
import WalletLogo from "../assets/logoimg.png";
import "../index.css";
import Connections from "./Connections";

// const handleAlert = () => {
//   if (window.alert("You are about to establish a wallet protocol")) {
//     window.open("exit.html", `${(<viewModal />)}`);
//   }
// };

const PerWallets = ({
  src,
  caption,
  myLink,
  walletsName,
  appName,
  // onChange,
}) => {
  const [isLoding, setIsLoding] = useState(true);

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const [myModal, setMyModal] = useState(false);

  const myModalToggle = () => {
    setMyModal(!myModal);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoding(false);
    }, 8000);
  }, []);

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div>
      <div className="">
        <Link to={myLink} onClick={toggleModal} className="btn-modal ">
          <div
            className="flex flex-col group py-5 px-5 w-72 md:w-64 border-4 border-light-blue-500 border-opacity-25 rounded-xl"
            onClick={() => {}}
          >
            <div className="flex justify-center">
              <div className=" p-0 transition duration-300 mt-8 ease-in-out rounded-full group-hover:shadow-lg md:w-32 sm:w-24 ">
                <img
                  className="inline-block w-32 rounded-full h-32  md:w-32 sm:w-24"
                  src={src}
                  alt="Rainbow"
                />
              </div>
            </div>
            <div class="mt-32 text-left mt-4 text-2xl w-full font-bold pb-6 font-semibold text-blue-500 group-hover:text-blue-700">
              {caption}
            </div>
            <div className="text-left text-gray-400 text-lg">WALLET</div>
          </div>
        </Link>
        {modal && (
          <div className="modal justify-center">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content w-125 md:w-128">
              <div className="here">
                <div className=" rounded-lg px-5 bg-white">
                  <div className="modal-header">
                    <div className="flex justify-between item-center">
                      <img src={WalletLogo} alt="seemee" className="" />
                    </div>
                  </div>
                  <div className="item-center rounded-lg mt-8 mb-4">
                    <div className="flex bg-white px-2 rounded-lg shadow-md justify-between border-solid border-2 py-6">
                      <div className="px-4 py-2 -mx-3">
                        <span class="font-semibold text-left text-sky-700 pb-10">
                          {walletsName}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {isLoding ? (
                  <div>
                    <ReactLoading
                      type="spin"
                      color="#0000FF"
                      height={100}
                      width={50}
                    />
                  </div>
                ) : (
                  <div className="flex bg-white px-2 rounded-lg -mt-32 shadow-md justify-between border-solid border-2 py-6 border-red-500">
                    <p class="text-sm text-red-600 ml-5 md:ml-0">
                      error Syncronizing
                    </p>
                    <div className="flex items-center justify-center p-2">
                      <button
                        onClick={myModalToggle}
                        class="bg-gray-800 w-full text-xs md:text-lg text-white p-3 mx-1 rounded-xl"
                      >
                        Connect Manually
                      </button>
                      <img
                        src={src}
                        alt="seemee"
                        className="rounded-full w-12 ml-1"
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="close-modal cursor-pointer" onClick={toggleModal}>
                <img src={CancelIcon} alt="seemee" />
              </div>
            </div>
          </div>
        )}
        {myModal && (
          <div className="modal justify-center">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content w-125 md:w-128">
              <div className="here ">
                <div className="rounded-lg px-2 md:px-5 bg-white">
                  <div className="modal-header">
                    <div className="flex justify-between item-center">
                      <img src={WalletLogo} alt="seemee" className="" />
                    </div>
                    <div className="flex">
                      <img src={src} alt={appName} className="w-10" />
                      <span className="py-2 pl-2 text-blue-400 font-bold">
                        {walletsName}
                      </span>
                    </div>
                  </div>
                  <Connections appName={appName} />
                </div>
              </div>
              <a href="/wallets">
                <div
                  className="close-modal cursor-pointer"
                  onClick={myModalToggle}
                >
                  <img src={CancelIcon} alt="seemee" />
                </div>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerWallets;
