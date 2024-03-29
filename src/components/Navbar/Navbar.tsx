import React from 'react';
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <div className={s.navbarContainer}>
            <nav className={s.nav}>
                <div className={`${s.dialog} ${s.active}`}>
                    <NavLink to={'/profile'} activeClassName={s.active}>Profile</NavLink>
                </div>
                <div className={`${s.dialog} ${s.active}`}>
                    <NavLink to={'/users'} activeClassName={s.active}>Users</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs'} activeClassName={s.active}>Messages</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/news'} activeClassName={s.active}>News</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/music'} activeClassName={s.active}>Music</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/settings'} activeClassName={s.active}>Settings</NavLink>
                </div>
            </nav>
        </div>

    );
};
