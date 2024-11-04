import React from 'react';
import { motion } from 'framer-motion';
import '../css/hem.css';
//import backgroundImage from '../img/imaage.jpg.jpg';

function Home() {
    return (
        <motion.div
            className="home-background"
            /*style={{
                backgroundImage: `url(${backgroundImage})`, // Använd bilden här
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column'
            }}*/
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
        >
            {/* Eventuellt kan du lägga till text eller en välkomsthälsning här */}
            <motion.h1 
                className="home-title" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 2, delay: 1 }}
            >
                Hanadi Snunu 
            </motion.h1>

            <motion.p
                className="home-description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 1.5 }}
            >
                <p>En engagerad och nyfiken utvecklare med ett öga för smarta och användarvänliga lösningar.</p> 
                <p>Med erfarenhet inom Java, C# och React brinner jag för att skapa applikationer som både känns och fungerar rätt. </p> 
                <p>Här kan du se vad jag har byggt och få en inblick i min resa genom teknologins värld – från stabil backend-logik till inspirerande frontend-design.</p> 
            </motion.p>
        </motion.div>
    );
}

export default Home;
