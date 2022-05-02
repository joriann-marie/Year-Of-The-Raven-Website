//images
import windowslogo from './assets/img/logos/windows.png';
import maclogo from './assets/img/logos/mac-os-logo.png';
import xboxlogo from './assets/img/logos/xbox-logo.png';
import game_logo from './assets/img/Title_logo.png';

//gifs
import peck from './assets/img/peck.gif';
import tornado from './assets/img/tornado.gif';
import camera from './assets/img/camera.gif';
import mech_combo from './/assets/img/mech-combo.gif'


//download files
import windows_dl from './assets/downloads/windows-build.zip';
import mac_dl from './assets/downloads/mac-build.zip';
import xbox_dl from './assets/downloads/xbox-build.zip';


import './App.css';

function App() {
  return (
    <div className="App">
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
          <div class="container">
              <a class="navbar-brand" href="#page-top"><img src={game_logo} alt="..." /></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  Menu
                  <i class="fas fa-bars ms-1"></i>
              </button>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                  <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                      <li class="nav-item"><a class="nav-link" href="#services">Download</a></li>
                      <li class="nav-item"><a class="nav-link" href="#portfolio">Play</a></li>
                      <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                      <li class="nav-item"><a class="nav-link" href="#team">Team</a></li>

                  </ul>
              </div>
          </div>
      </nav>
      
      <header class="masthead">
          <div class="container">
              <img class="center"src={game_logo} alt="logo" width="1000"/>
              <div class="masthead-subheading">Blackbird Studios</div>

          </div>
      </header>
      
      <section class="page-section" id="services">
          <div class="container">
              <div class="text-center">
                  <h2 class="section-heading text-uppercase">Download</h2>
                  <h3 class="section-subheading text-muted">Available on PC, Mac, Xbox and Browser</h3>
              </div>
              <div class="row text-center">
                  <div class="col-md-4">
                      <h4 class="my-3">Windows</h4>
                      <p class="text-muted">Click for Windows 64-bit Download.</p>
                      <a href={windows_dl} download>
                        <img src={windowslogo} alt="PC Download" width="142" height="142"/>
                      </a>
                  </div>
                  <div class="col-md-4">
                      <h4 class="my-3">Mac</h4>
                      <p class="text-muted">Click for Mac 64-bit download</p>
                      <a href={mac_dl} download>
                        <img src={maclogo} alt="Mac Download" width="142" height="142"/>
                      </a>
                  </div>
                  <div class="col-md-4">
                      <h4 class="my-3">Xbox</h4>
                      <p class="text-muted">Click for Xbox Download.</p>
                      <a href={xbox_dl} download>
                        <img src={xboxlogo} alt="Xbox Download" width="142" height="142"/>
                      </a>
                  </div>
              </div>
          </div>
      </section>

      <section class="page-section bg-light" id="portfolio">
          <div class="container">
              <div class="text-center">
                  <h2 class="section-heading text-uppercase">Play</h2>
                  <h3 class="section-subheading text-muted">Play in brower with Unity Web Player</h3>
              </div>
          </div>
        </section>
              
      
      <section class="page-section" id="about">
          <div class="container">
              <div class="text-center">
                    <h2 class="section-heading text-uppercase">About</h2>
                    
                    {/* High Concept */}
                    <h4 class="section-heading text-uppercase">High Concept</h4>
                    <p class="section-heading text-muted">The Emperor decrees the need for a 13th divine animal to be added as a Zodiac. You play as Corvus, a blackbird who decides to shoot their shot for the title. However, you first must gain the original 12 Zodiac animals' approval by solving each of their unique puzzles and earning stars to form your constellation. With the help of your wind powers, make your way through the cloudy realm of the gods in order to ascend to divinity!<b></b></p>
                    
                    {/* Trailer */}
                    <h4 class="section-heading text-uppercase">Game Trailer</h4>

                    {/* Mechanics */}
                    <h4 class="section-heading text-uppercase">Mechanics</h4>
                    <div class="row text-center text-muted">
                        <div class="col-sm">
                            <h5>Peck</h5>
                            <img src={peck} alt="Peck gif" height="240"/>
                            <p>The peck ability allows the player to move boxes and interact with other objects and NPCs.</p>
                        </div>
                        <div class="col-sm">
                            <h5 class="text-muted ">Tornado</h5>
                            <img src={tornado} alt="Tornado gif" height="240"/>
                            <p>The player can shoot out a gust of wind which creates a tornado. The player and boxes can also float on this tornado.</p>
                        </div>
                        <div class="col-sm">
                            <h5 class="text-muted">Camera</h5>
                            <img src={camera} alt="Camera gif" height="240"/>
                            <p>The player can shift camera in 90 degree increments to view puzzles at different angles.</p>
                        </div>
                    </div>

                    {/* Dynamics */}
                    <h4 class="section-heading text-uppercase">Dynamics</h4>
                    <div class="container">
                        <div class="row text-center text-muted">
                            <div class="col-md-4">
                                <h5>Mechanic Combination</h5>
                                <img src={mech_combo} alt="mechanic combination gif" height="240"/>
                                <p>The player can combine the tornado and peck to solve different puzzles.</p>
                            </div>
                            <div class="col-md-4">
                                <h5 class="text-muted ">Tornado</h5>
                                <img src={tornado} alt="Tornado gif" height="240"/>
                                <p>The player can shoot out a gust of wind which creates a tornado. The player and boxes can also float on this tornado.</p>
                            </div>
                            <div class="col-md-4">
                                <h5 class="text-muted">Camera</h5>
                                <img src={camera} alt="Camera gif" height="240"/>
                                <p>The player can shift camera in 90 degree increments to view puzzles at different angles.</p>
                            </div>
                        </div>
                    </div>
                    
                    
                    <h4 class="section-heading text-uppercase">Aesthetic</h4>
              </div>
              
              {/* <ul class="timeline">
                  <li>
                      <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="..." /></div>
                      <div class="timeline-panel">
                          <div class="timeline-heading">
                              <h4>2009-2011</h4>
                              <h4 class="subheading">Our Humble Beginnings</h4>
                          </div>
                          <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                      </div>
                  </li>
                  <li class="timeline-inverted">
                      <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="..." /></div>
                      <div class="timeline-panel">
                          <div class="timeline-heading">
                              <h4>March 2011</h4>
                              <h4 class="subheading">An Agency is Born</h4>
                          </div>
                          <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                      </div>
                  </li>
                  <li>
                      <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="..." /></div>
                      <div class="timeline-panel">
                          <div class="timeline-heading">
                              <h4>December 2015</h4>
                              <h4 class="subheading">Transition to Full Service</h4>
                          </div>
                          <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                      </div>
                  </li>
                  <li class="timeline-inverted">
                      <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="..." /></div>
                      <div class="timeline-panel">
                          <div class="timeline-heading">
                              <h4>July 2020</h4>
                              <h4 class="subheading">Phase Two Expansion</h4>
                          </div>
                          <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                      </div>
                  </li>
                  <li class="timeline-inverted">
                      <div class="timeline-image">
                          <h4>
                              Be Part
                              <br />
                              Of Our
                              <br />
                              Story!
                          </h4>
                      </div>
                  </li>
              </ul> */}
          </div>
      </section>
      
      <section class="page-section bg-light" id="team">
          <div class="container">
              <div class="text-center">
                  <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                  <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
              </div>

              {/* row 1 */}
              <div class="row">
                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="assets/img/team/1.jpg" alt="..." />
                        <h4>Matthew Zhang</h4>
                        <p class="text-muted">Designer <br></br>Programmer <br></br> Sound Designer </p>
                        <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="assets/img/team/2.jpg" alt="..." />
                        <h4>Zane Stewart</h4>
                        <p class="text-muted">Designer <br></br> Scrum Master</p>
                        <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 ">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="assets/img/team/3.jpg" alt="..." />
                        <h4>Soo Jung Aguilar</h4>
                        <p class="text-muted">Art Director <br></br> 2D Artist </p>
                        <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>
              </div>

              {/* row 2 */}
              <div class="row">
                  <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="assets/img/team/3.jpg" alt="..." />
                        <h4>Joriann Bassi</h4>
                        <p class="text-muted">Programmer <br></br> Sound Designer</p>
                        <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>

                  <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="assets/img/team/3.jpg" alt="..." />
                        <h4>Faith Fuller</h4>
                        <p class="text-muted">3D Artist </p>
                        <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    </div>

                  <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="assets/img/team/3.jpg" alt="..." />
                        <h4>Aayush Gupta</h4>
                        <p class="text-muted">Designer </p>
                        <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>
                </div>

              {/* row 3 */}
              <div class = "row">
                <div class="col-lg-4">
                  <div class="team-member">
                      <img class="mx-auto rounded-circle" src="assets/img/team/3.jpg" alt="..." />
                      <h4>Jiaxin Huang</h4>
                      <p class="text-muted">Programmer <br></br>Designer </p>
                      <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                      <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                      <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="team-member">
                      <img class="mx-auto rounded-circle" src="assets/img/team/3.jpg" alt="..." />
                      <h4>Clinton Thai</h4>
                      <p class="text-muted">2D/3D Artist </p>
                      <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                      <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                      <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>


            <div class="row">
                <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
            </div>
          </div>
      </section>
      
      <div class="py-5">
          <div class="container">
              <div class="row align-items-center">
                  <div class="col-md-3 col-sm-6 my-3">
                      <a href="#!"><img class="img-fluid img-brand d-block mx-auto" src="assets/img/logos/microsoft.svg" alt="..." /></a>
                  </div>
                  <div class="col-md-3 col-sm-6 my-3">
                      <a href="#!"><img class="img-fluid img-brand d-block mx-auto" src="assets/img/logos/google.svg" alt="..." /></a>
                  </div>
                  <div class="col-md-3 col-sm-6 my-3">
                      <a href="#!"><img class="img-fluid img-brand d-block mx-auto" src="assets/img/logos/facebook.svg" alt="..." /></a>
                  </div>
                  <div class="col-md-3 col-sm-6 my-3">
                      <a href="#!"><img class="img-fluid img-brand d-block mx-auto" src="assets/img/logos/ibm.svg" alt="..." /></a>
                  </div>
              </div>
          </div>
      </div>
     
      
     
      <footer class="footer py-4">
          <div class="container">
              <div class="row align-items-center">
                  <div class="col-lg-4 text-lg-start">Copyright &copy; Your Website 2021</div>
                  <div class="col-lg-4 my-3 my-lg-0">
                      <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                      <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                      <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                  </div>
                  <div class="col-lg-4 text-lg-end">
                      <a class="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                      <a class="link-dark text-decoration-none" href="#!">Terms of Use</a>
                  </div>
              </div>
          </div>
      </footer>
  </div>
  );
}

export default App;
