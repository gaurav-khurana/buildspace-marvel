import "./Disney.scss";
// import NetflixIcon from "../../assets/icons/logo-Disney+.jpeg";
// import { Link } from "react-router-dom";
// import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import MarvelCard from "../../components/MarvelCard/MarvelCard";
import { MarvelCardInterface } from "../../interfaces/interface";

function Disney() {
  const [disneyData, setDisneyData] = useState([]);

  const website: string = "https://www.disneyplus.com/en-ca";

  useEffect(() => {
    const fetchDisneydata = async () => {
      try {
        const response = await axios.get("http://localhost:5173/disney");
        if (response.data) {
          setDisneyData(response.data);
          console.log(response.data);
        }
      } catch (err) {
        console.log("Cant get data", err);
      }
    };

    fetchDisneydata();
  }, []);
  console.log(disneyData);

  return (
    <>
      <div className="disney-container">
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
    </>
  );
}

export default Disney;
