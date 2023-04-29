import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import HTTPApi from 'i18next-http-backend'

// import translationEn from '/kinderteurgkomdag/public/locales/en/translation.json';
// import translationFr from '../../public/locales/fr/translation.json';
// import translationNl from '../../public/locales/nl/translation.json';


i18next
    .use(initReactI18next)
    // .use(I18nextBrowserLanguageDetector)
    .use(HTTPApi)
    .init({
        // resources: {
        //     en: { translation: translationEn },
        //     fr: { translation: translationFr },
        //     nl: { translation: translationNl },
        // },
        fallbackLng: 'nl',
        interpolation: {
            escapeValue: false
        }
    })


export default i18next