import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.container}>
      <h1>Math Magicians</h1>
      <ul className={styles.navbar}>
        <li className={styles.navbarItem}>
          <Link to="/"> Home</Link>
          <span>|</span>
        </li>
        <li className={styles.navbarItem}>
          <Link to="/calculator">Calculator</Link>
          <span>|</span>
        </li>
        <li className={styles.navbarItem}>
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </div>
  );
}
