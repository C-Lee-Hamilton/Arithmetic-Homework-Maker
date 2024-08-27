import React from 'react';

import { Outlet } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Homework Maker</h1>
     
      </header>
      
      <main>
      
        <Outlet />
      </main>
    </div>
  );
};

export default HomePage;