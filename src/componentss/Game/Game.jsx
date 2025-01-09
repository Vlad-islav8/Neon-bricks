import cont from '../../container.module.css'
import styles from './Game.module.scss'
export default function Game() {
    return (
        <main className={styles.game}>
            <div className={cont.container}>
                <div className={styles.frame}>
                    <iframe src="https://www.jopi.com/gam/neon-bricks/" frameborder="0" scrolling="no"  ></iframe>
                </div>
            </div>
        </main>
    )
}