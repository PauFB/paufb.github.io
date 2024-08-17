import { Link } from 'react-router-dom';
import { ReactComponent as ReactLogo } from '../../../assets/react-dark.svg';
import { ReactComponent as JavaScriptLogo } from '../../../assets/home/javascript.svg';
import { ReactComponent as NodeJSLogo } from '../../../assets/home/nodejs.svg';
import { ReactComponent as RailsLogo } from '../../../assets/home/rails.svg';
import { ReactComponent as MySQLLogo } from '../../../assets/home/mysql.svg';
import { ReactComponent as DockerLogo } from '../../../assets/home/docker.svg';
import './Home.css';

export function Home() {
  return (
    <>
      <div className="home-page__background" />
      <div className="home-page__container">
        <header className="home-page__header">
          <div className="home-page__header__title">
            PauFB
          </div>
          <div className="home-page__header__image">
            <Link to={"https://github.com/PauFB"} target="_blank" rel="noreferrer">
              <img src="https://avatars.githubusercontent.com/u/58038009" alt="" />
            </Link>
          </div>
        </header>
        <section className="home-page__technologies-container">
          <div className="home-page__technology react">
            <ReactLogo />
            React
          </div>
          <div className="home-page__technology js">
            <JavaScriptLogo />
            JavaScript
          </div>
          <div className="home-page__technology nodejs">
            <NodeJSLogo />
            NodeJS
          </div>
          <div className="home-page__technology rails">
            <RailsLogo />
            Ruby on Rails
          </div>
          <div className="home-page__technology mysql">
            <MySQLLogo />
            MySQL
          </div>
          <div className="home-page__technology docker">
            <DockerLogo />
            Docker
          </div>
        </section>
      </div>
    </>
  );
}
