import { Link } from 'react-router-dom';
import { ReactComponent as ReactLogo } from '../../../assets/react-dark.svg';
import { ReactComponent as JavaScriptLogo } from '../../../assets/home/javascript.svg';
import { ReactComponent as NodeJSLogo } from '../../../assets/home/nodejs.svg';
import { ReactComponent as RailsLogo } from '../../../assets/home/rails.svg';
import { ReactComponent as MySQLLogo } from '../../../assets/home/mysql.svg';
import { ReactComponent as DockerLogo } from '../../../assets/home/docker.svg';
import styles from './HomePage.module.css';

export function HomePage() {
  return (
    <>
      <div className={styles["page-background"]} />
      <div className={styles["page-container"]}>
        <header className={styles["header"]}>
          <div className={styles["header-title"]}>
            PauFB
          </div>
          <div className={styles["header-image"]}>
            <Link to={"https://github.com/PauFB"} target="_blank" rel="noreferrer">
              <img src="https://avatars.githubusercontent.com/u/58038009" alt="" />
            </Link>
          </div>
        </header>
        <section className={styles["technologies-container"]}>
          <div className={`${styles["technology"]} ${styles["react"]}`}>
            <ReactLogo />
            React
          </div>
          <div className={`${styles["technology"]} ${styles["js"]}`}>
            <JavaScriptLogo />
            JavaScript
          </div>
          <div className={`${styles["technology"]} ${styles["nodejs"]}`}>
            <NodeJSLogo />
            NodeJS
          </div>
          <div className={`${styles["technology"]} ${styles["rails"]}`}>
            <RailsLogo />
            Ruby on Rails
          </div>
          <div className={`${styles["technology"]} ${styles["mysql"]}`}>
            <MySQLLogo />
            MySQL
          </div>
          <div className={`${styles["technology"]} ${styles["docker"]}`}>
            <DockerLogo />
            Docker
          </div>
        </section>
      </div>
    </>
  );
}
