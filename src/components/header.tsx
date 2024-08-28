import React from 'react';

const Header: React.FC = () => {
  return (
    <header 
    className='
    bg-gradient-to-b from-lightCrayolaGreen via-crayolaGreen to-darkCrayolaGreen
    border-b-2 border-Silver h-10 flex flex-row justify-between p-2 '
    style={{borderStyle: "outset"}}
    >
      <button className="border-2 m border-DarkGrey rounded-md bg-slate-300 p-2 flex items-center justify-center " >Settings</button>
      <h1>Arithmetic Maker</h1>
      <button className="border-2 m border-white-300 rounded-md bg-red-300 p-2 flex items-center justify-center ">LogIn</button>
  </header>
  );
};

export default Header;