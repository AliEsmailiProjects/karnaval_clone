import React from 'react';
import './App.css';
import "./Header/Header.css";
import "./main_images/main-image.css"
import './sidebar/sidebar.css';
import './main_section/main-section.css';
import Header from './Header/Header';
import MainIamges from './main_images/mainImages';
import Sidebar_left from './sidebar/sidebar_left';
import Sidebar_right from './sidebar/sidebar_right';
import Main_section from './main_section/main_section';
import Footer from './Footer/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import '@material/react-material-icon/dist/material-icon.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BackToTop from "react-back-to-top-button";
import MaterialIcon from '@material/react-material-icon';
import { Container, Button, Link } from 'react-floating-action-button';
var FontAwesome = require('react-fontawesome');

function App() {
  return (
    <div className="App">
     <Header></Header>
     
     <MainIamges></MainIamges>
     <div class="row">
        <Sidebar_left></Sidebar_left> 
        <Main_section></Main_section>
        <Sidebar_right></Sidebar_right>
     </div>
     <div class="row">
     <Footer></Footer>
     </div>
     <BackToTop showAt={100} speed={1500} easing="easeOutSine">
              <Button
                  className="fab-item btn btn-link btn-lg text-white backtoUp"
                  icon="fas fa-chevron-up"/>
        </BackToTop>
    </div>
  );
}

export default App;
