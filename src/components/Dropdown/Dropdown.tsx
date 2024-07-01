import Dropdown from "react-bootstrap/Dropdown";

function CountryDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Country
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Canada</Dropdown.Item>
        <Dropdown.Item href="#/action-2">USA</Dropdown.Item>
        <Dropdown.Item href="#/action-3">India</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CountryDropdown;
