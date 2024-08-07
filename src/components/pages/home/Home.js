import { Link } from 'react-router-dom';
import { ReactComponent as ReactLogo } from '../../../assets/react-logo.svg';
import { ReactComponent as GithubLogo } from '../../../assets/github-logo.svg';
import './Home.css';

export function Home() {
  return (
    <div className="home-page__container">
      <Link to={"https://github.com/PauFB"} className="home-page__anchor" target="_blank" rel="noreferrer">
        <div className="home-page__github-container">
          <GithubLogo className="home-page__github-container__logo" />
          @PauFB
        </div>
      </Link>
      <Link to={"https://react.dev"} className="home-page__anchor" target="_blank" rel="noreferrer">
        <div className="home-page__react-container">
          <ReactLogo className="home-page__react-container__logo" />
          18.3.1
        </div>
      </Link>
    </div>
  );
}
