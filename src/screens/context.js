import React from 'react';
const initialState = {
 Pets:[], Livestock:[], "Beasts of Burden":[], Other:[]
};
export const TakeHolidayContext = React.createContext(null);
export default function Context(props) {
  const [state, setState] = React.useState(initialState);
  return (
    <TakeHolidayContext.Provider value={{state, setState}}>
      {props.children}
    </TakeHolidayContext.Provider>
  );
}
