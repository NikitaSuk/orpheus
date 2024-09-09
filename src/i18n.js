import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import translationENUS from './assets/locales/en_us/translation.json';
import translationZHCN from './assets/locales/zh_cn/translation.json';
import translationZHTW from './assets/locales/zh_tw/translation.json';
import translationES from './assets/locales/es/translation.json';
import translationFR from './assets/locales/fr/translation.json';
import translationDE from './assets/locales/de/translation.json';
import translationRU from './assets/locales/ru/translation.json';
import translationIT from './assets/locales/it/translation.json';
import translationTR from './assets/locales/tr/translation.json';
import translationPT from './assets/locales/pt/translation.json';
import translationJA from './assets/locales/ja/translation.json';
import translationKO from './assets/locales/ko/translation.json';

const resources = {
  en_us: { translation: translationENUS },
  zh_cn: { translation: translationZHCN },
  zh_tw: { translation: translationZHTW },
  es: { translation: translationES },
  fr: { translation: translationFR },
  de: { translation: translationDE },
  ru: { translation: translationRU },
  it: { translation: translationIT },
  tr: { translation: translationTR },
  pt: { translation: translationPT },
  ja: { translation: translationJA },
  ko: { translation: translationKO },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    debug: true,
    lng: localStorage.getItem('settings.language') || 'en_us',
  });

export default i18n;