import "./HomePage.scss";
import globe from "../../assets/icons/globe.svg";
import CountryDropdown from "../../components/Dropdown/Dropdown";

function HomePage() {
  return (
    <>
      <main>
        <div className="countries">
          <CountryDropdown />
          <img src={globe} alt="Globe symbol" />
        </div>
        <div className="main">
          <h1>BUILDSPACE MARVEL PROJECT</h1>
          <h3>Coming soon !!!</h3>
        </div>
      </main>
    </>
  );
}

export default HomePage;
