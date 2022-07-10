import React, { useState, createContenxt, useContext } from 'react';

const AppContext = createContenxt(null);

export const Parent = () => {
  const [useName, setUsername] = useState('');

  return (
    <AppContext.Provider value={{ useName, setUsername }}>
      <Child />
    </AppContext.Provider>
  );
};

export const Child = () => {
  const { setUsername } = useContext(AppContext);
  return <>Child</>;
};
