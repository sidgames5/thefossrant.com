import './App.scss';
import { Pop, SlideUp, Reveal, HoverBig } from "./Animations"
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCode, faEnvelope, faFlask, faGlobe, faQuestion } from '@fortawesome/fontawesome-free-solid';
import { faBluesky, faCss3, faDocker, faGit, faGitAlt, faGithub, faGitSquare, faHtml5, faJava, faJs, faLinux, faMastodon, faPython, faReact } from "@fortawesome/free-brands-svg-icons"
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function App() {
    function ClassCard(props) {
        return (
            <HoverBig>
                <Pop className="class-card">
                    <span className="class-card-title"><span className="highlight">{props.name}</span></span>
                    <span className="class-card-percent">Final Grade: {props.score}%</span>
                    <span className="class-card-score">AP Score: {props.ap}</span>
                </Pop>
            </HoverBig>
        );
    }
    const Highlight = ({ children }) => (
        <Reveal className="highlight">
            {children}
        </Reveal>
    );
    const Section = ({ children, id }) => (
        <SlideUp className="section" id={`section$`}>{children}</SlideUp>
    );
    function ProjectCard(props) {
        return (
            <HoverBig>
                <Pop className="project-card">
                    <div className="project-card-left">
                        <span className="project-card-title"><span className="highlight">{props.name}</span></span>
                        <span className="project-card-desc">{props.description}</span>
                    </div>
                    <div className="project-card-right">
                        <a href={props.link} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGlobe} /></a>
                        <a href={props.source} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCode} /></a>
                    </div>
                </Pop>
            </HoverBig>
        );
    }
    function ExperienceCard(props) {
        return (
            <HoverBig>
                <Pop className="experience-card">
                    <div className="experience-card-left">
                        <span className="experience-card-title"><span className="highlight">{props.name}</span></span>
                        <span className="experience-card-desc">{props.position}</span>
                    </div>
                    <div className="experience-card-right">
                        <span className="ec-compound experience-card-location">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span className="ec-text">{props.location}</span>
                        </span>
                        <span className="ec-compound experience-card-time">
                            <FontAwesomeIcon icon={faCalendar} />
                            <span className="ec-text">{props.time}</span>
                        </span>
                    </div>
                </Pop>
            </HoverBig>
        );
    }
    function ActivitiesCard(props) {
        return (
            <HoverBig>
                <Pop className="activities-card">
                    <div className="activities-card-left">
                        <span className="activities-card-title"><span className={`highlight ${props.place.includes("1st") && "gold-medal"} ${props.place.includes("2nd") && "silver-medal"} ${props.place.includes("3rd") && "bronze-medal"}`}>{props.place}</span></span>
                        <span className="activities-card-desc">{props.name}</span>
                    </div>
                    <div className="activities-card-right">
                        <span className="ac-compound activities-card-location">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span className="ac-text">{props.location}</span>
                        </span>
                        <span className="ac-compound activities-card-time">
                            <FontAwesomeIcon icon={faCalendar} />
                            <span className="ac-text">{props.time}</span>
                        </span>
                    </div>
                </Pop>
            </HoverBig>
        );
    }
    function PEASection() {
        const [activeDiv, setActiveDiv] = useState(1);

        const showDiv = (divNumber) => {
            setActiveDiv(divNumber);
        };

        return (
            <SlideUp>
                <div className="pea-buttons">
                    <span className={`pea-text highlight ${activeDiv === 1 ? "underlined" : ""}`} onClick={() => showDiv(1)}>Projects</span>
                    <span className={`pea-text highlight ${activeDiv === 2 ? "underlined" : ""}`} onClick={() => showDiv(2)}>Experience</span>
                    <span className={`pea-text highlight ${activeDiv === 3 ? "underlined" : ""}`} onClick={() => showDiv(3)}>Activities</span>
                </div>

                <div className="pea-div">
                    {activeDiv === 1 && <div>
                        <ProjectCard language="python" name="Excalibur" description="A simple voice assistant that respects your privacy" link="https://github.com/sidgames5/excalibur" source="https://github.com/sidgames5/excalibur" />
                        <ProjectCard language="javascript" name="Dev Portfolio Roaster" description="Roasts your developer portfolio" link="https://portfolio-roast.thefossrant.com/" source="https://github.com/sidgames5/portfolio-roast" />
                        <ProjectCard language="javascript" name="RAID Calculator" description="A simple RAID calculator" link="https://sidgames5.github.io/raid-calculator/" source="https://github.com/sidgames5/raid-calculator" />
                    </div>}
                    {activeDiv === 2 && <div>
                        {/* <ExperienceCard name="name" position="position" location="location" time="time" /> */}
                        <p>None yet</p>
                    </div>}
                    {activeDiv === 3 && <div>
                        <ActivitiesCard name="HackNA @ North Allegheny Senior HS" place="3rd Place" location="Wexford, PA" time="Feb 2024" />
                        <ActivitiesCard name="Hack The Ram @ Pine-Richland HS" place="1st Place" location="Gibsonia, PA" time="Jan 2024" />
                    </div>}
                </div>
            </SlideUp>
        );
    }
    function SocialLink(props) {
        return (
            <HoverBig><Pop><a href={props.link} target="_blank" rel="noreferrer" className="social-link"><FontAwesomeIcon icon={props.icon} /></a></Pop></HoverBig>
        );
    }
    function EmailLink(props) {
        return (
            <HoverBig><Pop><a href={`mailto:${props.addr}`} className="social-link"><FontAwesomeIcon icon={faEnvelope} /></a></Pop></HoverBig>
        );
    }
    function Skill(props) {
        return (
            <HoverBig><span className="skill"><FontAwesomeIcon icon={(props.icon) ? props.icon : faQuestion} />{props.name}</span></HoverBig>
        );
    }
    return (
        <div className="container">
            {/* <div className="nav">
                <div className="vt-button-container">
                    <button>Home</button>
                    <button>button</button>
                </div>
            </div> */}
            <div className="main">
                <div className="section" id="section1">
                    <Reveal><h1>Siddarth Srinivasan</h1></Reveal>
                    <div className="social-links">
                        <SocialLink link="https://github.com/sidgames5" icon={faGithub} />
                        <EmailLink addr="sid@thefossrant.com" />
                    </div>
                    <span className="fade-out"></span>
                </div>
                <div className="section" id="section2">
                    <p className="mw-50">
                        <SlideUp>
                            I'm a <Highlight>front-end developer</Highlight> with interests in IT and interface design. Born and raised in <Highlight>Pittsburgh, PA</Highlight>. I play the drums and guitar in my free time. I have an interest in photography.
                        </SlideUp>
                    </p>
                </div>
                <div className="section" id="section3">
                    <p className="mw-50">
                        <SlideUp>
                            I'm currently a freshman in <Highlight>high school</Highlight> planning to major in computer science. I will graudate in June 2028.
                        </SlideUp>
                    </p>
                    {/* <div id="classes" className="grid-3">
                        <ClassCard name="AP Comp Sci Principles" score="93" ap="5" />
                    </div> */}
                </div>
                <div className="section" id="section4">
                    <PEASection />
                </div>
                <div className="section" id="section5">
                    <div className="skills">
                        <Skill exp="7" name="CSS" icon={faCss3} />
                        <Skill exp="7" name="HTML" icon={faHtml5} />
                        <Skill exp="4" name="Git" icon={faGitAlt} />
                        <Skill exp="3" name="Haxe" />
                        <Skill exp="3" name="Java" icon={faJava} />
                        <Skill exp="3" name="JavaScript" icon={faJs} />
                        <Skill exp="2" name="Linux" icon={faLinux} />
                        <Skill exp="2" name="Python" icon={faPython} />
                        <Skill exp="1" name="Docker" icon={faDocker} />
                        <Skill exp="1" name="Kotlin" />
                        <Skill exp="1" name="Flask" icon={faFlask} />
                        <Skill exp="0" name="React" icon={faReact} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
