
import React, { useState } from "react";
//import ReactModal from "react-modal";

export default function Stickers() {
  const [showModal, setShowModal] = useState(true);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    console.log(showModal)
  };

  return (
    <>

        <div className="contenedor">

        <button onClick={handleOpenModal}>Open Popup</button>
      {showModal && (
        <div className="popup">
          <button onClick={handleCloseModal}>Close Popup</button>
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </div>
      )}

          <div className="catinfo">
            <div className="catinfoitem">
              <h1 className="catitle"> hola </h1>
                <div className="catdescription">
                  <p> Cat 1   </p>
                </div>
            </div>
            
            <div className="catinfoitem">
              <h1> hola </h1>
            </div>

            <div className="catinfoitem">
              <h1> hola </h1>
            </div>
            
          </div>
        </div>

        
    </>
  )
}
