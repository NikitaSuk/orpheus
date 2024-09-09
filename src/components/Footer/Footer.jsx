import React, { useState } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCompass, faRocket, faScaleBalanced } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const toggleLangMenu = () => {
    setLangMenuOpen(!langMenuOpen);
  }

  return (
    <footer className="flex justify-between flex-col-reverse sm:flex-row w-full border-gray-700 max-w-screen-xl mx-auto border-t select-none whitespace-nowrap overflow-hidden">
      <div className="utility px-5 sm:px-20 py-6 text-sm ml-16 sm:ml-0">
        <div className="dropdown dropdown-top">
          <div tabIndex="0" role="button" className="m-1" onClick={toggleLangMenu}>
            Change Language
          </div>
          {langMenuOpen && 
            (
            <ul tabIndex="0" className="dropdown-content menu bg-base-100 rounded-box z-2 w-52 p-2">
              <LanguageListItem fi_code="de" lng_text="Deutsch" i18n_code="de" />
              <LanguageListItem fi_code="us" lng_text="English" i18n_code="en_us" />
              <LanguageListItem fi_code="es" lng_text="español" i18n_code="es" />
              <LanguageListItem fi_code="fr" lng_text="français" i18n_code="fr" />
              <LanguageListItem fi_code="it" lng_text="italiano" i18n_code="it" />
              <LanguageListItem fi_code="ja" lng_text="日本語" i18n_code="ja" />
              <LanguageListItem fi_code="ko" lng_text="한국인" i18n_code="ko" />
              <LanguageListItem fi_code="pt" lng_text="português" i18n_code="pt" />
              <LanguageListItem fi_code="ru" lng_text="русский" i18n_code="ru" />
              <LanguageListItem fi_code="tr" lng_text="Türkçe" i18n_code="tr" />
              <LanguageListItem fi_code="cn" lng_text="中文" i18n_code="zh_cn" />
              <LanguageListItem fi_code="tw" lng_text="中文(繁體)" i18n_code="zh_tw" />
            </ul>
            )
          }
        </div>
      </div>

      <div className="quick-links grid grid-cols-2 md:grid-cols-4 gap-11 px-5 sm:px-20 py-6 ml-16 sm:ml-0 shadow-md text-left text-sm text-white ">
        {/* products section */}
        <div className="products-container m-3">
          <h3 className="mb-2 font-semibold"><FontAwesomeIcon icon={faRocket} className="mr-1" />{t('Products')}</h3>
          <ul className="list-none p-0">
            <li className="mb-2">
              <a href="/events" className="hover:underline transition-colors duration-300">{t('Events')}</a>
            </li>
            <li className="mb-2">
              <a href="/forum" className="hover:underline transition-colors duration-300">{t('Forum')}</a>
            </li>
            <li className="mb-2">
              <a href="/marketplace" className="hover:underline transition-colors duration-300">{t('Marketplace')}</a>
            </li>
            
          </ul>
        </div>

        {/* company section */}
        <div className="company-container m-3">
          <h3 className="mb-2 font-semibold"><FontAwesomeIcon icon={faBriefcase} className="mr-1" />{t('Company')}</h3>
          <ul className="list-none p-0">
            <li className="mb-2">
              <a href="/about" className="hover:underline transition-colors duration-300">{t('About Us')}</a>
            </li>
            <li className="mb-2">
              <a href="/careers" className="hover:underline transition-colors duration-300">{t('Careers')}</a>
            </li>
            <li className="mb-2">
              <a href="/newsroom" className="hover:underline transition-colors duration-300">{t('Newsroom')}</a>
            </li>
          </ul>
        </div>

        {/* resources section */}
        <div className="resources-container m-3">
          <h3 className="mb-2 font-semibold"><FontAwesomeIcon icon={faCompass} className="mr-1" />{t('Resources')}</h3>
          <ul className="list-none p-0">
            <li className="mb-2">
              <a href="/about" className="hover:underline transition-colors duration-300">{t('College')}</a>
            </li>
            <li className="mb-2">
              <a href="/support" className="hover:underline transition-colors duration-300">{t('Support')}</a>
            </li>
            <li className="mb-2">
              <a href="/newsroom" className="hover:underline transition-colors duration-300">{t('Community')}</a>
            </li>
            <li className="mb-2">
              <a href="/careers" className="hover:underline transition-colors duration-300">{t('Seller')}</a>
            </li>
          </ul>
        </div>

        {/* polices section */}
        <div className="policies-container m-3">
          <h3 className="mb-2 font-semibold"><FontAwesomeIcon icon={faScaleBalanced} className="mr-1" />{t('Policies')}</h3>
          <ul className="list-none p-0">
            <li className="mb-2">
              <a href="/privacy" className="hover:underline transition-colors duration-300">{t('Privacy')}</a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="hover:underline transition-colors duration-300">{t('Contact Us')}</a>
            </li>
            <li className="mb-2">
              <a href="/terms" className="hover:underline transition-colors duration-300">{t('TOS')}</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

const LanguageListItem = ({ fi_code, lng_text, i18n_code }) => {
  return (
    <li
      className="rounded transition duration-300 ease-in-out hover:bg-slate-500 outline-none"
      onClick={() => { i18next.changeLanguage(i18n_code); localStorage.setItem('settings.language', i18n_code); }
}
value = { i18n_code }
  >
  <a>
    <span className={`fi fi-${fi_code}`}></span>{lng_text}
  </a>
    </li >
  );
}

export default Footer;
