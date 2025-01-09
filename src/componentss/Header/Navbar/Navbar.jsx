import styles from './Navbar.module.scss'
export default function Navbar() {
    return(
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <a href="/">Главная</a>
                </li>
                <li>
                    <a href="/politics">Политика конфедециальности</a>
                </li>
            </ul>
        </nav>
    )
}