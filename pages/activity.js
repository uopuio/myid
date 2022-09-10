import styles from '../styles/Home.module.scss'
import Image from 'next/image';
export default function Activity() {
    return (
        <div className={styles.activity} id={'activity'}>
            <h1 className={styles.secondh1}>Activity</h1>
            <div className={styles.activepo}>
                <img src={'/active.png'} width={504} />
                <img src={'/active2.png'}width={504}/>
            </div>
        </div>
    )
}