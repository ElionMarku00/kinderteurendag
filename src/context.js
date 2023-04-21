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
  const [playerName, setPlayerName] = React.useState('')

  const [data, setData] = React.useState([
    // { name: "Bee", icon: '/bee.png', letter: "E", type: GameTypes.multipleChoice, choices: { 'choise1': true, 'choise2': false }, answer: "choice2", solved: false, text: "Welcome to the sperm game! Do you know what you can fish up here?" },
    {
      name: "Bee", icon: '/bee.png', letter: "E", type: GameTypes.multipleChoice, choices: { [t('beepage.choices.choise1')]: true, 'choise2': false },
      answer: "test", solved: false, text: t('beepage.text'), prompt: t("beepage.prompt"), textp2: t('beepage.textp2'), numPages: 1, gameHost: Math.random() < 0.5 ? '/Lukas.png' : '/Marie.png'
    },
    {
      name: "Butterfly", icon: '/butterfly.png', type: GameTypes.text, letter: "M", answer: "test", solved: false,
      text: t('butterflypage.text'), prompt: t("butterflypage.prompt"), textp2: t('butterflypage.textp2'), numPages: 2, gameHost: Math.random() < 0.5 ? '/Lukas.png' : '/Marie.png'
      , title: t('butterflypage.title')
    },
    {
      name: "Ladybug", icon: '/Ladybug.png', type: GameTypes.text, letter: "B", answer: "test", solved: false,
      text: t('ladybugpage.text'), prompt: t("ladybugpage.prompt"), textp2: t('ladybugpage.textp2'), numPages: 2, gameHost: Math.random() < 0.5 ? '/Lukas.png' : '/Marie.png'
      , title: t('ladybugpage.title')
    },
    {
      name: "Slug", icon: '/Slug.png', type: GameTypes.drag, letter: "R", choices: { 'choise1': true, 'choise2': false }, answer: "test",
      solved: false, text: t('slugpage.text'), prompt: t("slugpage.prompt"), textp2: t('slugpage.textp2'), numPages: 2, gameHost: Math.random() < 0.5 ? '/Lukas.png' : '/Marie.png'
      , title: t('slugpage.title')
    },
    {
      name: "Chick", icon: '/Chick.png', type: GameTypes.multipleChoice, choices: { 'choise1': true, 'choise2': false }, answer: "test",
      letter: "Y", solved: false, text: t('chickpage.text'), prompt: t("chickpage.prompt"), textp2: t('chickpage.textp2'), numPages: 2, gameHost: Math.random() < 0.5 ? '/Lukas.png' : '/Marie.png'
      , title: t('chickpage.title')
    },
    {
      name: "Plane", icon: '/Plane.png', type: GameTypes.multipleChoice, letter: "O", choices: { 'choise1': true, 'choise2': false }, answer: "test",
      solved: false, text: t('planepage.text'), prompt: t("planepage.prompt"), textp2: t('planepage.textp2'), numPages: 1, gameHost: Math.random() < 0.5 ? '/Lukas.png' : '/Marie.png'
      ,title: t('planepage.title')
    },
  ])

  const setSolved = (currentGame) => {
    console.log('correct', currentGame);

    const currGameIndx = data.findIndex((i) => i.name === currentGame)

    let items = [...data];
    let item = { ...data[currGameIndx] };
    item.solved = true;
    items[currGameIndx] = item;
    setData([...items]);

  }

  const getGameDataByName = (currentGame) => {

    const gameType = data.find((i) => i.name === currentGame).type
    const currGameAns = data.find((i) => i.name === currentGame).answer
    const currGameImage = data.find((i) => i.name === currentGame).icon
    const currGameHost = data.find((i) => i.name === currentGame).gameHost
    const currGameTitle = data.find((i) => i.name === currentGame).title
    const currGameText = data.find((i) => i.name === currentGame).text
    const currGameTextp2 = data.find((i) => i.name === currentGame).textp2
    console.log("context currgametextp2:", currGameTextp2);


    return [gameType, currGameAns, currGameImage, currGameHost, currGameTitle, currGameText, currGameTextp2]

  }

  function checkAnsw(ans, currentGame) {
    console.log('checkAnsw: ', currentGame);

    const [gameType, currGameAns, currGameImage, currGameHost] = getGameDataByName(currentGame)

    switch (gameType) {
      case GameTypes.text:
        if (currGameAns === ans) {
          setSolved(currentGame)
          return true
          // navigate('/correct', { state: { currGameImage, currGameHost } })
        }
        else {
          // navigate('/incorrect', { state: { currGameImage, currGameHost } })
          return false
        }
        break;
      case GameTypes.multipleChoice:
        if (ans) {
          setSolved(currentGame)
          return true
          // navigate('/correct', { state: { currGameImage, currGameHost } })
        }
        // else navigate('/incorrect', { state: { currGameImage, currGameHost } })
        return false
        break;

      case GameTypes.drag:
        if (ans) {
          setSolved(currentGame)
          return true

          // navigate('/correct', { state: { currGameImage, currGameHost } })
        }
        else return false
        // navigate('/incorrect', { state: { currGameImage, currGameHost } })
        break;

      default:
        throw new Error(`passed ${gameType} as GameType`)
    }


    //if answer is a string check if its correct, if not, it means it is called with true

    // if (typeof currGameAns === 'string' || currGameAns instanceof String) {
    //   if (currGameAns === ans) {
    //     setSolved(currentGame)
    //     return true
    //   }
    //   return false

    // }
    // else {
    //   if (ans) {
    //     setSolved(currentGame)
    //     return ans
    //   }
    // }
  }

  return (
    <AppContext.Provider
      value={{

        data,
        setData,

        playerName,
        setPlayerName,

        setLanguage,
        checkAnsw,
        getGameDataByName


      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };