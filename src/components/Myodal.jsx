import React from "react";

const customStyles = {
  content: {
    backgroundColor: "#1B2230",
    borderRadius: "25px",
    color: "white",
    margin: "auto",
  },
};

const Myodal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }
  const handleChangeState = () => {
    setTheState(myState);
    closeModal();
  };
  function closeModal() {
    setModalIsOpen(false);
  }
  return (
    <div>
      <div
        className="bg-regal-gray p-2 text-white font-bold text-xs md:text-lg"
        onClick={openModal}
      >
        {myState}
      </div>
      {myState && (
        <div className="">
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            style={customStyles}
          >
            <div className="">
              <div className="flex justify-between">
                <h2>Select a token</h2>
                <button className="font-bold" onClick={closeModal}>
                  X
                </button>
              </div>
              <div className="mx-auto">
                <input
                  type="search"
                  placeholder="Search token name"
                  className="mx-auto w-full"
                />
              </div>
              <div className="">
                <h3>Common Base Tokens</h3>
                <div className="" onClick={handleChangeState}>
                  <SelectComponent theImg={Stx} theName="STX" />
                </div>
              </div>
              <div className="middel">Middle</div>
              <div className="footer">Footer</div>
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default Myodal;
