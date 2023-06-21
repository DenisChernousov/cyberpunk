import React from 'react';
import s from './Footer.module.css';
import LOGO from '../../Img/Cyberpunk_2077_logo 1.png';
import LOGORIGHT from '../../Img/CD_Projekt_logo 1.svg';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className="container">
                <div className={s.inner}>
                    <div className={s.left}>
                        <img src={LOGO}/><img src={LOGORIGHT}/>
                    </div>
                    <div className={s.right}>
                        <ul>
                            <li><Link to="/">Лицензия</Link></li>
                            <li><Link to="/">Политика конфиденциальности</Link></li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className={s.bottom}>
              <p>  CD PROJEKT®, Cyberpunk®, Cyberpunk 2077®</p>
            </div>
        </footer>
    );
};

export default Footer;