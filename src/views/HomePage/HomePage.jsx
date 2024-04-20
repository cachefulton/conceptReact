import Aside from "../../components/Aside/Aside";

function Home() {
  return (
    <main className="content-container container-fluid mb-sm-3">
      <div className="row d-flex justify-content-sm-evenly">
        {/* main content */}
        <section className="main-section rounded col-sm-8">
          {/* home page */}
          <div className="mt-2" id="home" role="tabpanel">
            <div>
              <h3>League Introduction</h3>
              <p>
                Welcome to the Chess League! Whether you are a beginner,
                somewhat experienced, or an expert, we are excited to get the
                knights moving and the royals running. Remember to think about
                your every move in a timely manner and have fun!
              </p>
            </div>
            <div className="d-flex justify-content-md-around mb-4 mt-5">
              <div>
                <h3 className="ms-3">Rules</h3>
                <ul>
                  <li>No help from computers or friends</li>
                  <li>
                    At least one beginner, one intermediate, and one expert
                  </li>
                  <li>No more than five players per team</li>
                  <li>Any cheating is disqualification for the whole team</li>
                  <li>Only provided chess sets will be used</li>
                </ul>
              </div>
              <div>
                <h3 className="ms-3">Points</h3>
                <ul>
                  <li>
                    1 point if same level player beats another same level player
                  </li>
                  <li>2 points lower level beats higher level</li>
                  <li>0.5 point if higher level beats lower level</li>
                  <li>
                    3 bonus points if a team wins five or more games in a night
                  </li>
                  <li>Poor sportsmanship can lower team points</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="ms-lg-5 me-lg-5 mb-sm-5 pt-3 ps-md-5 pe-md-5">
                <h5>Get better at chess</h5>
                <div className="ratio ratio-16x9" id="youtube">
                  <iframe
                    className="rounded"
                    src="https://www.youtube.com/embed/RSFusRQhF6o"
                    title="Gothamchess video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* aside content */}
        <Aside></Aside>
      </div>
    </main>
  );
}
export default Home;
