import React from 'react';
import '../css/portfolio.css'; // CSS-filen för designen
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faGraduationCap, faProjectDiagram, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Portfolio = () => {


    // Data för Gladpedagog-projektet
    const projects = [
        {
            title: "Gladpedagog",
            description: "Gladpedagog är en plattform för nyblivna lärare som säljer kurser och delkurser. Projektet inkluderar JWT-autentisering, betalningslösningar och integrationer för nyhetsbrev och kontaktformulär.",
            technologies: ["C#.NET", "JWT", "React", "JavaScript", "Betalfunktioner"],
            backendLink: "https://github.com/94hansnu/gladpedagog",
            frontendLink: "https://github.com/94hansnu/Gladpedagogfront",
            liveLink: "http://www.gladpedagog.se"
        }
    ];

    return (
        <div className="portfolio-page">
             <motion.h1 
                className="portfolio-header" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1 }}
            >
                Vem är Hanadi?
            </motion.h1>

            {/* Introduktion */}
            <motion.section 
                className="intro-section" 
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }}
            >
                <div className="intro-content">
                    <img src="/omMig.jpg" alt="Om mig" className="intro-image" />
                    <p>
                        Jag studerar till Javautvecklare med inriktning integration och blir färdigutbildad 1 november 2024. 
                        Under min utbildning har jag lärt mig att arbeta med olika tekniker, däribland molnlösningar som AWS, och jag har blivit bekväm med flera programmeringsspråk och ramverk. 
                        Jag har erfarenhet av att utveckla backend-lösningar i Java och C#.NET, samt frontend-utveckling med JavaScript och React.
                    </p>
                </div>
                </motion.section>

            {/* Arbetslivserfarenhet */}
            <motion.section 
                className="experience-section" 
                initial={{ opacity: 0, x: -50 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1 }}
            >
                <h2>Arbetslivserfarenhet <FontAwesomeIcon icon={faBriefcase} /></h2>
                <div className="experience-item">
                    <h3>Hemtjänstkoordinator (2016 - 2024)</h3>
                    <p>
                        Under mina åtta år som hemtjänstkoordinator arbetade jag med schemaplanering, bemanning och administrativa uppgifter som rör både personal och äldre. 
                        Jag hade även ansvar för att samordna och förbättra arbetsflöden, där jag tillämpade arbetsmetoder som påminner om Scrum för att optimera teamarbete och effektivitet.
                    </p>
                </div>
            </motion.section>

            {/* Kompetenser */}
            <motion.section 
                className="skills-section" 
                initial={{ opacity: 0, x: 50 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1 }}
            >
                <h2> Kompetenser <FontAwesomeIcon icon={faTools} /></h2>
                <ul>
                    <li>Objektorienterad programmering</li>
                    <li>Java (Maven, Spring Boot, Spring Security, JPA, JUnit, Mockito, CI/CD-pipelines)</li>
                    <li>C#.NET Framework/ .NET Core (ASP.NET Core, MVC, Razor Pages)</li>
                    <li>JavaScript, CSS, HTML, React</li>
                    <li>Databasdesign och administration: SQL Server, MySQL, NoSQL</li>
                    <li>Git, GitHub, Jenkins</li>
                    <li>Molnintegration (AWS)</li>
                    <li>API-utveckling</li>
                    <li>Verktyg: Figma, Miro, Trello</li>
                    <li>Arbetssätt: Scrum</li>
                    <li>Språk: Flytande svenska och arabiska, god engelska i tal och skrift</li>
                </ul>
            </motion.section>

            {/* Utbildning */}
            <motion.section 
                className="education-section" 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }}
            >
                <h2>Utbildning <FontAwesomeIcon icon={faGraduationCap} /> </h2>
                <div className="education-item">
                    <h3>Campus Mölndals Yrkeshögskola (2024)</h3>
                    <p>Yrkeshögskoleexamen, Javautveckling - Integration</p>
                </div>
                <div className="education-item">
                    <h3>Pauliskolan (2013)</h3>
                    <p>Gymnasieexamen, Samhällsprogrammet inriktning samhälle</p>
                </div>
            </motion.section>

            {/* Projekt */}
            <motion.section 
                className="projects-section" 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }}
            >
                <h2>Projekt <FontAwesomeIcon icon={faProjectDiagram} /></h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div 
                            key={index} 
                            className="project-card"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <ul className="tech-list">
                                {project.technologies.map((tech, i) => (
                                    <li key={i}>{tech}</li>
                                ))}
                            </ul>
                            <div className="project-links">
                                <a href={project.backendLink} target="_blank" rel="noopener noreferrer" className="project-link">Backend på GitHub</a>
                                <a href={project.frontendLink} target="_blank" rel="noopener noreferrer" className="project-link">Frontend på GitHub</a>
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">Live-sida</a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </div>
    );
};

export default Portfolio;
