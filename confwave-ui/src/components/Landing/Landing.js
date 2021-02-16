import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
/********* STYLES *********/
import "../../App.css";
import '../../assets/css/bootstrap.css'
import '../../assets/css/gaia.css'
import '../../assets/css/fonts/pe-icon-7-stroke.css'
/********* IMAGES *********/
import image1 from '../../assets/img/firstImage.jpg'
import image2 from '../../assets/img/secondImage.jpg'
import image3 from '../../assets/img/thirdImage.jpg'
import face1 from '../../assets/img/faces/face_1.jpg'
import face2 from '../../assets/img/faces/face_2.jpg'
import face3 from '../../assets/img/faces/face_3.jpg'

const firstImage = {backgroundImage: `url('${image1}')`};
const secondImage = {backgroundImage: `url('${image2}')`};
const thirdImage = {backgroundImage: `url('${image3}')`};

export const Landing = () => {
  const [quote, setQuote] = useState(0);

  useEffect(() => {
    const number = Math.floor((Math.random() * 4) + 1);
    setQuote(`quote${number}`);
  }, []);

  const {t} = useTranslation();

  return (<>
      <div className="section section-header">
        <div className="parallax filter filter-color-red">
          <div className="image" style={firstImage}>
          </div>
          <div className="container">
            <div className="content">
              <div className="title-area">
                <h1 className="title-modern">Conf Wave</h1>
                <div className="separator line-separator">♦</div>
                <h3>{t('baseline')}</h3>
              </div>

              <div className="button-get-started">
                <a href="/login" className="btn btn-round btn-black btn-fill btn-lg">
                  {t('button.try')}
                </a>
              </div>
              <p>
                <i>
                  {t(`${quote}`)}
                </i>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="title-area">
              <h2>{t('how.work')}</h2>
              <div className="separator separator-danger">✻</div>
              <p className="description">{t('how.work.definition')}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="info-icon">
                <div className="icon text-danger">
                  <i className="pe-7s-edit"/>
                </div>
                <h3>{t('Choose')}</h3>
                <p className="description">{t('Choose.message')}</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info-icon">
                <div className="icon text-danger">
                  <i className="pe-7s-light"/>
                </div>
                <h3>{t('Put your ideas')}</h3>
                <p className="description">{t('ideas.message')}</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info-icon">
                <div className="icon text-danger">
                  <i className="pe-7s-note2"/>
                </div>
                <h3>{t('Get the report')}</h3>
                <p className="description">{t('report.message')}</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info-icon">
                <div className="icon text-danger">
                  <i className="pe-7s-paper-plane"/>
                </div>
                <h3>{t('Share')}</h3>
                <p className="description">{t('share.message')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section section-our-team-freebie">
        <div className="parallax filter filter-color-black">
          <div className="image" style={secondImage}>
          </div>
          <div className="container">
            <div className="content">
              <div className="row">
                <div className="title-area">
                  <h2>{t('Why this tool?')}</h2>
                  <div className="separator separator-danger">✻</div>
                  <p className="description">{t('why.message.1')}</p>
                  <p className="description">{t('why.message.2')}</p>
                </div>
              </div>
              <div className="team">
                <div className="row">
                  <div className="col-md-10 col-md-offset-1">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="card card-member">
                          <div className="content">
                            <div className="avatar avatar-danger">
                              <img alt="..." className="img-circle" src={face1}/>
                            </div>
                            <div className="description">
                              <h3 className="title">David</h3>
                              <p className="small-text">{t('Executive')}</p>
                              <p className="description">
                                {t('executive.message')}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card card-member">
                          <div className="content">
                            <div className="avatar avatar-danger">
                              <img alt="..." className="img-circle" src={face2}/>
                            </div>
                            <div className="description">
                              <h3 className="title">{t('Andrew')}</h3>
                              <p className="small-text">{t('Project Manager')}
                              </p>
                              <p className="description">
                                {t('manager.message')}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card card-member">
                          <div className="content">
                            <div className="avatar avatar-danger">
                              <img alt="..." className="img-circle" src={face3}/>
                            </div>
                            <div className="description">
                              <h3 className="title">Michelle</h3>
                              <p className="small-text">Developer</p>
                              <p className="description">
                                {t('developer.message')}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="title-area">
              <h5 className="subtitle text-gray">{t('Here is')}</h5>
              <h2>{t('Your Journey')}</h2>
              <div className="separator separator-danger">✻</div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="info-icon">
                <div className="icon text-danger">
                  <i className="pe-7s-gift"/>
                </div>
                <h3>{t('Use it for free')}</h3>
                <p className="description">{t('free.message')}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="info-icon">
                <div className="icon text-danger">
                  <i className="pe-7s-cart"/>
                </div>
                <h3>{t('Pay for more')}</h3>
                <p className="description">{t('pay.message')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section section-small section-get-started">
        <div className="parallax filter">
          <div className="image" style={thirdImage}>
          </div>
          <div className="container">
            <div className="title-area">
              <h2 className="text-white">{t('contact.need.us')}</h2>
              <div className="separator line-separator">♦</div>
              <p className="description">{t('happy.message')}</p>
            </div>
            <div className="button-get-started">
              <a href="gaia" className="btn btn-danger btn-fill btn-lg">{t('Contact Us')}</a>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer footer-big footer-color-black" data-color="black">
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-sm-3">
              <div className="info">
                <h5 className="title">{t('Meeting Review')}</h5>
                <nav>
                  <ul>
                    <li>
                      <a href="/">{t('Home')}</a></li>
                    <li>
                      <a href="/support">{t('About Us')}</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 col-sm-3">
              <div className="info">
                <h5 className="title">{t('Help and Support')}</h5>
                <nav>
                  <ul>
                    <li>
                      <a href="/support">{t('Contact Us')}</a>
                    </li>
                    <li>
                      <a href="/support">{t('Terms &amp; Conditions')}</a>
                    </li>
                    <li>
                      <a href="/support">{t('Cancel Account')}</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-md-2 col-md-offset-1 col-sm-3">
              <div className="info">
                <h5 className="title">{t('Follow us on')}</h5>
                <nav>
                  <ul>
                    <li>
                      <a href="" className="btn btn-social btn-facebook btn-simple">
                        <i className="fa fa-facebook-square"/> Facebook
                      </a>
                    </li>
                    <li>
                      <a href="" className="btn btn-social btn-twitter btn-simple">
                        <i className="fa fa-twitter"/> Twitter
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <hr/>
          <div className="copyright">
            © Conf Wave, made with <i className="pe-7s-like"/> in NYC
          </div>
        </div>
      </footer>
    </>
  );
};