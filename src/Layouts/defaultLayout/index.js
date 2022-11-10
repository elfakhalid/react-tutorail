import React from 'react'
import { Link, Outlet } from "react-router-dom";
import styles from './defaultLayout.module.scss'
function DefaultLayout({ children }) {
    return (
        <>
            <nav className={styles.navigation}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/contact">contact</Link></li>
                </ul>
            </nav>
            <div className={styles.content}>
                <Outlet />
            </div>
            <footer className={styles.footer}>this is footer</footer>
        </>
    )
}

export default DefaultLayout