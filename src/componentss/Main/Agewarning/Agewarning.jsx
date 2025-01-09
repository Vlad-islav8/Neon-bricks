import cont from '../../../container.module.css';
import styles from './Agewarning.module.scss';
import ageLogo from '../../../image/header/eighteen.svg'
export default function Agewarning() {
    return (
        <article className={styles.articleAgewarning}>
            <div className={cont.container}>
                <div className={styles.Agewarning}>
                    <div className={styles.info}>
                        <h2>Наши игры исключительно для взрослых</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolore aut officiis recusandae voluptatem ut delectus quisquam corrupti perspiciatis veritatis nihil eius soluta in adipisci enim odit harum debitis corporis autem, ratione quae laborum deleniti quasi aliquam! Tempora cupiditate ullam quaerat voluptate obcaecati nulla, saepe quidem? Quisquam dolores laborum quo!</p>
                        <h3>18+ www.gamblingtherapy.org – Gambling Therapy – это всемирная онлайн-служба поддержки, предлагающая консультации людям, на которых азартные игры негативно повлияли.</h3>
                        <h3>www.gamblersanonymous.org/ga – Анонимные игроки предлагают консультации по телефону или лично всем, кто пострадал от азартных игр.</h3>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src={ageLogo} alt="18+" />
                    </div>
                </div>
            </div>
        </article>
    )
}