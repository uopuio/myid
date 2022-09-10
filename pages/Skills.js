import styles from '../styles/Home.module.scss'
import Image from 'next/image';
export default function Skills() {
    return (
        <div className={styles.skills} id={'skills'}>
          <div className={styles.firsth1}>Skills</div>
          <div className={styles.items}>
            <div className={styles.explan}>
                <div className={styles.title}>
                    Web開発スキル
                </div>
                <div className={styles.ptext}>
                html css などのマークアップ言語はもちろん<br/>nextjsでの開発が可能です。
                </div>
            </div>
            <img src={'/man_working.png'} height={500} width={250} className={styles.exphoto}/>
          </div>
          <div className={styles.items2}>
            <img src={'/Computer (1).png'} height={400} width={400} className={styles.exphoto2}/>
            <div className={styles.explan2}>
                <div className={styles.title}>
                UIデザイン
                </div>
                <div className={styles.ptext2}>
                グラスモーフィズムなどを活用した。<br/>モダンなUIデザインを提供いたします。
                </div>
            </div>
          </div>
          <div className={styles.items3}>
            <div className={styles.explan3}>
                <div className={styles.title}>
                止めない学習
                </div>
                <div className={styles.ptext}>
                デザインやコーディングといった分野にとらわれず。お客様に役立てるよう様々なスキルを習得していきます。
                </div>
            </div>
            <img src={'/Books.png'} height={266} width={400} className={styles.exphoto3}/>
          </div>
        </div>
    )}