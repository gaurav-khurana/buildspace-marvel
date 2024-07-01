import "./Disney.scss";
// import NetflixIcon from "../../assets/icons/logo-Disney+.jpeg";
import { Link } from "react-router-dom";
// import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import MarvelCard from "../../components/MarvelCard/MarvelCard";

function Disney() {
  const [disneyData, setDisneyData] = useState("");

  const website = "https://www.disneyplus.com/en-ca";

  useEffect(() => {
    const fetchDisneydata = async () => {
      const response = await axios.get("http://localhost:8080/disney");
      setDisneyData(response.data);
      // console.log(disneyData);
    };

    fetchDisneydata();
  }, []);
  // console.log(disneyData);

  return (
    <>
      <div className="disney-container">
        {disneyData &&
          disneyData.map((show) => (
            <MarvelCard
              key={show.id}
              id={show.id}
              website={website}
              title={show.title}
              year={show.year}
              img={show.image}
              platform={show.platform}
              description={show.description}
            />
          ))}
      </div>
    </>
  );
}

export default Disney;
