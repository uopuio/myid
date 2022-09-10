import styles from '../styles/Home.module.scss'
import Image from 'next/image';
export default function Header() {
    return (
    <div className={styles.headback} id={'header'}>
    
      <div className={styles.header}>
        <div className={styles.nav}>
            <div className={styles.logo}>
                <h1><a href={'#'}>keigo@</a></h1>
            </div>
             <div className={styles.bar}>
                <div><a href={'#about'}>About</a></div>
                <div><a href={'#activity'}>Activity</a></div>
                <div><a href={'#skills'}>Skills</a></div>
             </div>
           <div className={styles.button}>
             <div><a href={'https://docs.google.com/forms/d/e/1FAIpQLSctsFcawDBM88sqD2wkmswz3DvnoGVo0gKjyLfKZ6oHRfhqAw/viewform'}>
             お問い合わせ
             </a></div>
            </div>

        </div>
       <div className={styles.pad}>
        <div className={styles.circle}>
         <div>
         <img src={'/face.png'} width={145} height={175}></img>

          </div> 
        </div>     
        </div> 
        <div className={styles.text}>
          <h1><span className={styles.name}>石倉</span>圭悟</h1>
          <p>web系エンジニア</p>
          <p>デザイナー</p>
        </div>
      </div>
        <div className={styles.back}>
          <img src={'/header.png'}></img>
        </div>
                          {/* <div className={styles.back} style={{width: '100%', height: '500px'}}>
                          <Image src={'/header.png'}layout="fill" className={styles.Image} style={{width: '100%!important',height:'500px!important',}}/>
                        </div> */}
    </div>

    )
  }