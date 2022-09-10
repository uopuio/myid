import styles from '../styles/Home.module.scss'
import Image from 'next/image';
export default function About() {
    return (
      <div className={styles.about} id={'about'}>
        <div className={styles.top}>
         <h1>
        About me
      </h1>
        </div>
      <div className={styles.card}>
        <div className={styles.subcard}></div>
        <div className={styles.glass}>
            <img src={'/face.png'} width={177}/>
            <div className={styles.cardhead}>名前　石倉 圭悟<br/>生年月日　2002年11月29日</div>
            <div className={styles.cardphara}>iU-情報経営イノベーション専門職大学2年生<br/>startup委員会メディア担当代表<br/>株式会社Sybers マークアップエンジニア
</div>
        </div>
      </div>
      </div>
    )
}