import "./Netflix.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import MarvelCard from "../../components/MarvelCard/MarvelCard";

function Netflix() {
  const website = "https://www.netflix.com/login";

  const [disneyData, setDisneyData] = useState("");

  useEffect(() => {
    const fetchDisneydata = async () => {
      const response = await axios.get("http://localhost:8080/netflix");
      setDisneyData(response.data);
    };

    fetchDisneydata();
  }, []);

  return (
    <>
      <div className="netflix-container">
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

export default Netflix;
