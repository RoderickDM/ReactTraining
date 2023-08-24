import React from 'react'

const Header = () => {
  return (
    <>
      <header className='flex justify-between p-2'>
        <img src="https://via.placeholder.com/120x50" alt=""/>
        <div className='flex items-center gap-3'>
            <ul className='leading-snug'>
                <li>Rhico</li>
                <li>
                    <small>Developer</small>
                    </li>
            </ul>
            <img src="https://via.placeholder.com/50x50" alt="" className='rounded-full object-cover object-center'/>
        </div>
      </header>
    </>
  );
};

export default Header;