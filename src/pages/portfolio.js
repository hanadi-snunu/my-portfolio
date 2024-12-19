import React from 'react';
import '../css/portfolio.css'; // CSS-filen för designen
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faGraduationCap, faProjectDiagram, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Slider from 'react-slick';

import image1 from '../img/projekt1.jpg.png';
import image2 from '../img/projekt2.jpg.png';
import image3 from '../img/projekt3.jpg.png';
import image4 from '../img/projekt4.jpg.png';
import image5 from '../img/projekt5.jpg.png';
import image6 from '../img/projekt6.jpg.png';

const Portfolio = () => {


    // Data för Gladpedagog-projektet
    const projects = [
        {
            title: "GLADPEDAGOG",
            description: "Gladpedagog är en plattform för nyblivna lärare som säljer kurser och delkurser. Projektet inkluderar JWT-autentisering, betalningslösningar och integrationer för nyhetsbrev och kontaktformulär.",
            technologies: ["C#.NET", "JWT", "React", "JavaScript", "Betalfunktioner"],
            backendLink: "https://github.com/94hansnu/gladpedagog",
            frontendLink: "https://github.com/94hansnu/Gladpedagogfront",
            liveLink: "http://www.gladpedagog.se"
        },

        {
            title: "HOUSE OF AESTHETICS",
            description: "Detta pågående projekt är utformat för en klinik där kunder kan läsa om behandlingar, se priser, boka tider och hitta rätt behandling baserat på sina behov. Sidan erbjuder också kontaktmöjligheter och anmälan till klinikens utbildningar. Projektet är inte färdigt, men här är ett utkast av bilder och demo.",
            technologies: ["JavaScript", "React", "CSS", "HTML"],
            images: [image1, image2, image3, image4, image5, image6],
            websiteLink: "https://houseofaesthetics.se" 
        }
    ];

    // Inställningar för bildkarusellen
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    

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
                    Jag är Javautvecklare med inriktning på integration, med erfarenhet av 
                    att bygga backend-lösningar i Java och C#.NET samt frontend-utveckling 
                    med JavaScript och React. Under min utbildning har jag arbetat med flera 
                    tekniker, däribland molnlösningar som AWS, och jag har genomfört flera 
                    projekt som visar min förmåga att skapa fullständiga applikationer. Jag är 
                    bekväm med olika programmeringsspråk och ramverk och har färdiga projekt 
                    som demonstrerar min kompetens.
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
                 {/* Praktik på Gen Z Consulting */}
    <div className="experience-item">
        <h3>Praktikant på Gen Z Consulting (Maj - Oktober 2024)</h3>
        <p>
            Under min praktikperiod på Gen Z Consulting arbetade jag i ett team för att implementera projektet Gladpedagog, från design till produktion. 
            Här fick jag möjlighet att bidra med både frontend- och backend-utveckling samt samarbeta nära med andra utvecklare för att leverera en högkvalitativ lösning. 
            Praktiken gav mig värdefull erfarenhet av att arbeta i ett professionellt utvecklingsteam.
        </p>
    </div>
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
                    <li>Språk: Flytande svenska och arabiska, god engelska och danska i tal och skrift</li>
                    <li>Pågående kurs: Fördjupning i relationsdatabaser </li>
                    <li>Pågående kurs: Prompt Engineering och generativ AI </li>
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
                    <h3>Nackademin Yrkeshögskola (2024)</h3>
                    <p>Kurser, Fördjupning i relationsdatabaser för utvecklare och Prompt Engineering och generativ AI för utvecklare</p>
                </div>
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
                            {project.websiteLink && (
                <a href={project.websiteLink} target="_blank" rel="noopener noreferrer" className="project-link">Besök hemsidan</a>
            )}
                            {project.images && (
                                <Slider {...sliderSettings} className="project-slider">
                                    {project.images.map((image, i) => (
                                        <div key={i}>
                                            <img src={image} alt={`Slide ${i + 1}`} className="slider-image" />
                                        </div>
                                    ))}
                                </Slider>
                            )}
                            {project.backendLink && (
                                <a href={project.backendLink} target="_blank" rel="noopener noreferrer" className="project-link">Backend på GitHub</a>
                            )}
                            {project.frontendLink && (
                                <a href={project.frontendLink} target="_blank" rel="noopener noreferrer" className="project-link">Frontend på GitHub</a>
                            )}
                            {project.liveLink && (
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">Live-sida</a>
                            )}
                            
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </div>
    );
};

export default Portfolio;
