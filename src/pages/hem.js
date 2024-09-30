import React from 'react';
import { motion } from 'framer-motion';
import '../css/hem.css';

function Home() {
    return (
        <motion.div
            className="home-background"
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
                Välkommen till min Portfölj
            </motion.h1>
        </motion.div>
    );
}

export default Home;
