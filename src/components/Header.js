import { NavDropdown } from "react-bootstrap";
import "../css/header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-h1-container">
        <h1 id="header-h1"> Your Brand on Your Links </h1> <br />
      </div>
      <p> </p>
      <div className="header-img">
        <img
          src="https://hdwy.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F56993b52-55ed-45c4-8db7-d1c6a3f62cbc%2Fperson.png?table=block&id=6c79c066-cbf7-4d1f-9cb5-fa31a2152d08&spaceId=425f0f1f-eb89-41cf-b925-85e46de334af&width=1520&userId=&cache=v2"
          alt="header"
        />
      </div>
    </div>
  );
}

export default Header;
