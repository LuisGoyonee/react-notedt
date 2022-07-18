import React from "react";
import Modal from "react-modal";
import "./filter-modal.css";

const FilterModal = ({ close, open }) => {
  return (
    <>
      <Modal
        isOpen={open}
        onRequestClose={close}
        contentLabel="Example Modal"
        className="modalContainer"
      >
        <div className="modal-filter">
          <div className="modalBackground">
            <div className="modalHeader">
              <p className="title">Filters</p>
            </div>
            <div className="modalBody">
              <form className="form">
                <div className="formGroup">
                  <label className="font-bold">Date</label>
                  <input
                    className="w-full rounded-md input uppercase focus:outline-none mb-2.5"
                    type="date"
                    id="date"
                    // value={formState.date}
                    // {...register("date")}
                    // onChange={handleInputChange}
                    // required
                  ></input>
                </div>
                <label>View Transactions By:</label>
                <div className="formGroup">
                  <label className="font-bold">Type</label>
                  <div className="checkboxGroup grid grid-cols-2 my-2.5">
                    <div className="font-semibold w-full flex">
                      <input type="checkbox" />
                      <label className="pl-10">Income</label>
                      <span class="checkmark"></span>
                    </div>
                    <div className="font-semibold w-full  flex">
                      <input type="checkbox" />
                      <label className="pl-10">Expenses</label>
                    </div>
                  </div>
                </div>
                <div className="formGroup">
                  <label className="font-bold">Amount Range</label>
                  <label className="italic">(Optional)</label>
                  <div className="checkboxGroup grid grid-cols-2 my-2.5">
                    <div className="font-semibold w-full">
                      <label className="">Min</label>
                      <input type="number" placeholder="PHP" />
                    </div>
                    <div className="font-semibold w-full">
                      <label className="">Max</label>
                      <input type="number" placeholder="PHP" />
                    </div>
                  </div>
                </div>
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
                Submit
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default FilterModal;
