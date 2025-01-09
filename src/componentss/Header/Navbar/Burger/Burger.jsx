import { useState } from 'react'
import styles from './Burger.module.scss'
export default function Burger() {
    const [isActive, setIssActive] = useState(null)
    function handleClick() {
        if(isActive == styles.active) {
            setIssActive(null)
        } else {
            setIssActive(styles.active)
        }
    }
    return (
        <button className={styles.burgerContainer} onClick={handleClick}>
            <div className={styles.burger} >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`${styles.burgerContent} ${isActive}`}>
                <ul>
                    <li>
                        <a href="index.html">Главная</a>
                    </li>
                    <li>
                        <a href="#politSecurity">Политика конфедециальности</a>
                    </li>
                </ul>
            </div>
        </button>
    )
}