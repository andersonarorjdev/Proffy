import React from 'react';
import {Link} from 'react-router-dom';

import BackIcon from '../../assets/images/icons/back.svg';
import Logo from '../../assets/images/logo.svg';
import '../../assets/styles/global.css';

import './styles.css';

interface PageHeaderPropos {
    title: string;
    description?:string;
}

const Pageheader: React.FunctionComponent<PageHeaderPropos> = (props) => {
    return(
        <header className="page-header">
        <div className="top-bar-container">
            <Link to="/">
                <img src={BackIcon} alt="voltar"/>
            </Link>
            <img src={Logo} alt=""/>
        </div>
        <div className="header-content">
            <strong>{props.title}</strong>
            {props.description}
            {props.children}
        </div>
    </header>
    )
}

export default Pageheader;