import styles from './Header.module.scss'
import Navbar from './Navbar/Navbar'
import eighteen from '../../image/header/eighteen.svg'
import cont from '../../container.module.css'
import Burger from './Navbar/Burger/Burger'
import { Link } from 'react-router-dom'
export default function Header() {
    const logo = 'https://www.cbc.ca/kids/images/neonbricks_thumb.jpg'
    return (
        <header>
            <div className={cont.container}>
                <div className={styles.headerInfo}>
                    <Link to='/' className={styles.logo}>
                        <img src={logo} alt="logo" />
                    </Link>
                    <Navbar />
                    <Burger />
                    <Link to='/politics' className={styles.ageLogo} title='Данный сайт имеет возратсное ограничение'>
                        <img src={eighteen} alt="ageLogo" />
                    </Link>
                </div>
            </div>
        </header>
    )
}