import React, { useEffect } from 'react';

const Modal = ({ modalContent, closeModal }) => {

  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  })

  return (
    <div>
      <h5>{modalContent}</h5>
    </div>
  )
}

export default Modal;