import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.copyright}>
            © 2024 Все права защищены
          </div>
          <nav className={styles.links}>
            <a href="/about">О нас</a>
            <a href="/contacts">Контакты</a>
            <a href="/privacy">Политика конфиденциальности</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
