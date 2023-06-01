import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.blocoHome}>
    
        <content className={styles.conteudoPrincipal}>
        <Image
        className={styles.x}
        src="/Cell6.jpg"
        alt="Cellphone"
        width={310}
        height={400}
        />

        <div className={styles.blocoPrincipal}>
        <div className={styles.Introducao}>
          <h2 className={styles.Title}>E se você pudesse vencer sua ansiedade e estresse?</h2>
          <p className={styles.subTitle}>Explore as 3 principais técnicas de mindfulness que podem ser facilmente aplicadas a sua rotina para que você vença de uma vez por todas a ansiedade e o estresse. Confie em quem reina quando o assunto é relaxar!</p>
        </div>


        <div className={styles.secondBlock}>       
        <Link target='blank' href="https://forms.gle/zryPJK8Yisnk9M2A8">
         <button className={styles.btnBook}>
            Clique aqui para baixar nosso Ebook Gratuito
          </button>
        </Link>

          <Image
          src="/peace.png"
          alt="Cellphone"
          width={340}
          height={176}
          />
        </div>
        </div>
      

        </content>

      </div>

      <footer className={styles.foot}>
        <Link href="https://www.buymeacoffee.com/relaxkings">
          Buy us a coffee
        </Link>
      </footer>
    </main>
  )
}
