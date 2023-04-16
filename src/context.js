import React from 'react'
import { GameTypes } from './constants/GameType';
import i18next from './i18n'
import { useTranslation } from 'react-i18next';

const AppContext = React.createContext();
const AppProvider = ({ children }) => {

  const { t } = useTranslation();

  const setLanguage = (lng) => {
    i18next.changeLanguage(lng);
  };

  const [data, setData] = React.useState([
    // { name: "Bee", icon: '/bee.png', letter: "E", type: GameTypes.multipleChoice, choices: { 'choise1': true, 'choise2': false }, answer: "choice2", solved: false, text: "Welcome to the sperm game! Do you know what you can fish up here?" },
    { name: "Bee", icon: '/bee.png', letter: "E", type: GameTypes.multipleChoice, choices: { 'choise1': true, 'choise2': false }, answer: "choice2", solved: false, text: t('Bee.text') },
    { name: "Butterfly", icon: '/butterfly.png', type: GameTypes.text, letter: "M", answer: "test", solved: false, text: t('Butterfly.text') },
    { name: "Ladybug", icon: '/Ladybug.png', type: GameTypes.text, letter: "B", answer: "test", solved: false, text: t('Ladybug.text') },
    { name: "Slug", icon: '/Slug.png', type: GameTypes.drag, letter: "R", choices: { 'choise1': true, 'choise2': false }, answer: "test", solved: false, text: t('Slug.text') },
    { name: "Chick", icon: '/Chick.png', type: GameTypes.multipleChoice, choices: { 'choise1': true, 'choise2': false }, answer: "test", letter: "Y", solved: false, text: t('Chick.text') },
    {
      name: "Plane", icon: '/Plane.png', type: GameTypes.text, letter: "O", choices: { 'choise1': true, 'choise2': false }, answer: "test", solved: false, text: t('Plane.text')
    },
  ])
  const [playerName, setPlayerName] = React.useState('')

  return (
    <AppContext.Provider
      value={{

        data,
        setData,

        playerName,
        setPlayerName,

        setLanguage

      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };