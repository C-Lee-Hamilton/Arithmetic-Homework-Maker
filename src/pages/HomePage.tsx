import React from 'react';
import Header from '../components/header';

import { Outlet } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="h-screen flex flex-col" >
     <Header/>

      <main
        className="border-8 p-8 bg-DarkGrey text-slate-300 border-Gold h-full box-border"
        style={{borderStyle: "outset"}}
        >
        
       <Outlet/>
      </main>
    </div>
  );
};

export default HomePage;