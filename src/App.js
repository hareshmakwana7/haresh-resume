import './App.css';

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <div className="sidebar-wrapper">
                    <div className="profile-container">
                        <img className="profile" src="assets/images/haresh.jpg" alt="" width="200"/>
                        <h1 className="name">Haresh Makwana</h1>
                        <h3 className="tagline">Full Stack Web Developer</h3>
                    </div>


                    <div className="contact-container container-block">
                        <ul className="list-unstyled contact-list">
                            <li className="email"><i className="fas fa-envelope"></i><a
                                href="mailto: developer.hareshmakwana@gmail.com">developer.hareshmakwana@gmail.com</a></li>
                            <li className="phone"><i className="fas fa-phone"></i><a href="tel:0123 456 789">
                                83207 86450</a></li>
                            <li className="website"><i className="fas fa-globe"></i><a
                                href="https://haresh-makwana-resume.herokuapp.com/"
                                target="_blank">haresh-makwana-resume.herokuapp.com</a></li>
                            <li className="linkedin"><i className="fab fa-linkedin-in"></i><a href="https://www.linkedin.com/in/haresh-makwana-421bb683/"
                                                                                              target="_blank">linkedin.com/in/haresh-makwana</a>
                            </li>
                            <li className="github"><i className="fab fa-github"></i><a href="https://github.com/hareshmakwana7"
                                                                                       target="_blank">github.com/hareshmakwana</a>
                            </li>
                            <li className="twitter"><i className="fab fa-twitter"></i><a
                                href="https://twitter.com/HareshMakwana3"
                                target="_blank">@HareshMakwana</a></li>
                        </ul>
                    </div>

                    <div className="education-container container-block">
                        <h2 className="container-block-title">Education</h2>
                        <div className="item">
                            <h4 className="degree">MSc in Computer Science</h4>
                            <h5 className="meta">University of London</h5>
                            <div className="time">2016 - 2018</div>
                        </div>

                        <div className="item">
                            <h4 className="degree">BSc in Applied Mathematics</h4>
                            <h5 className="meta">Bristol University</h5>
                            <div className="time">2011 - 2015</div>
                        </div>

                    </div>


                    <div className="languages-container container-block">
                        <h2 className="container-block-title">Languages</h2>
                        <ul className="list-unstyled interests-list">
                            <li>English <span className="lang-desc">(Native)</span></li>
                            <li>French <span className="lang-desc">(Professional)</span></li>
                            <li>Spanish <span className="lang-desc">(Professional)</span></li>
                        </ul>
                    </div>


                    <div className="interests-container container-block">
                        <h2 className="container-block-title">Interests</h2>
                        <ul className="list-unstyled interests-list">
                            <li>Climbing</li>
                            <li>Snowboarding</li>
                            <li>Cooking</li>
                        </ul>
                    </div>


                </div>


                <div className="main-wrapper">

                    <section className="section summary-section">
                        <h2 className="section-title"><span className="icon-holder"><i
                            className="fas fa-user"></i></span>Career
                            Profile</h2>
                        <div className="summary">
                            <p>Summarise your career here lorem ipsum dolor sit amet, consectetuer adipiscing elit. You
                                can <a
                                    href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/orbit-free-resume-cv-bootstrap-theme-for-developers/"
                                    target="_blank">download this free resume/CV template here</a>. Aenean commodo
                                ligula eget dolor
                                aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                ridiculus mus.
                                Donec quam felis, ultricies nec, pellentesque eu.</p>
                        </div>

                    </section>


                    <section className="section experiences-section">
                        <h2 className="section-title"><span className="icon-holder"><i className="fas fa-briefcase"></i></span>Experiences
                        </h2>

                        <div className="item">
                            <div className="meta">
                                <div className="upper-row">
                                    <h3 className="job-title">Lead Developer</h3>
                                    <div className="time">2019 - Present</div>
                                </div>

                                <div className="company">Startup Hubs, San Francisco</div>
                            </div>

                            <div className="details">
                                <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                    Aenean commodo
                                    ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                                    parturient montes,
                                    nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                    quis, sem. Nulla
                                    consequat massa quis enim. Donec pede justo.</p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                    laudantium,
                                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                                    beatae vitae dicta
                                    sunt explicabo. </p>
                            </div>

                        </div>


                        <div className="item">
                            <div className="meta">
                                <div className="upper-row">
                                    <h3 className="job-title">Senior Software Engineer</h3>
                                    <div className="time">2018 - 2019</div>
                                </div>

                                <div className="company">Google, London</div>
                            </div>

                            <div className="details">
                                <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                    Aenean commodo
                                    ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                                    parturient montes,
                                    nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                    quis, sem.</p>

                            </div>

                        </div>


                        <div className="item">
                            <div className="meta">
                                <div className="upper-row">
                                    <h3 className="job-title">UI Developer</h3>
                                    <div className="time">2016 - 2018</div>
                                </div>

                                <div className="company">Amazon, London</div>
                            </div>

                            <div className="details">
                                <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                    Aenean commodo
                                    ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                                    parturient montes,
                                    nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                    quis, sem.</p>
                            </div>

                        </div>


                    </section>


                    <section className="section projects-section">
                        <h2 className="section-title"><span className="icon-holder"><i
                            className="fas fa-archive"></i></span>Projects
                        </h2>
                        <div className="intro">
                            <p>You can list your side projects or open source libraries in this section. Lorem ipsum
                                dolor sit amet,
                                consectetur adipiscing elit. Vestibulum et ligula in nunc bibendum fringilla a eu
                                lectus.</p>
                        </div>

                        <div className="item">
              <span className="project-title"><a
                  href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/coderpro-bootstrap-4-startup-template-for-software-projects/"
                  target="_blank">CoderPro</a></span> - <span className="project-tagline">A responsive website template designed to help developers launch their software projects. </span>

                        </div>

                        <div className="item">
              <span className="project-title"><a
                  href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/launch-bootstrap-4-template-for-saas-businesses/"
                  target="_blank">Launch</a></span> - <span className="project-tagline">A responsive website template designed to help startups promote their products or services.</span>
                        </div>

                        <div className="item">
              <span className="project-title"><a
                  href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/devcard-bootstrap-4-vcard-portfolio-template-for-software-developers/"
                  target="_blank">DevCard</a></span> - <span className="project-tagline">A portfolio website template designed for software developers.</span>
                        </div>

                        <div className="item">
              <span className="project-title"><a
                  href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/bootstrap-template-for-mobile-apps-nova-pro/"
                  target="_blank">Nova Pro</a></span> - <span className="project-tagline">A responsive Bootstrap theme designed to help app developers promote their mobile apps</span>
                        </div>

                        <div className="item">
              <span className="project-title"><a
                  href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-web-development-agencies-devstudio/"
                  target="_blank">DevStudio</a></span> -
                            <span className="project-tagline">A responsive website template designed to help web developers/designers market their services. </span>
                        </div>

                    </section>


                    <section className="skills-section section">
                        <h2 className="section-title">
                            <span className="icon-holder">
                                <i className="fas fa-rocket"></i>
                            </span>Skills &amp; Proficiency</h2>
                        <div className="skillset">
                            <div className="item">
                                <h3 className="level-title">NodeJs</h3>
                                <div className="progress level-bar">
                                    <div className="progress-bar theme-progress-bar" role="progressbar"
                                         style={{width: '99%'}}
                                         aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>


                            <div className="item">
                                <h3 className="level-title">Javascript &amp; jQuery</h3>
                                <div className="progress level-bar">
                                    <div className="progress-bar theme-progress-bar" role="progressbar"
                                         style={{ width: '98%' }}
                                         aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>


                            <div className="item">
                                <h3 className="level-title">HTML5 &amp; CSS</h3>
                                <div className="progress level-bar">
                                    <div className="progress-bar theme-progress-bar" role="progressbar"
                                         style={{width: '98%'}}
                                         aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="item">
                                <h3 className="level-title">Angular</h3>
                                <div className="progress level-bar">
                                    <div className="progress-bar theme-progress-bar" role="progressbar"
                                         style={{ width: '70%' }}
                                         aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>


                            <div className="item">
                                <h3 className="level-title">React &amp; Redux</h3>
                                <div className="progress level-bar">
                                    <div className="progress-bar theme-progress-bar" role="progressbar"
                                         style={{width: '85%'}}
                                         aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                        </div>
                    </section>


                </div>

            </div>

            <footer className="footer">
                <div className="text-center">

                    <small className="copyright">Designed with <i className="fas fa-heart"></i> by <a
                        href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers
                    </small>
                </div>

            </footer>

        </div>
    );
}

export default App;
