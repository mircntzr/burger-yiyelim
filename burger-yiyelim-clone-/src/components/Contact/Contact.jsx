import BannerNew from "../../assets/banner.png";
import "./Contact.css";
function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerNew})` }}
      ></div>
      <div className="rightSide">
        <h1>Bizimle İletişime Geçiniz</h1>
        <form>
          <label>Ad Soyad</label>
          <input
            type="text"
            name="name"
            placeholder="Lütfen Adınızı Soyadınızı Giriniz"
          />
          <label>E-Mail </label>
          <input
            type="email"
            name="email"
            placeholder="Lütfen e-mailinizi Giriniz"
          />
          <label>Mesajınız </label>
          <textarea
            name="message"
            placeholder="Lütfen Mesajınızı Giriniz"
            rows="6"
          ></textarea>
        </form>
      </div>
    </div>
  );
}

export default Contact;
