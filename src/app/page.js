import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
      src="/mind.gif"
      alt="Logo"
      width={300}
      height={300}
      />
      <div className={styles.blocoHome}>

        <button className={styles.btnBook}>
          <Link target='blank' href="https://drive.google.com/drive/folders/1joolFsJnvBiPCoYW5dkF7kLI-QCX4vPp?usp=sharing">
            RELAXE E BAIXE NOSSO EBOOK FREE  
          </Link>
        </button>
        <button className={styles.btnBook}>
        <Link target='blank' href="https://docs.google.com/forms/d/e/1FAIpQLSfNeB_9q2M8FM08Lm8Kyoijf0XsDaHFi_e9_TTyv0NNX7bwuA/viewform?usp=sf_link">
            PREENCHA NOSSO FORMULÁRIO  
        </Link>
        </button> 
        </div>
      <iframe src="https://open.spotify.com/embed/playlist/7pZQ7PBgcjeuihA6k0JzKB?utm_source=generator" width="320px" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

      <footer className={styles.foot}>
        <Link href="https://www.buymeacoffee.com/relaxkings">
          Buy us a coffee
        </Link>
      </footer>
    </main>
  )
}
