import "./PlatformPage.scss";
import { Link } from "react-router-dom";
import DisneyIcon from "../../assets/icons/logo-Disney+.jpeg";
import NetflixIcon from "../../assets/icons/logo-Netflix.jpeg";
import PrimeIcon from "../../assets/icons/logo-primevideo.jpeg";

function PlatformPage() {
  return (
    <>
      <div>PlatformPage</div>
      <div className="homepage">
        <div className="homepage-container">
          <Link to={"/disney"}>
            <article className="homepage__card">
              <img
                className="homepage__img"
                src={DisneyIcon}
                alt="DisneyIcon"
              />
              <h2 className="homepage__title">Marvel @ Disney+</h2>
            </article>
          </Link>

          <Link to={"/netflix"}>
            <article className="homepage__card">
              <img
                className="homepage__img"
                src={NetflixIcon}
                alt="NetflixIcon"
              />
              <h2 className="homepage__title">Marvel @ Netflix</h2>
            </article>
          </Link>

          <Link to={"/primevideo"}>
            <article className="homepage__card">
              <img className="homepage__img" src={PrimeIcon} alt="PrimeIcon" />
              <h2 className="homepage__title">Marvel @ PrimeVideo</h2>
            </article>
          </Link>
        </div>
      </div>
      ;
    </>
  );
}

export default PlatformPage;
