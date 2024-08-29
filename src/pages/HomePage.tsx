import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Outlet } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="h-screen flex bg-offWhite flex-col" >
     <Header/>

      <main
        className="w-11/12 mx-auto h-full box-border"
        style={{borderStyle: "outset"}}
        >
        
       <Outlet/>
      </main>
  
    <Footer/>
    </div>
  );
};

export default HomePage;