import React from 'react';
import hamburgerIcon from "../assets/images/burger.png";

const Header: React.FC = () => {
  return (
    <header 
    className='
    bg-offWhite
    border-b-2 border-Silver h-20 flex flex-row justify-between '
    style={{borderStyle: "outset"}}
    >
 <div className="flex items-center ml-4">
        <button 
          className="flex  items-center justify-center w-10 h-8"
          aria-label="Menu"
        >
          <img src={hamburgerIcon} alt="Menu" className="w-8 h-6" />
        </button>
        <h1 className="font-chalk text-3xl text-darkGrey mr-4">Arithmetic Maker</h1>
       
      </div>
  
    <button className="border-2 font-mono border-gold rounded-full h-1/2 mr-4 my-auto bg-darkGrey py-0 px-4 flex items-center justify-center text-offWhite text-md">
      Sign Up
    </button>
  
  </header>
  );
};

export default Header;