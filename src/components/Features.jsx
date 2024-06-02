import featuredImg1 from "../assets/progdev.png";
import featuredImg2 from "../assets/designicon.png";
import featuredImg3 from "../assets/seoicon.png";

// motion
import { motion } from "framer-motion"
// variants
import {fadeIn} from '../variants'

const Features = () => {
    return (

        <div className="md:px-14 p-4 max-w-s py-10 px-4 max-w-screen-2xl mx-auto" id="features">
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.7}}
                className="text-center">
                <h2 className="md:text-5xl text-3xl font-bold text-primary mb-2">Développement Web de processus axés sur le succès</h2>
                <p className="text-tartiary md:w-1/3 mx-auto px-4 text-2xl mb-8">Libérez le potentiel de votre marque avec nous</p>
                </motion.div>

        
           <div className="my-24 md:px-14 px-4 max-w-screen-4xl mx-auto" >
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                
                {/* Freatured Cards*/}
                <motion.div
                   variants={fadeIn("up", 0.2)}
                   initial="hidden"
                   whileInView={"show"}
                   viewport={{once: false, amount: 0.7}}
                className="w-full ">
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
                        <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 
                       items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
                  <div className="text-center">
                     <div className="image-container">
                     <img src={featuredImg1} alt="" />
                    </div>
                         <h5 className="text-2xl font-semibold text-primary px-5 
                          mt-5">Développement web</h5>
                          <br />
                    <p className="text-tartiary  mx-auto px-4 "> Wilios Digital peut vous aider à tirer parti du segment en croissance
                      rapide du développement d'applications web. Les applications web peuvent contribuer à accroître l’engagement
                      et à favoriser la fidélité des clients et la reconnaissance de la marque.</p>
                        </div>
                    </div>
                    <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 
                    items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer
                    md:mt-16">
                  <div className="text-center">
                         <div className="image-container">
                        <img src={featuredImg2} alt="" />
                       </div>
                         <h5 className="text-2xl font-semibold text-primary px-5 
                          mt-5">UI/UX Design</h5>
                          <br />
                          <p className="text-tartiary  mx-auto px-4 "> Vous souhaitez construire votre produit avec une équipe
                           qui établit un processus de conception clair ? Notre équipe de conception est un petit studio de conception
                            au sein d'une grande société de logiciels qui vous aidera à créer facilement et rapidement un produit attrayant.</p>
                  </div>
                  
                    </div>
                    <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 
                    items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
                       <div className="text-center">
                         <div className="image-container">
                         <img src={featuredImg3} alt="" />
                       </div>
                         <h5 className="text-2xl font-semibold text-primary px-5 
                          mt-5">Solutions de SEO</h5>
                          <br />
                    <p className="text-tartiary  mx-auto px-4 "> Optimisation de l'infrastructure de votre site pour améliorer sa découvrabilité
                      par les moteurs de recherche. Cela inclut la vitesse de chargement, la compatibilité mobile, l'indexation et l'architecture du site.</p>
                        </div>
                </div>
                    </div>
            </motion.div>
            </div>
            </div>
         </div> 
    );
};
export default Features;