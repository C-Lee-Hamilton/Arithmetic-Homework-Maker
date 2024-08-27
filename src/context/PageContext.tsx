import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PageContextType {
  // Add any state or functions you want to provide globally
  // e.g., user: User | null;
}


const PageContext = createContext<PageContextType | undefined>(undefined);


const PageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  
  const [state, setState] = useState<any>(null);


  return (
    <PageContext.Provider
     value={{ 
      state
    // more
     }}>
      {children}
    </PageContext.Provider>
  );
};


const usePageContext = () => {
  const context = useContext(PageContext);
  if (context === undefined) {
    throw new Error('usePageContext must be used within a PageProvider');
  }
  return context;
};

export { PageProvider, usePageContext };