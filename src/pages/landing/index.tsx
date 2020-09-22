import React from 'react';

import {Link} from 'react-router-dom';

import LogoImg from '../../assets/images/logo.svg';
import HeroImg from '../../assets/images/landing.svg';
import StudyIcon from '../../assets/images/icons/study.svg';
import GiveClasses  from '../../assets/images/icons/give-classes.svg';
import PurpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';
function Landing(){
    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={LogoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos Online</h2>
                </div>
                <img
                src={HeroImg}
                alt="Plataforma de estudos online"
                className="hero-img"
                />

                <div className="buttons-container">
                    <Link to="./study" className="study">
                        <img 
                        src={StudyIcon} 
                        alt="Estudar"
                        />
                        Estudar
                    </Link>
                    <Link to="./give-classes" className="give-classes">
                        <img src={GiveClasses} alt="Dar aulas"/>
                        Dar Aulas
                    </Link>
                </div>
                <span className="total-connections">
                        Total de 200 conexoes ja realizadas <img src={PurpleHeartIcon} alt=""/>
                </span>
            </div>
        </div>
    )
}

export default Landing;