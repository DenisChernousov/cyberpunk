import React from 'react';
import s from './Change.module.css';
import {Link} from "react-router-dom";
import img1 from '../../Img/img1.png';
import img2 from '../../Img/img2.png';
import img3 from '../../Img/img3.png';

const Change = () => {
    return (
        <section className={s.change}>
            <div className="container">
                <div className={s.title}>
                    Найт-Сити изменит тебя навсегда!
                </div>
                <div className={s.text}>
                    <Link className={s.link} to="/">Cyberpunk 2077</Link> — приключенческая ролевая игра, действие
                    которой происходит в мегаполисе Найт-Сити, где власть, роскошь и модификации тела ценятся выше
                    всего. Ты играешь за V, наёмника в поисках устройства, позволяющего обрести бессмертие. Ты сможешь
                    менять киберимпланты, навыки и стиль игры своего персонажа, исследуя открытый мир, где твои поступки
                    влияют на ход сюжета и всё, что тебя окружает.
                </div>
                <div className={s.content}>
                    <div className={s.left}>
                        <div className={s.leftImg}>
                            <img src={img1}/>
                        </div>
                        <div className={s.leftImg}>
                            <img src={img2}/>
                        </div>
                    </div>
                    <div className={s.right}>
                        <img src={img3}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Change;