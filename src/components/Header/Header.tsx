import "./Header.css";
import "./Header.scss";

function Header() {
  return (
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/home">
          Marvel @ us
        </a>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="enter your favourite movie"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search @ Marvel
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Header;
