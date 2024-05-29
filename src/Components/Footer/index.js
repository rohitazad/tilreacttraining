import styles from './styles.module.scss';
const FooterComponents = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={`wraper ${styles.section}`}>
          <img
            src="https://timesinternet.in/assets/images/logo.svg"
            width={160}
            height={51}
            alt="Times Internet"
          />
          <h3>Everything . Everyday</h3>
        </div>
      </div>
    </>
  );
};

export default FooterComponents;
