// import "./Netflix.scss";
// import "../PrimeVideo/PrimeVideo.scss";
import "../PrimeVideo/PlatformDetailsPage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import MarvelCard from "../../components/MarvelCard/MarvelCard";
import { MarvelCardInterface } from "../../interfaces/interface";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

function Netflix() {
  const website = "https://www.netflix.com/login";

  const [disneyData, setDisneyData] = useState([]);

  useEffect(() => {
    const fetchDisneydata = async () => {
      try {
        const response = await axios.get("http://localhost:5173/netflix");
        setDisneyData(response.data);
      } catch (error) {
        console.log("cant get data for netflix", error);
      }
    };

    fetchDisneydata();
  }, []);

  return (
    <>
      <div className="netflix-container">
        {disneyData &&
          disneyData.map((show: MarvelCardInterface) => (
            <MarvelCard
              key={show.id}
              id={show.id}
              website={website}
              title={show.title}
              year={show.year}
              image={show.image}
              platform={show.platform}
              description={show.description}
            />
          ))}
      </div>

      <div className="btn-container">
        <Link to="/platform">
          <Button />
        </Link>
      </div>
    </>
  );
}

export default Netflix;
