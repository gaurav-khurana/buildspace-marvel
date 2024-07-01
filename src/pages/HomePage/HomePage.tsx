import "./HomePage.scss";
import globe from "../../assets/icons/globe.svg";
import CountryDropdown from "../../components/Dropdown/Dropdown";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <main>
        <section className="countries">
          <CountryDropdown />
          <img src={globe} alt="Globe symbol" />
        </section>

        {/* <div className="main">
          <h1>BUILDSPACE MARVEL PROJECT</h1>
          <h3>Coming soon !!!</h3>
        </div> */}

        <Link to={"/platform"}>
          <h1 className="App-title">Enter Marvel Universe</h1>
        </Link>
      </main>
    </>
  );
}

export default HomePage;
