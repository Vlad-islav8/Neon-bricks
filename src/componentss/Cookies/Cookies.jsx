import { useEffect, useState } from 'react'
import styles from './Cookies.module.scss'
import Cookies from 'js-cookie'
export default function CookPage() {
    const [banner, setbanner] = useState(false)
    
    useEffect(() => {
    const visit = Cookies.get('visit')
    if (!visit) {
        setTimeout(() => {
            setbanner(true)
        }, 2000);
    } else {
        setbanner(false)
    }
    }, [])

    const hendleAccetp = () => {
        Cookies.set('visit', 'true'), { expires: 365 }
        setbanner(false)
    }

    if (!banner) {
        return null
    }

    
    return (
        <div className={`${styles.cookies}`}>
            <p>Продолжая использовать сайт, вы соглашаетесь на обработку файлов Cookie на условиях, указанных <a href="/politics">здесь...</a> </p>
            <button onClick={hendleAccetp}>Принять</button>
        </div>
    )
}