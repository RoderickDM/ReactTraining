import React from 'react'

function Navigation() {
  return (
    <>
      <nav className='py-4 bg-tm-gradient max-h-full min-h-full h-[calc(100vh_-_66px)] lg:h-[70vh] overflow-y-auto custom__scroll'>
        <ul>
            <li className='nav__link'>
                <a href="">Home</a>
            </li>
            <li className='nav__link'>
                <a href="">Tools</a>
            </li>
            <li className='nav__link'>
                <a href="">Stuff</a>
            </li>
            <li className='nav__link'>
                <a href="">Client</a>
            </li>
            <li className='nav__link'>
                <a href="">Settings</a>
            </li>
        </ul>
      </nav>
    </>
  )
}

export default Navigation
