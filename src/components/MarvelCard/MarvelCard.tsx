import { Link } from "react-router-dom";

function MarvelCard({ website, img, title, year, platform, description }) {
  return (
    <>
      <Link to={website}>
        <article className="shows__card">
          <img className="shows__img" src={img} alt={title} />
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
