import React from "react";
import { Link } from "react-router-dom";
class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-logo">
          <img src="http://if.uinsgd.ac.id/wp-content/uploads/2016/08/h4.png" />
          <p>
            The href attribute is required for an anchor to be keyboard
            accessible.
          </p>
        </div>
        <ul className="footer-list">
          <li>
            <Link>Layanan</Link>
          </li>
          <li>
            <Link to={"/hubungi-kami"}>Hubungi Kami</Link>
          </li>
          <li>
            <Link>Bantuan</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
