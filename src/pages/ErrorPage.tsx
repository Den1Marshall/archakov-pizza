import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.css';

const ErrorPage = () => {
  return (
    <article className={styles.error}>
      <span className={styles.emoji}>😕</span>
      <h2 className={styles.title}>Ничего не найдено</h2>
      <h3 className={styles.subtitle}>
        Возможно, данной страницы не существует
      </h3>
      <Link className={styles.link} to={'/'}>
        Назад на главную страницу
      </Link>
    </article>
  );
};

export default ErrorPage;
