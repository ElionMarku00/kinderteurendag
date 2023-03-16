import React from 'react'
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';


const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const [data, setData] = React.useState([
    { name: "Bee", Icon: (props) => <FamilyRestroomIcon {...props} />, letter: "E", answer: "test", solved: false },
    { name: "Butterfly", Icon: (props) => <FamilyRestroomIcon {...props} />, letter: "M", answer: "test", solved: false },
    { name: "Ladybug", Icon: (props) => <FamilyRestroomIcon {...props} />, letter: "B", answer: "test", solved: false },
    { name: "Slug", Icon: (props) => <FamilyRestroomIcon {...props} />, letter: "R", answer: "test", solved: false },
    { name: "Chick", Icon: (props) => <FamilyRestroomIcon {...props} />, letter: "Y", answer: "test", solved: false },
    { name: "Plane", Icon: (props) => <FamilyRestroomIcon {...props} />, letter: "O", answer: "test", solved: false },
  ])

  

  return (
    <AppContext.Provider
      value={{
        data,
        setData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };