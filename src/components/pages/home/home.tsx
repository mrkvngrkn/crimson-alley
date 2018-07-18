import * as React from 'react';
import './home.css';

import caBg from './ca2.jpg';

class Home extends React.Component {
  public render() {
    return (
      <React.Fragment>
          <header className="header default">
              <div className=" left-part">
                  <a className="logo scroll" href="#wrapper">
                      <h2 className="mb-0 uppercase">Crimson Alley</h2>
                  </a>
              </div>
              <div className="right-part">
                  <nav className="main-nav">
                      <div className="toggle-mobile-but">
                          <a href="#" className="mobile-but" >
                              <div className="lines" />
                          </a>
                      </div>
                      <ul className="main-menu list-inline">
                          <li><a className="scroll list-inline-item" href="#wrapper">Home</a></li>
                          <li><a className="scroll list-inline-item" href="#about">about</a></li>
                          <li><a className="scroll list-inline-item" href="#discography">discography</a></li>
                          <li><a className="scroll list-inline-item" href="#band">Band</a></li>
                          <li><a className="scroll list-inline-item" href="#tour">Tours</a></li>
                          <li><a className="scroll list-inline-item" href="#gallery">Gallery</a></li>
                          <li><a className="scroll list-inline-item" href="#contact">Contact</a></li>
                          <li>
                              <ul className="block-helper list-inline">
                                  <li className="list-inline-item"><a href="#"><i className="icon-shop" /></a></li>
                                  <li className="list-inline-item"><span className="search-ico"><i className="icon-search" /></span></li>
                              </ul>
                          </li>
                      </ul>
                  </nav>
              </div>
          </header>
          <section className="hero">
              <div className="background-img overlay zoom">
                  <img src={caBg} alt="" />
              </div>
              <div className="container hero-content">
                  <div className="row">
                      {/*<div className="col-sm-12 text-center">*/}
                          {/*<div className="inner-hero">*/}
                              {/*<div className="back-rect" />*/}
                              {/*<h1 className="large text-white uppercase mb-0">welcome to mousiqua</h1>*/}
                              {/*<h5 className="mb-0 text-white uppercase">Music Band and Musician Bootstrap Template</h5>*/}
                              {/*<div className="front-rect" />*/}
                          {/*</div>*/}
                      {/*</div>*/}
                  </div>
              </div>
          </section>
      </React.Fragment>
    );
  }
}

export default Home;
