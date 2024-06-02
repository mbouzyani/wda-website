import aboutImg1 from "../assets/about1.png";
import aboutImg2 from "../assets/about2.png";

import { useNavigate } from 'react-router-dom';


// motion
import { motion } from "framer-motion"
// variants
import {fadeIn} from '../variants'
const About = () => {

    const navigate = useNavigate();
    const handleClickQuote = () => {
        navigate('/quote');
}

    return (
        <div className=" my-24 md:px-14 p-4 max-w-s mx-auto space-y-10" id="about">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.7}}
                 className="md:w-1/2">
                    <img src={aboutImg1} alt="" />
                </motion.div>

                {/* About Content */}
                <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.7}}
                 className="md:w-2/5">
                    <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal" >Nous améliorons nos produits
                    <span className="text-secondary"> depuis de nombreuses années.</span></h2>
                    <p className="text-tartiary text-lg mb-7">Notre mission à nous, par contre, est de créer des solutions personnalisées
                     et innovantes pour nos clients.</p>
                    <button className="btnPrimary"onClick={handleClickQuote}>Commencer</button>
                    
                </motion.div>
                
            </div>
            <div className="h-8"></div>
            {/* 2nd part */}
             <div className=" my-204 flex flex-col md:flex-row-reverse justify-between items-center gap-8">
                <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.7}}
                
                className="md:w-1/2">
                    <img src={aboutImg2} alt="" />
                </motion.div>

                {/* About Content */}
                <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.7}}
                 className="md:w-2/5">
                    <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal" >Ce que nous faisons
                    <span className="text-secondary"></span></h2>
                    <p className="text-tartiary text-lg mb-7">Nous sommes un cabinet de conseil en logiciels international résolvant
                        des problèmes technologiques complexes. Nous connectons stratégie et exécution, aidant nos clients à renforcer
                        leur technologie de base, à évoluer avec flexibilité et à créer des expériences numériques transparentes. Grâce à notre vaste
                        expérience dans le développement de logiciels, nous avons été les pionniers des produits open source qui aident les équipes de
                        développement à créer de meilleurs web apllications et pro-logiciels.</p>
                    <button className="btnPrimary"onClick={handleClickQuote}>Commencer</button>
                    
                </motion.div>
                
            </div>
        </div>
    );
};

export default About;