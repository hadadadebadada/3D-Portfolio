import React, { useState } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import English from './languages/en-US.json';
import Deutsch from './languages/de-DE.json';
import Spanish from './languages/es-MX.json';
import Russisch from './languages/ru-RU.json';
import Navbar from './components/navbar/Navbar';



import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Table from './PeriodicTable';

const local = navigator.language;

let lang = Deutsch;

if (local === "en-US") {
    lang = English;
}
if (local === "es-MX") {
    lang = Spanish;
}
if (local === "de-DE") {
    lang = Deutsch;
}
if (local === "ru-RU") {
    lang = Russisch;
}


export const Context = React.createContext();

function App() {

  const [locale, setLocale] = useState(local);


  const [messages, setMessages] = useState(lang);

function selectLang(e) {
  if (e && e.target && e.target.value) {
    const newLocale = e.target.value;
    setLocale(newLocale);
    if (newLocale === "de-DE") {
      setMessages(Deutsch);
    }
    if (newLocale === "es-MX") {
      setMessages(Spanish);
    }
    if (newLocale === "en-US") {
      setMessages(English);
    }
    if (newLocale === "ru-RU") {
      setMessages(Russisch)
    }
  }
}

  return (
    <Context.Provider value={{ locale, selectLang }}>
              <IntlProvider messages={messages} locale={locale}>
{/*       <Router>
        <Navbar></Navbar>
        </Router> */}
        <Table locale={locale} selectLang={selectLang}></Table>
        {/* <div>
          <h1>
            <FormattedMessage id="app.header" defaultMessage="Hello!" />
          </h1>
          <select value={locale} onChange={selectLang}>
            <option value="en-US">English</option>
            <option value="de-DE">Deutsch</option>
            <option value="es-MX">Español</option>
            <option value="ru-RU">Русский</option>
          </select>
        </div> */}
      </IntlProvider>
    </Context.Provider>
  );
}

export default App;