import React from 'react'
import { GameTypes } from './constants/GameType';

const AppContext = React.createContext();
const AppProvider = ({ children }) => {

  const [data, setData] = React.useState([
    { name: "Bee", icon: '/bee.png', letter: "E", type: GameTypes.multipleChoice, choices: { 'choise1': true, 'choise2': false }, answer: "choice2", solved: false, text: "Welcome to the sperm game! Do you know what you can fish up here?" },
    { name: "Butterfly", icon: '/butterfly.png', type: GameTypes.text, letter: "M", answer: "test", solved: false, text: "Here you can perform an operation yourself like a real doctor! Do you want to give it a try? " },
    { name: "Ladybug", icon: '/Ladybug.png', type: GameTypes.text, letter: "B", answer: "test", solved: false, text: "Welcome to the ultrasound! \n On the door you can find a number. This is the number of ultrasounds we performed in 2022. " },
    { name: "Slug", icon: '/Slug.png', type: GameTypes.drag, letter: "R", choices: { 'choise1': true, 'choise2': false }, answer: "test", solved: false, text: "Welcome to the lab Demo! \n Here you can see a lab person bringing the sperm cell into the egg cell with a very small needle. " },
    { name: "Chick", icon: '/Chick.png', type: GameTypes.multipleChoice, choices: { 'choise1': true, 'choise2': false }, answer: "test", letter: "Y", solved: false, text: "Welcome to the auditorium! \n Listen very well to what the doctor says." },
    {
      name: "Plane", icon: '/Plane.png', type: GameTypes.text, letter: "O", choices: { 'choise1': true, 'choise2': false }, answer: "test", solved: false, text: "Welcome to the freezing demo! \n What can you freeze here?"
    },
  ])
  const [playerName, setPlayerName] = React.useState('')
  const [language, setGameLanguage] = React.useState('')

  return (
    <AppContext.Provider
      value={{

        data,
        setData,

        playerName,
        setPlayerName,

        language,
        setGameLanguage

      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };