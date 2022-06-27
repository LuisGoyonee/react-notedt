import React from "react";
import Modal from "react-modal";

const FilterModal = ({ close, open }) => {
  return (
    <>
      <Modal
        isOpen={open}
        onRequestClose={close}
        contentLabel="Example Modal"
        className="modalContainer"
      >
        <button onClick={() => close(false)}>close</button>
        <div className="modal">
          <div className="modalBackground">
            <div className="modalHeader">
              <p className="title">Filters</p>
            </div>
            <div className="modalBody">
              <form className="form">
                <div></div>
                <input />
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
              </form>
            </div>
            <div className="modalFooter">
              <button
                type="button"
                className="btn cancel modalButton"
                onClick={() => close(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn save modalButton"
                value="Submit"
                // onClick={handleSubmit(onSubmit)}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default FilterModal;
