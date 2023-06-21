import React from 'react';
import {Link} from "react-router-dom";
import s from './Header.module.css';
import LOGO from '../../Img/logo.svg';
import YT from '../../Img/youtube logo.svg';
import VK from '../../Img/vk logo.svg';
import FB from '../../Img/facebook-rect logo.svg';
import TW from '../../Img/twitter-square logo.svg';
import TC from '../../Img/twitch logo.svg';
import INST from '../../Img/instagram-square logo.svg';


const Header = () => {
    return (
        <header className={s.header} >
           <div className="container">
               <div className={s.inner}>
                   <div className={s.top}>
                       <div className={s.logo}>
                           <img className={s.logoImg} src={LOGO}/>
                       </div>
                       <div className={s.social}>
                           <ul>
                               <li><Link className={s.socialLink} to="/"><img src={YT}/></Link></li>
                               <li><Link className={s.socialLink} to="/"><img src={VK}/></Link></li>
                               <li><Link className={s.socialLink} to="/"><img src={FB}/></Link></li>
                               <li><Link className={s.socialLink} to="/"><img src={TW}/></Link></li>
                               <li><Link className={s.socialLink} to="/"><img src={TC}/></Link></li>
                               <li><Link className={s.socialLink} to="/"><img src={INST}/></Link></li>
                           </ul>
                       </div>
                   </div>
                   <div className={s.bottom}>
                       <div className={s.info}>
                           <p className={s.text}>Доступно на всех платформах
                           </p>
                           <Link className={s.link} to="/">
                               Узнать больше
                           </Link>
                       </div>
                   </div>
               </div>
           </div>
        </header>
    );
};

export default Header;