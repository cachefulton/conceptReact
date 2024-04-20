import {FaCalendarDay, FaArrowAltCircleUp, FaCalendarCheck, FaTrophy} from "react-icons/fa"

function Aside() {
  return (
    <section className="aside rounded col-sm-4 col-md-3">
      <div className="mb-5 mt-2">
        <div className="d-flex justify-content-between mb-1">
          <h3>Point leaders</h3>
          <FaTrophy id="trophy" className="mt-1" size={35}/>
        </div>
        <ul id="standings" className="list-group list-group-flush rounded">
          <li className="list-group-item d-flex justify-content-between">
            <span>8x8</span>
            <span>26.5 pts</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>The Crown</span>
            <span>25 pts</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Pawnderings</span>
            <span>24.5 pts</span>
          </li>
        </ul>
      </div>
      <div className="mb-5">
        <h5 className="">Event schedule 2023</h5>
        <ul className="list-unstyled">
          <li>
            <FaCalendarCheck className="me-2"/>
            February 15, 6:00
          </li>
          <li>
            <FaCalendarCheck className="me-2"/>
            February 28, 6:30
          </li>
          <li>
            <FaCalendarCheck className="me-2"/>
            March 15, 6:00
          </li>
          <li>
            <FaArrowAltCircleUp className="me-2"/>
            April 16, 7:00
          </li>
          <li>
            <FaCalendarDay className="me-2"/>
            April 30, 6:30
          </li>
          <li>
            <FaCalendarDay className="me-2"/>
            May 17, 6:30
          </li>
          <li>
            <FaCalendarDay className="me-2"/>
            June 2, 7:00
          </li>
          <li>
            <FaCalendarDay className="me-2"/>
            June 3, 7:00
          </li>
          <li>
            <FaCalendarDay className="me-2"/>
            May 4, 7:00
          </li>
        </ul>
      </div>
      <div>
        <h5>Next venue location</h5>
        <p>951 S Geneva Rd, Orem, UT 84058</p>
      </div>
      <div className="mb-3 mt-5">
        <h5>
          Virtual Tournaments
          <span id="text-muted">
            <br />
            Host: The League
          </span>
        </h5>
        <a href="https://www.chess.com" target="_blank">
          <img
            className="img-fluid rounded"
            src="/imgs/chess_website.png"
            alt=""
          />
        </a>
      </div>
    </section>
  );
}
export default Aside;