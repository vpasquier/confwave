import React from 'react';
import {useTranslation} from "react-i18next";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
/********* CUSTOM COMPONENTS *******/
import {Landing} from "./components/Landing/Landing";
import {Login} from "./components/Login/Login";
import {Account} from "./components/Account/Account";
import {Sea} from "./components/Sea/Sea";
import {Support} from "./components/Support/Support";
import {Wave} from "./components/Wave/Wave";
/********* STYLES *********/
import './App.css';
import './assets/css/bootstrap.css'
import './assets/css/gaia.css'
import './assets/css/fonts/pe-icon-7-stroke.css'

const App = () => {

  const {t, i18n} = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (<>
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
          name="viewport"/>
    <link href="https://fonts.googleapis.com/css?family=Cambo|Poppins:400,600" rel="stylesheet"
          type="text/css"/>
    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"
          rel="stylesheet"/>
    <nav className="navbar navbar-default navbar-transparent navbar-fixed-top" color-on-scroll={200}>
      <div className="container">
        <div className="navbar-header">
          <button className="btn btn-sm btn-round btn-black btn-fill"
                  onClick={() => changeLanguage("es")}>Es
          </button>
          <button className="btn btn-sm btn-round btn-black btn-fill"
                  onClick={() => changeLanguage("en")}>En
          </button>
          <button className="btn btn-sm btn-round btn-black btn-fill"
                  onClick={() => changeLanguage("fr")}>Fr
          </button>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right navbar-uppercase">
            <li>
              <a href="/login"
                 className="btn btn-round btn-black btn-fill btn-lg">{t('login.register')}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}>
        </Route>
        <Route path="/login" element={<Login/>}>
        </Route>
        <Route path="/support" element={<Support/>}>
        </Route>
        <Route path="/sea" element={<Sea/>}>
        </Route>
        <Route path="/account" element={<Account/>}>
        </Route>
        <Route path="/wave" element={<Wave/>}>
        </Route>
        <Route path="*" element={<Landing/>} />
      </Routes>
    </BrowserRouter>
  </>);
}

export default App;