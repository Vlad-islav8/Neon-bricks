import styles from './Security.module.scss'
import eightLogo from '../../image/header/eighteen.svg'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

export default function Security() {
    const [banner, setbanner] = useState(true)

    useEffect(() => {
        const agevVrification = Cookies.get('agevVrification')
        if (!agevVrification) {
                setbanner(true)
        } else {
            setbanner(false)
        }
    }, [])

    const hendleAccetp = () => {
        Cookies.set('agevVrification', 'true'), { expires: 365 }
        setbanner(false)

    }

    if (!banner) {
        return null
    }

    const handleFalse = () => {
        Cookies.set('agevVrification', 'false'), { expires: 365 }
        setbanner(false)

    }

    return (
        <div className={`${styles.security}`}>
            <div className={styles.info}>
                <div className={styles.imageBlock}>
                    <img src={eightLogo} alt="18+" />
                </div>
                <h2>Внимание данный сайт имеет возрастное ограничени пожалуйста поддтвердите ваш возраст</h2>
                <div className={styles.buttons}>
                    <button onClick={hendleAccetp}>Да мне есть 18</button>
                    <a href="/politics" onClick={handleFalse}>Нет я младше</a>
                </div>
            </div>

        </div>
    )
}