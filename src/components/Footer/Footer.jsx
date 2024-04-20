import {FaTwitter, FaFacebook, FaInstagram} from "react-icons/fa"

function Footer() {
  return (
    <>
      <footer className="footer bg-light opacity-50 p-1 pt-3">
        <div className="container mt-5 d-flex justify-content-between">
          <span className="p-2">
            800 West University Parkway, Orem, UT 84058
          </span>
          <span className="p-2">Contact (801) 863-8888</span>
        </div>
        <div className="d-flex justify-content-center">
          <span className="p-2">© Cache's Homework</span>
        </div>
        <div className="d-flex justify-content-center">
          <a href="https://twitter.com" target="_blank">
            <FaTwitter className="m-2" size={25}/>
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <FaInstagram className="m-2" size={25}/>
          </a>
          <a href="https://www.facebook.com" target="_blank">
            <FaFacebook className="m-2" size={25}/>
          </a>
        </div>
      </footer>
    </>
  );
}
export default Footer;