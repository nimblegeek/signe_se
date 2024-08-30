import React from 'react'
import Link from 'next/link'
import styles from './Layout.module.css'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navButton}>Home</Link>
          <Link href="/recipes" className={styles.navButton}>Recipes</Link>
          <Link href="/create" className={styles.navButton}>Create Recipe</Link>
          <Link href="/profile" className={styles.navButton}>Profile</Link>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>© 2023 My Recipe Site</footer>
    </div>
  )
}

export default Layout