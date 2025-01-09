import cont from '../../../container.module.css';
import styles from './Playsection.module.scss';
import { Link } from 'react-router-dom';

export default function Playsection() {
    return (
        <article className={styles.articlePlaySection}>
            <div className={cont.container}>
                <div className={styles.playSection}>
                    <h2>Погрузитесь в мир с nano bricks: и играйте прямо сейчас!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nulla blanditiis repellat nostrum odit suscipit, iste accusantium voluptatibus veniam tempore molestiae doloribus iure tempora nisi culpa beatae sit aspernatur ipsam.</p>
                    <div className={styles.playgame}>
                        <Link to='/playgame'>
                            <button>играть...</button>
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    )
}