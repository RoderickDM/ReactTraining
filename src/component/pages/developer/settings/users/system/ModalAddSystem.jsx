import React from "react";
import { FaTimes } from "react-icons/fa";
import SpinnerButton from "../../../../../partials/spinners/SpinnerButton";
import Modal from "../../../../../partials/structure/Modal";

function ModalAddSystem({ setIsShow, itemEdit, setItemEdit }) {
  const handleCloseRole = () => {
    setItemEdit([]);
    setIsShow(false);
  };

  return (
    <>
      <Modal>
        <div className="modal__header relative">
          <h3> Role </h3>
          <button
            className="absolute -top-4 right-0 "
            onClick={handleCloseRole}
          >
            <FaTimes className="text-gray-400 text-base" />
          </button>
        </div>
        <div className="modal__body min-h-[20vh]">
          <div className="form__wrap">
            <label htmlFor="">Role</label>
            <input type="text" value={itemEdit ? itemEdit.name : ""} />
            <span className="error-show">*required</span>
          </div>
          <div className="form__wrap">
            <label htmlFor="">Email</label>
            <input type="text" value={itemEdit ? itemEdit.email : ""} />
            <span className="error-show">*required</span>
          </div>
        </div>

        <div className="modal__action flex justify-end mt-6 gap-2 ">
          <button className="btn btn--accent">
            {itemEdit.length === 0 ? "Add" : "Save"} <SpinnerButton />
          </button>
          <button className="btn btn--cancel" onClick={handleCloseRole}>
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
}

export default ModalAddSystem;
