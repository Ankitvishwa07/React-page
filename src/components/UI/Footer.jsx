import { SiInstagram } from "react-icons/si";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { GiWorld } from "react-icons/gi";

const Footer = () => {
  return (
    <div className="container white">
      <div className="footer">
        <div className="grid-two-col">
          <div>
            <p>&copy; 2026 WorldAtlas. All rights reserved</p>
          </div>
          <div className="flex-end">
            <div>
              <SiInstagram className="react-icon" />
            </div>
            <div>
              <PiLinkedinLogoBold className="react-icon" />
            </div>
            <div>
              <GiWorld className="react-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
