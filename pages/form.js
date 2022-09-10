import styles from '../styles/Home.module.scss'
import Image from 'next/image';
export default function Form() {
    return (
        <div className={styles.form}>
            <div className={styles.icons}>
                <img src={'/insta.png'}  width={70} height={70}/>
                <img src={'/twiter.png'} width={70} height={70} />
                <img src={'linked.png'}  width={70} height={70}/>
            </div>
            <div>
                <address className={styles.address}>Copyright (c) 石倉圭悟のウェブサイト All Rights Reserved.</address>
            </div>
        </div>
    )}