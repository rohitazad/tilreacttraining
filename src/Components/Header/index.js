import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
const HeaderComponents = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={`wraper ${styles.section}`}>
          <div className={styles.logo}>
            <img
              src="https://timesinternet.in/assets/images/logo-blue-new.png"
              width={160}
              height={46}
              alt="TIL Logo"
            />
          </div>
          <ul>
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`/about`}>About</Link>
            </li>
            <li>
              <Link to={`/contact`}>Contact</Link>
            </li>
            <li>
              <Link to={`/todo`}>ToDo App</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeaderComponents;
