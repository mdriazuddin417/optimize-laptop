import React, { useState } from "react";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const RandomModal = ({ cart }) => {
  const { name, picture } = cart;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  Modal.setAppElement("#root");
  return (
    <div>
      <button className="btn btn-secondary" onClick={openModal}>
        Open Model
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="cart">
          <img src={picture} alt="" />
          <h6>{name}</h6>
        </div>
        <button onClick={closeModal} className="btn btn-info">
          Close Modal
        </button>
      </Modal>
    </div>
  );
};

export default RandomModal;
