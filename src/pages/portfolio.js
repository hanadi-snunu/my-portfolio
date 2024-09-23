import React from 'react';
import '../css/portfolio.css'; // CSS-filen för designen

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
            <h1 className="portfolio-header">Min Portfölj</h1>

            {/* Introduktion */}
            <section className="intro-section">
                <h2>Introduktion</h2>
                <p>
                    Jag studerar till Javautvecklare med inriktning integration och blir färdigutbildad 1 november 2024. 
                    Under min utbildning har jag lärt mig att arbeta med olika tekniker, däribland molnlösningar som AWS, och jag har blivit bekväm med flera programmeringsspråk och ramverk. 
                    Jag har erfarenhet av att utveckla backend-lösningar i Java och C#.NET, samt frontend-utveckling med JavaScript och React.
                </p>
            </section>

            {/* Kompetenser */}
            <section className="skills-section">
                <h2>Kompetenser</h2>
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
            </section>

            {/* Utbildning */}
            <section className="education-section">
                <h2>Utbildning</h2>
                <div className="education-item">
                    <h3>Campus Mölndals Yrkeshögskola (2024)</h3>
                    <p>Yrkeshögskoleexamen, Javautveckling - Integration</p>
                </div>
                <div className="education-item">
                    <h3>Pauliskolan (2013)</h3>
                    <p>Gymnasieexamen, Samhällsprogrammet inriktning samhälle</p>
                </div>
            </section>

            {/* Projekt */}
            <section className="projects-section">
                <h2>Projekt</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
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
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
