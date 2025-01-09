import cont from '../../../container.module.css';
import styles from './PrioretetsSection.module.scss';

export default function PrioretetsSection() {
    return (
        <article className={styles.articlePrioretetsSection}>
            <div className={cont.container}>
                <div className={styles.prioretetsSection}>
                    <h2>О нашей игре</h2>
                    <div className={styles.prioretetsGrid}>
                        <div className={styles.prioretetsItem}>
                            <h3>Увлекательный геймплей</h3>
                            <p>Погрузитесь в захватывающий мир головоломок с нано-блоками, где каждый уровень - это новый вызов вашей логике и креативности.</p>
                        </div>
                        <div className={styles.prioretetsItem}>
                            <h3>Развитие мышления</h3>
                            <p>Игра способствует развитию пространственного мышления и помогает улучшить навыки решения сложных задач в увлекательной форме.</p>
                        </div>
                        <div className={styles.prioretetsItem}>
                            <h3>Доступность</h3>
                            <p>Играйте в любое время и в любом месте - наша игра доступна на всех устройствах и не требует установки.</p>
                        </div>
                        <div className={styles.prioretetsItem}>
                            <h3>Постоянные обновления</h3>
                            <p>Мы регулярно добавляем новые уровни и механики, чтобы игра оставалась интересной и захватывающей.</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}