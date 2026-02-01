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
              <a href="https://www.linkedin.com/in/ankit-vishwakarma-29bbab20a?lipi=urn%3Ali%3Apage%3Ad_flagship3_messaging_conversation_detail%3B5mj6At4FRxuMhcpAzl7YJw%3D%3D" target="_blank">
                <PiLinkedinLogoBold className="react-icon" />
              </a>
            </div>
            <div>
              <a href="https://r.search.yahoo.com/_ylt=Awr1Sfmsc39pJAIAj7u7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1771169964/RO=10/RU=https%3a%2f%2fwww.instagram.com%2fankit_vishwa07%2f/RK=2/RS=uK2e_HliEAVU2_X8YdXuZTQxqwc-" target="_blank">
                <SiInstagram className="react-icon" />
              </a>
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
