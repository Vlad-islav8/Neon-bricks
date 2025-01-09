import cont from '../../container.module.css'
import Agesection from './Agesection/Agesection'
import Agewarning from './Agewarning/Agewarning'
import Infosection from './Infosection/Infosection'
import styles from './Main.module.scss'
import Playsection from './Playsection/Playsection'
import PrioretetsSection from './PrioretetsSection/PrioretetsSection'
export default function Main() {
    return (
        <main className={styles.main}>
                <Agesection />
                <Infosection />
                <Playsection />
                <PrioretetsSection />
                <Agewarning />
        </main>
    )
}