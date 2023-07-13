import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

import styles from 'styles/main-header.module.css'


function Navbar () {

  const token = localStorage.getItem("token");
  const { push } = useRouter();


  return (
    <header className={styles.header}>
        <div className={styles.logo}>
       <Link href='/'>Home</Link>
       </div>
       <nav className={styles.navigation}>
        <ul className={styles.under} >
            {token? 
            <><li>
            <Link href='/profile'>Profile</Link>
            </li>
           <li>
            <Link href='/createquotes'>Create</Link>
            </li>
            <li>
            <button onClick={()=>{
                localStorage.removeItem("token");
                push("/login")
            }}>Logout</button>
            </li>
            </>:<>
            <li>
                <Link href='/signup'>Sign Up</Link>
            </li>
            <li>
                <Link href='/login'>Login</Link>
            </li>
            </>
            }
            
            
        </ul>
       </nav>
    </header>
  )
}

export default Navbar
