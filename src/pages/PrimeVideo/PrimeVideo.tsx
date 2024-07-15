import "./PrimeVideo.scss";
import { useEffect, useState } from "react";
import MarvelCard from "../../components/MarvelCard/MarvelCard";
import axios from "axios";
import { MarvelCardInterface } from "../../interfaces/interface";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

function PrimeVideo() {
  const website =
    "https://www.primevideo.com/offers/nonprimehomepage/ref=atv_hom_offers_c_9zZ8D2_hom";

  const [disneyData, setDisneyData] = useState([]);

  useEffect(() => {
    const fetchDisneydata = async () => {
      const response = await axios.get("http://localhost:5173/primevideo");
      setDisneyData(response.data);
    };

    fetchDisneydata();
  }, []);

  return (
    <>
      <div className="primevideo-container">
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

export default PrimeVideo;
