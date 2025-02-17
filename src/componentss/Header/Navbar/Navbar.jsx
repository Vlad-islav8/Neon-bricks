import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'
export default function Navbar() {
    return(
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <Link to="/">Главная</Link>
                </li>
                <li>
                    <Link to="/politics">Политика конфедециальности</Link>
                </li>
            </ul>
        </nav>
    )
}