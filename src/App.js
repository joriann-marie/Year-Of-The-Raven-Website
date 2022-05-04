//images
import windowslogo from './assets/img/logos/windows.png';
import maclogo from './assets/img/logos/mac-os-logo.png';
import xboxlogo from './assets/img/logos/xbox-logo.png';
import game_logo from './assets/img/Title_logo.png';
import gdad_logo from './assets/img/GDAD.png';
import itch from './assets/img/logos/itch.svg';

//team
import zane from './assets/img/team/zane.jpg';

//gifs
import peck from './assets/img/peck.gif';
import tornado from './assets/img/tornado.gif';
import camera from './assets/img/camera.gif';
import mech_combo from './assets/img/mech-combo.gif'
import pick_and_choose from './assets/img/pick-and-choose.gif';
import trial_and_error from './assets/img/trial-and-error.gif';


//download files
import windows_dl from './assets/downloads/windows-build.zip';
import mac_dl from './assets/downloads/mac-build.zip';
import xbox_dl from './assets/downloads/xbox-build.zip';
import game_dev_guide from './assets/downloads/Team 4_GDG_Year of the Raven.pdf'


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
            <img class="masthead-heading w-50" id="page-top" src={game_logo} alt="logo"/>
            <div class="masthead-subheading">Blackbird Studios</div>
      </header>
      
      <section class="page-section" id="services">
          <div class="container">
              <div class="text-center">
                  <h2 class="section-heading text-uppercase">Download</h2>
                  <h3 class="section-subheading text-muted">Available on PC, Mac, Xbox and Browser</h3>
              </div>
              <div class="row text-center">
                  <div class="col-md-3">
                      <h4 class="my-3">Windows</h4>
                      <p class="text-muted">Click for Windows 64-bit Download.</p>
                      <a href={windows_dl} download>
                        <img src={windowslogo} alt="PC Download" width="142" height="142"/>
                      </a>
                  </div>
                  <div class="col-md-3">
                      <h4 class="my-3">Mac</h4>
                      <p class="text-muted">Click for Mac 64-bit download</p>
                      <a href={mac_dl} download>
                        <img src={maclogo} alt="Mac Download" width="142" height="142"/>
                      </a>
                  </div>
                  <div class="col-md-3">
                      <h4 class="my-3">Xbox</h4>
                      <p class="text-muted">Click for Xbox Download.</p>
                      <a href={xbox_dl} download>
                        <img src={xboxlogo} alt="Xbox Download" width="142" height="142"/>
                      </a>
                  </div>
                  <div class="col-md-3">
                      <h4 class="my-3">Itch.io</h4>
                      <p class="text-muted">Click to play on Itch.io</p>
                      <a href={'https://jiaxinhuang.itch.io/year-of-the-raven'}>
                        <img src={itch} alt="Itch play" width="142" height="142"/>
                      </a>
                  </div>
              </div>
          </div>
      </section>

      <section class="page-section custom-body" id="portfolio">
          <div class="container">
              <div class="text-center">
                  <h2 class="section-heading text-uppercase white-text">Trailer</h2>
                  <h3 class="section-subheading white-text">Play in brower with Unity Web Player</h3>
                  <iframe width="840" height="475" src={'https://www.youtube.com/embed/UtccWRpLmiE'} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
              </div>
          </div>
        </section>
              
      
      <section class="page-section" id="about">
          <div class="container">
              <div class="text-center">
                    <h2 class="section-heading text-uppercase">About</h2>
                    <h3 class="section-subheading text-muted">All about the game and how we made it</h3>
                    
                    {/* High Concept */}
                    <h4 class="section-heading text-uppercase pt-5">Story</h4>
                    <p class="section-heading text-muted me-5 ms-5 ">The Emperor decrees the need for a 13th divine animal to be added as a Zodiac. You play as Corvus, a blackbird who decides to shoot their shot for the title. However, you first must gain the original 12 Zodiac animals' approval by solving each of their unique puzzles and earning stars to form your constellation. With the help of your wind powers, make your way through the cloudy realm of the gods in order to ascend to divinity!<b></b></p>
                    

                    {/* Our Process */}
                    <h4 class="section-heading text-uppercase pt-5">The Process</h4>
                    <p class="section-heading text-muted me-5 ms-5 mb-5 ">This game was created over the course of a college semester, in 12 week long sprints. It was produced in Unity 3D. 
                    <br></br>To learn more about our process, check out our Game Development Guide below.</p>
                    <a class="btn btn-primary btn-xl text-uppercase" href={game_dev_guide}>Game Development Guide</a>

                    {/* Mechanics */}
                    <h4 class="section-heading text-uppercase mt-5 pt-5">Mechanics</h4>
                    <div class="row text-center text-muted mb-5">
                        <div class="col-sm ms-5">  
                            <img class="my-3 w-100" src={peck} alt="Peck gif"/>
                            <h5>Peck</h5>
                            <p>The peck ability allows the player to move boxes and interact with other objects and NPCs.</p>
                        </div>
                        <div class="col-sm">
                            <img class="my-3 w-100" src={tornado} alt="Tornado gif"/>
                            <h5 class="text-muted ">Tornado</h5>
                            <p>The player can shoot out a gust of wind which creates a tornado. The player and boxes can also float on this tornado.</p>
                        </div>
                        <div class="col-sm me-5"> 
                            <img class="my-3 w-100" src={camera} alt="Camera gif"/>
                            <h5 class="text-muted">Camera</h5>
                            <p>The player can shift camera in 90 degree increments to view puzzles at different angles.</p>
                        </div>
                    </div>

                    {/* Dynamics */}
                    <h4 class="section-heading text-uppercase mt-5 pt-5">Dynamics</h4>
                    <div class="container">
                        <div class="row text-center text-muted mb-5">
                            <div class="col-sm ms-5">
                                <img class="my-3 w-100" src={mech_combo} alt="mechanic combination gif"/>
                                <h5>Mechanic Combination</h5>
                                <p>The player can combine the tornado and peck to solve different puzzles.</p>
                            </div>
                            <div class="col-sm">
                                <img class="my-3 w-100" src={pick_and_choose} alt="Tornado gif "/>
                                <h5 class="text-muted ">Pick and Choose</h5>
                                <p>Try any number of times to finish the puzzle, playing at your own pace.</p>
                            </div>
                            <div class="col-sm me-5">
                                <img class="my-3 w-100"src={trial_and_error} alt="Camera gif"  />
                                <h5 class="text-muted">Trial and Error</h5>
                                <p>Puzzles on each island can be done in any order via returning to the island.</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Aeshtetic */}
                    <h4 class="section-heading text-uppercase pt-5 mt-5">Aesthetic</h4>
                    <p class="text-muted me-5 ms-5">The world supports a chill and relaxing aesthetic with cloudy backgrounds and art that has a particular Eastern-style look with its characters and backgrounds. This aesthetic conveys a calm, play-at-your-own-pace feeling to the player</p>
              </div>
          </div>
      </section>
      
      <section class="page-section custom-body" id="team">
          <div class="container ">
              <div class="text-center white-text">
                  <h2 class="section-heading text-uppercase">The Team</h2>
                  <h3 class="section-subheading white-text">Our team at the 3D Game Development Capstone</h3>
              </div>
            
            <div class="container bg-light rounded-3">
            
              {/* row 1 */}
              <div class="row pt-5">
                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src={'https://media-exp1.licdn.com/dms/image/C4E03AQG8iIMDOjNmdA/profile-displayphoto-shrink_800_800/0/1633382434321?e=1657152000&v=beta&t=cPnFBYyPvfsWSb_eG5ke0aVZUcmegh4ZkZA2VqvUP8Q'} alt="..." />
                        <h4>Matthew Zhang</h4>
                        <p class="text-muted">Designer <br></br>Programmer <br></br> Sound Designer </p>
                        {/* <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a> */}
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src={zane} alt="..." />
                        <h4>Zane Stewart</h4>
                        <p class="text-muted">Designer <br></br> Scrum Master</p>
                    </div>
                </div>
                <div class="col-lg-4 ">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src={'https://media-exp1.licdn.com/dms/image/C4E03AQEatlzeILh-eA/profile-displayphoto-shrink_800_800/0/1649872217588?e=1657152000&v=beta&t=pAyC5O9t44lsH__V6PXeBHHzil_j_nmRlIl-WKlWINI'} alt="..." />
                        <h4>Soo Jung Aguilar</h4>
                        <p class="text-muted">Art Director <br></br> 2D Artist </p>
                    </div>
                  </div>
              </div>

              {/* row 2 */}
              <div class="row">
                  <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src={'https://media-exp1.licdn.com/dms/image/C5603AQGizzBmBzYzhQ/profile-displayphoto-shrink_800_800/0/1647020319226?e=1657152000&v=beta&t=n8pNILmL_trQ_GclfPecQw584hT4no2btV49Wwn_q6s'} alt="..." />
                        <h4>Joriann Bassi</h4>
                        <p class="text-muted">Programmer <br></br> Sound Designer</p>
                    </div>
                  </div>

                  <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src={'https://media-exp1.licdn.com/dms/image/C4E03AQFm9m_g1U-bQw/profile-displayphoto-shrink_800_800/0/1646280722639?e=1657152000&v=beta&t=E6W2No6f5vBf00E9wkkH131c8txQNGke4XiI8xJkNAg'} alt="..." />
                        <h4>Faith Fuller</h4>
                        <p class="text-muted">3D Artist </p>
                    </div>
                    </div>

                  <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src={'https://media-exp1.licdn.com/dms/image/C5603AQGsEtMVAw-enA/profile-displayphoto-shrink_800_800/0/1631307680740?e=1657152000&v=beta&t=rFdLXtA2swUKb737VzcolVaNJKPrPMtgU9PFngN4DfQ'} alt="..." />
                        <h4>Aayush Gupta</h4>
                        <p class="text-muted">Designer </p>
                    </div>
                  </div>
                </div>
                

              {/* row 3 */}
              <div class = "row">
                <div class="col-lg-4">
                  <div class="team-member">
                      <img class="mx-auto rounded-circle" src={'https://media-exp1.licdn.com/dms/image/C4E03AQHUgY5omNnZyQ/profile-displayphoto-shrink_800_800/0/1580016367855?e=1657152000&v=beta&t=xQ4RnVzvEFQqTeqg-DEWscK9RWoz2r5EloC-iOjOcoQ'} alt="..." />
                      <h4>Jiaxin Huang</h4>
                      <p class="text-muted">Programmer <br></br>Designer </p>

                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="team-member">
                      <img class="mx-auto rounded-circle" src={'https://media-exp1.licdn.com/dms/image/C5603AQGbmxpD_17GiQ/profile-displayphoto-shrink_800_800/0/1636143212461?e=1657152000&v=beta&t=vAzcR54XPkpVYL1PaUvRhSeIy8H5bmk3jIsrXFhOVvU'} alt="..." />
                      <h4>Clinton Thai</h4>
                      <p class="text-muted">2D/3D Artist </p>
                  </div>
                </div>
            <h4 class="section-heading text-uppercase pt-5">Producer</h4>
            <p class="text-muted">Paul Toprac</p>
            <h4 class="section-heading text-uppercase pt-5">Co-Producer</h4>
            <p class="text-muted pb-5">Audrey Stein</p>
            </div>
            </div>
          </div>
          <div class="row py-5 my-5"></div>
      </section>
      
      
      
     
      <footer class="footer py-5">
          <div class="container">
              <div class="row align-items-center">
                  <div class="col-lg-4 text-lg-start">Year of The Raven 2022</div>
                  <div class="col-lg-4 my-3 my-lg-0">
                  <a href="#!"><img class="img-fluid img-brand d-block mx-auto" src={gdad_logo} alt="Gdad Logo" /></a> 
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
