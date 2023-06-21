import React from 'react';
import s from './Actions.module.css';
import {Link} from "react-router-dom";
import ACTION from '../../Img/action.svg';
import CONSOLE from '../../Img/console.png';

const Action = () => {
    return (
        <section className={s.action}>
            <div className={s.topBg}/>
            <div className="container">
                <div className={s.titleBox}>
                    <img src={ACTION} className={s.titleImg}/>
                    <h2 className={s.title}>Играй и выигрывай!</h2>
                </div>
                <div className={s.text}>
                    Играй в <Link to="/" className={s.link}>Cyberpunk 2077</Link> и получи возможность выиграть консоль
                    Xbox Series X или Sony PlayStation 5! Заполни форму ниже и приложи скриншот о покупке игры. Итоги
                    розыгрыша будут подведены 1 февраля. Удачи! ;)
                </div>
                <div className={s.formBox}>
                    <div className={s.formInner}>
                        <form>
                            <input type="text" className={s.name} placeholder="Как тебя зовут?"/>
                            <input type="text" className={s.mail} placeholder="Твой e-mail"/>
                            <div className={s.dropbox}>
                                <Link to="/" className={s.dropLink}>Прикрепить скриншот</Link>
                                <span>.png/.jpg/.pdf</span>
                            </div>
                            <button className={s.btn}>Отправить</button>
                            <div className={s.ok}>
                            <input type="checkbox" className={s.check}/>
                            Согласен на обработку персональных данных</div>
                        </form>
                    </div>
                    <div className={s.imgBox}>
                        <img src={CONSOLE}/>
                    </div>
                </div>
            </div>
            <div className={s.botBg}/>
        </section>
    );
};

export default Action;