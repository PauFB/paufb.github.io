import { ReactComponent as GithubLogo } from '../../../assets/github-logo.svg';
import './Home.css';

export const Home = () => {
  return (
    <div className="container">
      <a href="https://github.com/PauFB" target="_blank" rel="noreferrer">
        <GithubLogo className="logo" />
        @PauFB
      </a>
    </div>
  );
}
