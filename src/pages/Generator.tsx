import React from 'react';

const Generator: React.FC = () => {
  return (
    <div className="h-full flex font-mono  flex-col items-center w-full">
      <h1 className="text-3xl font-medium shadow-xl text-darkGrey ">Generator</h1>
  
      <div className="flex h-5/6 flex-col gap-1 p-4 w-full sm:flex-row  ">
        <div className="flex-1 bg-darkGrey text-offWhite border-4 border-solid border-gold p-4 rounded-sm">
          <h3> live preview</h3>
          <p>preview image will go in here somehow</p>
          <button>download</button>
          <button>download answer key</button>
        </div>

        <div className="flex-1 bg-darkGrey text-offWhite border-4 border-solid border-gold p-4 rounded-sm">
          <h3>options</h3>
            {/* options, checkboxes etcetera */}
        
        
        </div>

      </div>
    <button className="border-2 rounded-full bg-darkGrey text-offWhite px-4  mx-auto border-solid border-gold">Generate</button>
    </div>
  );
};

export default Generator;