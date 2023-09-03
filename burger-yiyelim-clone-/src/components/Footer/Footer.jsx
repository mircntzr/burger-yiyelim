import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-media">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
      <div className="footer-item">
        <h4>İLETİŞİM</h4>
        <p>
          <i className="map-marker"></i>
          Yenibosna Merkez Mah, Kavak Sk. No:4/B, 34197 Bahçelievler/İstanbul
          <br /> Bahçelievler / İstanbul
        </p>
        <p>
          <i className="envelope"></i>{" "}
          <a href="mailto:destek@kebanet.com">destek@kebanet.com</a>
        </p>
        <ul className="social-media">
          <li>
            <a href="https://www.facebook.com/burgeryiyelim">
              <i className="facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/burgeryiyelimm/?hl=tr">
              <i className="instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UC8Hzo9_dwp62eHsahGk0G-A">
              <i className="youtube"></i>
            </a>
          </li>
        </ul>
      </div>
      <p>Tüm Hakları Saklıdır | Burger Yiyelim</p>
      <div>
        <h4>KURUMSAL</h4>
        <ul className="links">
          <li>
            <a href="https://www.burgeryiyelim.com/about-us">Hakkımızda</a>
          </li>
          <li>
            <a href="https://www.burgeryiyelim.com/aydinlatma-metni">
              Aydınlatma Metni
            </a>
          </li>
          <li>
            <a href="https://www.burgeryiyelim.com/franchising">
              Franchising Başvurusu
            </a>
          </li>
          <li>
            <a href="https://www.burgeryiyelim.com/contact-us">İletişim</a>
          </li>
          <li>
            <a href="https://www.burgeryiyelim.com/insan-kaynaklari">
              İnsan Kaynakları
            </a>
          </li>
          <li>
            <a href="https://www.burgeryiyelim.com/et-aski" title="Et Aşkı">
              Et Aşkı
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
