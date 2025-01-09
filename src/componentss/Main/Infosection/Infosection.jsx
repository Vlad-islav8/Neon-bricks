import cont from '../../../container.module.css'
import styles from './Infosection.module.scss'
export default function Infosection() {
    return (
        <article className={styles.articleinfoSection}>
            <div className={cont.container}>
                <div className={styles.infoSection}>
                    <div className={styles.image}>
                        <img src="https://avatars.mds.yandex.net/i?id=1768d2f2ddbf18e10ae15bb3ef18ba691a995d80-5288661-images-thumbs&n=13" alt="nano bricks" />
                    </div>
                    <div className={styles.info}>
                        <h2>Присоединяйтесь к нам сегодня и играй совершенно бесплатно!</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eius repellendus id accusamus veritatis quos dignissimos in, esse blanditiis! Necessitatibus nostrum doloremque qui vel sit repellendus aspernatur dolorem, cumque mollitia at eius natus voluptatibus quasi libero unde porro eveniet, blanditiis soluta dolore et consequuntur earum maiores architecto enim. Corporis, recusandae!</p>
                    </div>
                </div>
            </div>
        </article>
    )
}