import React from 'react';
import s from './Hp.module.css';
import HP from '../../Img/hp.svg';
import MONITOR from '../../Img/monitor.png';
import X from '../../Img/x.svg';
import LOGO from '../../Img/Cyberpunk_2077_logo 1.png';
import PALITRA from '../../Img/palitra.svg';
import STAR from '../../Img/star.svg';
import CUBE from '../../Img/cube.svg';
import {Link} from "react-router-dom";

const Hp = () => {
    return (
        <section className={s.hp}>
            <div className="container">
                <div className={s.inner}>
                    <div className={s.imgInner}>
                        <div className={s.hero}>
                            <img src={MONITOR}/>
                        </div>
                        <div className={s.logo}>
                            <img src={HP}/> <img src={X}/> <img src={LOGO}/>
                        </div>
                    </div>
                    <div className={s.infoInner}>
                        <div className={s.titleInner}>
                            <h2 className={s.title}>Полное погружение вместе с HP</h2>
                            <p className={s.text}>Погрузись в современные экшен-игры с реалистичным изображением с
                                помощью монитора с диагональю 23,8 дюйма, созданном для отображения максимально
                                насыщенных цветов. Успевай реагировать на любые события с временем отклика 1 мс и
                                частотой в 144 Гц!</p>
                            <div className={s.items}>
                                <div className={s.item}><img src={PALITRA}/> Яркие насыщенные цвета</div>
                                <div className={s.item}><img src={STAR}/> Кристальная четкость изображения</div>
                                <div className={s.item}><img src={CUBE}/> Быстрые движения и плавный геймплей</div>
                            </div>

                            <Link to="/" className={s.link}>
                                Подробнее
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hp;