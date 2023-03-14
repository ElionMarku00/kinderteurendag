import React from 'react'


const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [word, setWord] = React.useState([]);
  const [language, setLanguage] = React.useState([])
  const [correctly,setCorrectly] = React.useState([])
  const [modalData, setModalData] = React.useState({
    isOpen: false,
    title: "",
    data: {},
  });

  return (
    <AppContext.Provider
      value={{

        word,
        language,
        modalData,
        correctly

      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };