import React from 'react'
import {FaTimes} from 'react-icons/fa'
import SpinnerButton from '../../../../../partials/spinners/SpinnerButton'

function ModalAddRoles({setIsShow}) {
    const handleCloseRole = () => setIsShow(false);

  return (
    <div>
      <div className="modal fixed top-0 left-0 w-full z-20">
       <div className="backdrop bg-white bg-opacity-80 h-screen "></div>
       <div className="modal__main absolute mx-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border 
      border-gray-400 rounded-md py-8 px-5 max-w-[420px] w-full ">
       <div className="modal__header relative">
       <h3> Role </h3>
       <button className="absolute -top-4 right-0 " onClick={handleCloseRole}>
       <FaTimes className="text-gray-400 text-base" />
       </button>
       </div>
       
       <div className="modal__body min-h-[30vh]">
        <div className="form__wrap">
            <label htmlFor="">Role</label>
            <input type="text" />
            <span className='error-show'>*required</span>
        </div>
        <div className="form__wrap">
            <label htmlFor="">Description</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <span className='error-show'>*required</span>
        </div>
       </div>

       <div className="modal__action flex justify-end mt-6 gap-2 ">
            <button className='btn btn--accent'>Add <SpinnerButton /></button>
            <button className='btn btn--cancel'onClick={handleCloseRole}>Cancel</button>
       </div>
       </div>
       </div>
    </div>
  )
}

export default ModalAddRoles
