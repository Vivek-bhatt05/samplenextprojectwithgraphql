import Link from "next/link";

import styles from 'styles/main-header.module.css'


function MainHeader () {
  return (
    <header className={styles.header}>
        <div className={styles.logo}>
       <Link href='/'>Home</Link>
       </div>
       <nav className={styles.navigation}>
        <ul className={styles.under} >
            <li>
                <Link href='/signup'>Sign Up</Link>
            </li>
            <li>
                <Link href='/login'>Login</Link>
            </li>
            <li>
                <Link href='/profile'>Profile</Link>
            </li>
            <li>
                <Link href='/quotes'>Quotes</Link>
            </li>
        </ul>
       </nav>
    </header>
  )
}

export default MainHeader
