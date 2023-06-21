import React from 'react';
import s from './Buy.module.css';
import DISKBG from '../../Img/disk.jpg';
import DISK from '../../Img/disk.svg';
import WBOX from '../../Img/wysiwyg.svg';
import IMGICON from '../../Img/collections.svg';
import PC from '../../Img/PC.svg';
import XBOX from '../../Img/xbox-one-3 logo.svg';
import STADIA from '../../Img/stadia logo.svg';
import PS4 from '../../Img/ps4.svg';
import {Link} from "react-router-dom";

const Buy = () => {
    return (
        <section className={s.buy}>
            <div className={s.left}>
                <img src={DISKBG}/>
            </div>
            <div className={s.right}>
                <div className={s.titleInner}>
                    <div className={s.title}>Купить игру Cyberpunk 2077</div>
                </div>
                <div className={s.complect}>
                    <div className={s.subtitle}>
                        В комплект входит:
                    </div>
                    <div className={s.items}>
                        <ul>
                            <li className={s.item}><img src={DISK}/>Футляр с игровыми дисками</li>
                            <li className={s.item}><img src={WBOX}/>Футляр с кодом для загрузки игры и дисками (pc)</li>
                            <li className={s.item}><img src={IMGICON}/>Справочник с информацией об игровом мире</li>
                        </ul>
                    </div>
                    <div className={s.platform}>
                        <div className={s.subtitle}>
                            Выберите платформу:
                        </div>
                        <div className={s.platformItems}>
                            <div className={s.platformInner}>
                                <div className={s.platformItem}><Link to="/"><img src={PC}/></Link></div>
                                <div className={s.platformItem}><Link to="/"><img src={XBOX}/></Link></div>
                            </div>
                            <div className={s.platformInner}>
                                <div className={s.platformItem}><Link to="/"><img src={STADIA}/></Link></div>
                                <div className={s.platformItem}><Link to="/"><img src={PS4}/></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Buy;