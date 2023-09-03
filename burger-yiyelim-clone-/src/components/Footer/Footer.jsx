import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h4 className="footer-title">Burger Yiyelim</h4>
        <p className="footer-description">
          Burger Yiyelim markasının tek hak sahibi Keban Et’tir. Web sitemizde
          bulunan fiyatlar şubelere, paket servis ve gel-al servise göre
          farklılık gösterebilmektedir. Burger Yiyelim tüm promosyonlar ve
          kampanyaları değiştirme ve sonlandırma hakkını saklı tutar.
        </p>
      </div>
      <div className="footer-section">
        <h4 className="footer-title">Kurumsal</h4>
        <ul className="footer-links">
          <li>
            <a href="/About">Hakkımızda</a>
          </li>
          <li>
            <a href="#">Aydınlatma Metni</a>
          </li>
          <li>
            <a href="#">Franchising Başvurusu</a>
          </li>
          <li>
            <a href="/Contact">İletişim</a>
          </li>
          <li>
            <a href="#">İnsan Kaynakları</a>
          </li>
          <li>
            <a href="#">Et Aşkı</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h4 className="footer-title">Ürünler</h4>
        <ul className="footer-links">
          <li>
            <a href="/Menu">Menü</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h4 className="footer-title">İletişim</h4>
        <p className="footer-description">
          Yenibosna Merkez Mah, Kavak Sk. No:4/B, 34197 Bahçelievler/İstanbul
          <br />
          Bahçelievler / İstanbul
          <br />
          destek@kebanet.com
        </p>
        <div className="social-icons">
          <a href="#">
            <FacebookIcon className="icon" />
          </a>
          <a href="#">
            <InstagramIcon className="icon" />
          </a>
          <a href="#">
            <YouTubeIcon className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
