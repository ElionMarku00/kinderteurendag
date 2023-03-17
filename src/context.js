import React from 'react'
// import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';



const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const [data, setData] = React.useState([
    { name: "Bee", icon: '/bee.png', letter: "E", answer: "test", solved: false },
    { name: "Butterfly", icon: '/butterfly.png', letter: "M", answer: "test", solved: false },
    { name: "Ladybug", icon: '/Ladybug.png', letter: "B", answer: "test", solved: false },
    { name: "Slug", icon: '/Slug.png', letter: "R", answer: "test", solved: false },
    { name: "Chick", icon: '/Chick.png', letter: "Y", answer: "test", solved: false },
    { name: "Plane", icon: '/Plane.png', letter: "O", answer: "test", solved: false },
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