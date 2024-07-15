import { Link } from "react-router-dom";
import { MarvelCardInterface, ShowInterface } from "../../interfaces/interface";
// import { MarvelCardInterface } from "../../interfaces/interface";

function MarvelCard({
  website,
  image,
  title,
  year,
  platform,
  description,
}: MarvelCardInterface) {
  return (
    <>
      <Link to={website}>
        <article className="shows__card">
          <img className="shows__img" src={image} alt={title} />
          <h2 className="shows__title">{title}</h2>
          <h3 className="shows__year">{year}</h3>
          <h3 className="shows__platform">{platform}</h3>
          <p className="shows__description">{description}</p>
        </article>
      </Link>
    </>
  );
}

export default MarvelCard;
