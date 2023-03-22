import React from 'react'
import { GameTypes } from './constants/GameType';

const AppContext = React.createContext();
const AppProvider = ({ children }) => {

  const [data, setData] = React.useState([
    { name: "Bee", icon: '/bee.png', letter: "E", type: GameTypes.text, answer: "test", solved: false, text: "Welcome to the sperm game! Do you know what you can fish up here?" },
    { name: "Butterfly", icon: '/butterfly.png', type: GameTypes.multipleChoice, letter: "M", answer: "test", solved: false, text: "Here you can perform an operation yourself like a real doctor! Do you want to give it a try? " },
    { name: "Ladybug", icon: '/Ladybug.png', type: GameTypes.drag, letter: "B", answer: "test", solved: false, text: "On the door you can find a number. This is the number of ultrasounds we performed in 2022. " },
    { name: "Slug", icon: '/Slug.png', type: GameTypes.text, letter: "R", answer: "test", solved: false, text: "Here you can see a lab person bringing the sperm cell into the egg cell with a very small needle. " },
    { name: "Chick", icon: '/Chick.png', type: GameTypes.text, letter: "Y", answer: "test", solved: false, text: "Listen very well to what the doctor says." },
    {
      name: "Plane", icon: '/Plane.png', type: GameTypes.text, letter: "O", answer: "test", solved: false, text: "What can you freeze here?"
    },
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