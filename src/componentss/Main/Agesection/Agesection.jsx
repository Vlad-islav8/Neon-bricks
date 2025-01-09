import cont from '../../../container.module.css'
import styles from './Agesection.module.scss'
import ageLogo from '../../../image/header/eighteen.svg'
export default function Agesection() {
    return (
        <article className={styles.articleageSection}>
            <div className={cont.container}>
                <div className={styles.ageSection}>
                    <div className={styles.info}>
                        <img src={ageLogo} alt="18+" />
                        <h2>Играйте с умом, игра исключительно для взрослых</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum veniam debitis soluta illo nesciunt, rerum expedita, sed ullam sapiente nihil beatae fuga error. Provident eaque officiis dolores maxime dignissimos? Cumque explicabo molestiae voluptatibus aperiam inventore incidunt repellat atque minus qui consequuntur, possimus sint illum doloribus ea magni nihil praesentium ratione!</p>
                        <h3>18+ www.gamblingtherapy.org – Gambling Therapy – это всемирная онлайн-служба поддержки, предлагающая консультации людям, на которых азартные игры негативно повлияли.</h3>
                        <h3>www.gamblersanonymous.org/ga – Анонимные игроки предлагают консультации по телефону или лично всем, кто пострадал от азартных игр.</h3>
                    </div>
                </div>
            </div>
        </article>
    )
}