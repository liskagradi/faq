import React, { createContext, useState } from 'react';

export const FaqContext = createContext({}); 

const initialState = {title:'', id:''};
const FaqProvider = ({children}) => {
const [state, setState] = useState(initialState);

  return (
    <FaqContext.Provider 
    value={{state, setState}}>
      {children} 
    </FaqContext.Provider>
  );
}

export default FaqProvider;