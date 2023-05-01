import React from 'react'
import { GameTypes } from './constants/GameType';
import i18next from './i18n'
import { useTranslation } from 'react-i18next';

const AppContext = React.createContext();
const AppProvider = ({ children }) => {

  const { t } = useTranslation();

  const setLanguage = (lng) => {
    console.log('language changed to:', lng);
    i18next.changeLanguage(lng);
  };

  const finalGameAnswer = t("guesscodepage.answer")
  const [playerName, setPlayerName] = React.useState('')

  const [data, setData] = React.useState([
    {
      name: "Bee", icon: '/bee.png', letter: "E", type: GameTypes.multipleChoice, choices: { [t('beepage.choices.choise1')]: true, [t('beepage.choices.choise2')]: false },
      answer: t("beepage.answer"), solved: false, text: t('beepage.text'), prompt: t("beepage.prompt"), textp2: t('beepage.textp2'), numPages: 1,
      gameHost: Math.random() < 0.5 ? '/Lukas.png' : '/Marie.png', wrongTextRed: t("beepage.wrongpage.redtext"), wrongPageMessage: t("beepage.wrongpage.message"),
      rightTextGreen: t("beepage.correctpage.green"), rightPageMessage: t("beepage.correctpage.message")
    },
    {
      name: "Butterfly", icon: '/butterfly.png', type: GameTypes.text, letter: "M", answer: t("butterflypage.answer"), solved: false,
      text: t('butterflypage.text'), prompt: t("butterflypage.prompt"), textp2: t('butterflypage.textp2'), numPages: 2, gameHost: Math.random() < 0.5 ? '/Lukas.png' : '/Marie.png'
      , title: t('butterflypage.title'), wrongTextRed: t("butterflypage.wrongpage.redtext"), wrongPageMessage: t("butterflypage.wrongpage.message"),
      rightTextGreen: t("butterflypage.correctpage.green"), rightPageMessage: t("butterflypage.correctpage.message")
    },
    {
      name: "Ladybug", icon: '/Ladybug.png', type: GameTypes.number, letter: "B", answer: t("ladybugpage.answer"), solved: false,
      text: t('ladybugpage.text'), prompt: t("ladybugpage.prompt"), textp2: t('ladybugpage.textp2'), numPages: 2, gameHost: Math.random() < 0.5 ? '/Lukas.png' : '/Marie.png'
      , title: t('ladybugpage.title'), wrongTextRed: t("ladybugpage.wrongpage.redtext"), wrongPageMessage: t("ladybugpage.wrongpage.message"),
      rightTextGreen: t("ladybugpage.correctpage.green"), rightPageMessage: t("ladybugpage.correctpage.message")
    },
    {
      name: "Slug", icon: '/Slug.png', type: GameTypes.drag, letter: "R", choices: { 'choise1': true, 'choise2': false }, answer: t("slugpage.answer"),
      solved: false, text: t('slugpage.text'), prompt: t("slugpage.prompt"), textp2: t('slugpage.textp2'), numPages: 2, gameHost: Math.random() < 0.5 ? '/Lukas.png' : '/Marie.png'
      , title: t('slugpage.title'), wrongTextRed: t("slugpage.wrongpage.redtext"), wrongPageMessage: t("slugpage.wrongpage.message"),
      rightTextGreen: t("slugpage.correctpage.green"), rightPageMessage: t("slugpage.correctpage.message")
    },
    {
      name: "Chick", icon: '/Chick.png', type: GameTypes.multipleChoice, choices: { [t('chickpage.choices.choise1')]: false, [t('chickpage.choices.choise2')]: true }, answer: t("chickpage.answer"),
      letter: "Y", solved: false, text: t('chickpage.text'), prompt: t("chickpage.prompt"), textp2: t('chickpage.textp2'), numPages: 2, gameHost: Math.random() < 0.5 ? '/Lukas.png' : '/Marie.png'
      , title: t('chickpage.title'), wrongTextRed: t("chickpage.wrongpage.redtext"), wrongPageMessage: t("chickpage.wrongpage.message"),
      rightTextGreen: t("chickpage.correctpage.green"), rightPageMessage: t("chickpage.correctpage.message")
    },
    {
      name: "Plane", icon: '/Plane.png', type: GameTypes.multipleChoice, letter: "O", choices: { [t('planepage.choices.choise1')]: false, [t('planepage.choices.choise2')]: true }, answer: t("planepage.answer"),
      solved: false, text: t('planepage.text'), prompt: t("planepage.prompt"), textp2: t('planepage.textp2'), numPages: 1, gameHost: Math.random() < 0.5 ? '/Lukas.png' : '/Marie.png'
      , title: t('planepage.title'), wrongTextRed: t("planepage.wrongpage.redtext"), wrongPageMessage: t("planepage.wrongpage.message"),
      rightTextGreen: t("planepage.correctpage.green"), rightPageMessage: t("planepage.correctpage.message")
    },
  ])

  //store language on first boot
  React.useEffect(() => {
    const language = localStorage.getItem('language')

    if (language) {

      i18next.changeLanguage(language)
      localStorage.setItem('data', JSON.stringify(data));

    }
    else {
      i18next.changeLanguage('nl')
      localStorage.setItem('language', 'nl')
    }

  }, []); // empty dependency array means this effect runs only once on mount


  // shuffle list only once at the very start
  React.useEffect(() => {
    const localData = localStorage.getItem('data')

    if (localData) return; // if we already have some progress in the game keep it
    else { //if not shuffle it and start anew
      const shuffledList = data.sort(() => Math.random() - 0.5);
      localStorage.setItem('data', JSON.stringify(shuffledList));
      setData(shuffledList);
    }

  }, []); // empty dependency array means this effect runs only once on mount

  // // store playername on first boot
  React.useEffect(() => {
    const name = localStorage.getItem('playerName')

    if (name) return;
    else {

      setPlayerName(name);
    }

  }, []); // empty dependency array means this effect runs only once on mount


  React.useEffect(() => {

    setData([
      {
        name: "Bee", icon: '/bee.png', letter: "E", type: GameTypes.multipleChoice, choices: { [t('beepage.choices.choise1')]: true, [t('beepage.choices.choise2')]: false },
        answer: t("beepage.answer"), solved: false, text: t('beepage.text'), prompt: t("beepage.prompt"), textp2: t('beepage.textp2'), numPages: 1,
        gameHost: Math.random() < 0.5 ? '/Lukas.png' : '/Marie.png', wrongTextRed: t("beepage.wrongpage.redtext"), wrongPageMessage: t("beepage.wrongpage.message"),
        rightTextGreen: t("beepage.correctpage.green"), rightPageMessage: t("beepage.correctpage.message")
      },
      {
        name: "Butterfly", icon: '/butterfly.png', type: GameTypes.text, letter: "M", answer: t("butterflypage.answer"), solved: false,
        text: t('butterflypage.text'), prompt: t("butterflypage.prompt"), textp2: t('butterflypage.textp2'), numPages: 2, gameHost: Math.random() < 0.5 ? '/Lukas.png' : '/Marie.png'
        , title: t('butterflypage.title'), wrongTextRed: t("butterflypage.wrongpage.redtext"), wrongPageMessage: t("butterflypage.wrongpage.message"),
        rightTextGreen: t("butterflypage.correctpage.green"), rightPageMessage: t("butterflypage.correctpage.message")
      },
      {
        name: "Ladybug", icon: '/Ladybug.png', type: GameTypes.number, letter: "B", answer: t("ladybugpage.answer"), solved: false,
        text: t('ladybugpage.text'), prompt: t("ladybugpage.prompt"), textp2: t('ladybugpage.textp2'), numPages: 2, gameHost: Math.random() < 0.5 ? '/Lukas.png' : '/Marie.png'
        , title: t('ladybugpage.title'), wrongTextRed: t("ladybugpage.wrongpage.redtext"), wrongPageMessage: t("ladybugpage.wrongpage.message"),
        rightTextGreen: t("ladybugpage.correctpage.green"), rightPageMessage: t("ladybugpage.correctpage.message")
      },
      {
        name: "Slug", icon: '/Slug.png', type: GameTypes.drag, letter: "R", choices: { 'choise1': true, 'choise2': false }, answer: t("slugpage.answer"),
        solved: false, text: t('slugpage.text'), prompt: t("slugpage.prompt"), textp2: t('slugpage.textp2'), numPages: 2, gameHost: Math.random() < 0.5 ? '/Lukas.png' : '/Marie.png'
        , title: t('slugpage.title'), wrongTextRed: t("slugpage.wrongpage.redtext"), wrongPageMessage: t("slugpage.wrongpage.message"),
        rightTextGreen: t("slugpage.correctpage.green"), rightPageMessage: t("slugpage.correctpage.message")
      },
      {
        name: "Chick", icon: '/Chick.png', type: GameTypes.multipleChoice, choices: { [t('chickpage.choices.choise1')]: false, [t('chickpage.choices.choise2')]: true }, answer: t("chickpage.answer"),
        letter: "Y", solved: false, text: t('chickpage.text'), prompt: t("chickpage.prompt"), textp2: t('chickpage.textp2'), numPages: 2, gameHost: Math.random() < 0.5 ? '/Lukas.png' : '/Marie.png'
        , title: t('chickpage.title'), wrongTextRed: t("chickpage.wrongpage.redtext"), wrongPageMessage: t("chickpage.wrongpage.message"),
        rightTextGreen: t("chickpage.correctpage.green"), rightPageMessage: t("chickpage.correctpage.message")
      },
      {
        name: "Plane", icon: '/Plane.png', type: GameTypes.multipleChoice, letter: "O", choices: { [t('planepage.choices.choise1')]: false, [t('planepage.choices.choise2')]: true }, answer: t("planepage.answer"),
        solved: false, text: t('planepage.text'), prompt: t("planepage.prompt"), textp2: t('planepage.textp2'), numPages: 1, gameHost: Math.random() < 0.5 ? '/Lukas.png' : '/Marie.png'
        , title: t('planepage.title'), wrongTextRed: t("planepage.wrongpage.redtext"), wrongPageMessage: t("planepage.wrongpage.message"),
        rightTextGreen: t("planepage.correctpage.green"), rightPageMessage: t("planepage.correctpage.message")
      },
    ])

  }, [i18next.language]); // e



  function getFoundLetters() {

    const localData = JSON.parse(localStorage.getItem('data'))

    let solvedLetters = localData
      .filter(item => item.solved)
      .map(solved => solved.letter)

    if (i18next.language === 'fr') {
      solvedLetters.push('N')
    }

    return solvedLetters

  }

  const setSolved = (currentGame) => {

    const localData = JSON.parse(localStorage.getItem('data'))
    const currGameIndx = data.findIndex((i) => i.name === currentGame)

    let items = [...localData];
    let item = { ...localData[currGameIndx] };
    item.solved = true;
    items[currGameIndx] = item;
    setData([...items]);
    localStorage.setItem('data', JSON.stringify([...items]));

  }

  const getGameDataByName = (currentGame) => {

    let lang = i18next.language

    const gameType = data.find((i) => i.name === currentGame).type
    const currGameAns = data.find((i) => i.name === currentGame).answer
    const currGameImage = data.find((i) => i.name === currentGame).icon
    const currGameHost = data.find((i) => i.name === currentGame).gameHost
    const currGameTitle = data.find((i) => i.name === currentGame).title
    const currGameText = data.find((i) => i.name === currentGame).text
    const currGameTextp2 = data.find((i) => i.name === currentGame).textp2

    const wrongRedText = data.find((i) => i.name === currentGame).wrongTextRed
    const wrongText = data.find((i) => i.name === currentGame).wrongPageMessage
    const rightGreenText = data.find((i) => i.name === currentGame).rightTextGreen
    const rightText = data.find((i) => i.name === currentGame).rightPageMessage

    return [gameType, currGameAns, currGameImage, currGameHost, currGameTitle, currGameText, currGameTextp2, wrongRedText, wrongText, rightGreenText, rightText]

  }

  function checkAnsw(ans, currentGame) {

    const [gameType, currGameAns, currGameImage, currGameHost, currGameTitle, currGameText, currGameTextp2, wrongRedText, wrongText, rightGreenText, rightText] = getGameDataByName(currentGame)
    console.log('ans:', currGameAns, ans);

    switch (gameType) {
      case GameTypes.text:
        if (currGameAns.toUpperCase() === ans.toUpperCase()) {
          setSolved(currentGame)
          return true
          // navigate('/correct', { state: { currGameImage, currGameHost } })
        }
        else {
          // navigate('/incorrect', { state: { currGameImage, currGameHost } })
          return false
        }

      case GameTypes.number:
        if (currGameAns.toString() === ans.toString()) {
          setSolved(currentGame)
          return true
          // navigate('/correct', { state: { currGameImage, currGameHost } })
        }
        else {
          // navigate('/incorrect', { state: { currGameImage, currGameHost } })
          return false
        }

      case GameTypes.multipleChoice:
        if (ans) {
          setSolved(currentGame)
          return true
          // navigate('/correct', { state: { currGameImage, currGameHost } })
        }
        // else navigate('/incorrect', { state: { currGameImage, currGameHost } })
        return false


      case GameTypes.drag:
        if (ans) {
          setSolved(currentGame)
          return true

          // navigate('/correct', { state: { currGameImage, currGameHost } })
        }
        else return false
      // navigate('/incorrect', { state: { currGameImage, currGameHost } })


      default:
        throw new Error(`passed ${gameType} as GameType`)
    }

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
        getGameDataByName,

        getFoundLetters,
        finalGameAnswer


      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };