import { useNavigate } from 'react-router-dom';


const Plans = () => {

  const navigate = useNavigate();
  const handleClickQuote = () => {
    navigate('/quote');
}
    

    const packages = [
        {
            name: "Angular", description1: "Laissez-nous vous aider à donner vie à votre vision grâce à nos services de développement angular fiables et robustes.",
             techicon: "/src/assets/angular-icon.png" , green: "/src/assets/rectangle2.png"
        },

        
    ];

    const packages2 = [

        {
            name: "React", description2: "Nous efforçons de vous fournir les meilleurs services de développement ReactJS.",
            techicon: "/src/assets/react-icon.png", green: "/src/assets/rectangle2.png"
        },

    ];

    const packages3 = [
         {
            name: "Next", description3: "Engagez Next.js 'on-demand' avec nous pour créer des applications Web en combinaison avec un codage hybride.",
            techicon: "/src/assets/next-icon.png", green: "/src/assets/rectangle2.png"
        },
    ]

    


    return (
        <div className="md:px-14 p-4 max-w-s mx-auto py-10" id="plans">
            <div className="text-center">
                <h2 className="md:text-5xl text-3xl font-bold text-primary mb-2">Stack technologique de développement Web</h2>
                <p className="text-tartiary mx-auto px-8 text-2xl mb-8">Créativité, compétence et expertise dans les principales
                    technologies de développement Web.</p>
                
                {/* toggle Pricing */}
                
               
            </div>

            {/* Pricing Cards */}

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto">
                {
                    
                    packages.map((pkg1, index) => <div key={index} className="border py-10 md:px-6 px-4
                    rounded-lg shadow-3xl">

                        <h3 className="text-3xl font-bold text-center items-center flex justify-center text-primary">{pkg1.name}</h3>
                        <div className="image-icon mx-auto my-5">
                        <img src={pkg1.techicon} alt="" />
                       </div>
                        
                        <p className=" text-tartiary text-center my-5">{pkg1.description1}</p>

                        <ul className="mt-4 space-y-3 px-6">
                            <li className="flex gap-3 items-center"><img src={pkg1.green} alt="" className="w-4
                            h-4" /> Développement UI/UX angular.</li>
                            <li className="flex gap-3 items-center"><img src={pkg1.green} alt="" className="w-4
                            h-4" /> Videos lessons Développement angular personnalisé.</li>
                            <li className="flex gap-3 items-center"><img src={pkg1.green} alt="" className="w-4
                            h-4" /> Développement d'applications angular 'Single page' .</li>
                            <li className="flex gap-3 items-center"><img src={pkg1.green} alt="" className="w-4
                            h-4" /> Assistance et maintenance AngularJS.</li>
                            <li className="flex gap-3 items-center"><img src={pkg1.green} alt="" className="w-4
                            h-4" /> Développement angular d'applications Web en temps reel.</li>
                            
                        </ul>
                        <div className="w-full mx-auto mt-8 flex items-center justify-center">
                            <button className="btnPrimary"onClick={handleClickQuote}>Commencer</button>
                        </div>
                    </div>)
                    
                }

                {
                    
                    packages2.map((pkg2, index) => <div key={index} className="border py-10 md:px-6 px-4
                    rounded-lg shadow-3xl">

                        <h3 className="text-3xl font-bold text-center items-center flex justify-center text-primary">{pkg2.name}</h3>
                        <div className="image-icon mx-auto my-5">
                        <img src={pkg2.techicon} alt="" />
                       </div>
                        
                        <p className=" text-tartiary text-center my-5">{pkg2.description2}</p>

                        <ul className="mt-4 space-y-3 px-6">
                            <li className="flex gap-3 items-center"><img src={pkg2.green} alt="" className="w-4
                            h-4" /> Développement UI/UX React.</li>
                            <li className="flex gap-3 items-center"><img src={pkg2.green} alt="" className="w-4
                            h-4" /> Développement ReactJS pour des applications personnalisées en temps réel.</li>
                            <li className="flex gap-3 items-center"><img src={pkg2.green} alt="" className="w-4
                            h-4" /> Développement front-end ReactJS</li>
                            <li className="flex gap-3 items-center"><img src={pkg2.green} alt="" className="w-4
                            h-4" /> Assistance et maintenance ReactJS.</li>
                            <li className="flex gap-3 items-center"><img src={pkg2.green} alt="" className="w-4
                            h-4" /> ReactJS à la migration et l'intégration</li>
                            
                        </ul>
                        <div className="w-full mx-auto mt-8 flex items-center justify-center">
                            <button className="btnPrimary"onClick={handleClickQuote}>Commencer</button>
                        </div>
                    </div>)
                    
                }

                {
                    
                    packages3.map((pkg3, index) => <div key={index} className="border py-10 md:px-6 px-4
                    rounded-lg shadow-3xl">

                        <h3 className="text-3xl font-bold text-center items-center flex justify-center text-primary">{pkg3.name}</h3>
                        <div className="image-icon mx-auto my-5">
                        <img src={pkg3.techicon} alt="" />
                       </div>
                        
                        <p className=" text-tartiary text-center my-5">{pkg3.description3}</p>

                        <ul className="mt-4 space-y-3 px-6">
                            <li className="flex gap-3 items-center"><img src={pkg3.green} alt="" className="w-4
                            h-4" /> Services de personnalisation Next.js</li>
                            <li className="flex gap-3 items-center"><img src={pkg3.green} alt="" className="w-4
                            h-4" /> Mise à niveau et migration Next.js </li>
                            <li className="flex gap-3 items-center"><img src={pkg3.green} alt="" className="w-4
                            h-4" /> Développement d'applications Next 'Single page' .</li>
                            <li className="flex gap-3 items-center"><img src={pkg3.green} alt="" className="w-4
                            h-4" /> Développement Next d'applications Web en temps reel.</li>
                            
                        </ul>
                        <div className="w-full mx-auto mt-8 flex items-center justify-center">
                            <button className="btnPrimary"onClick={handleClickQuote}>Commencer</button>
                        </div>
                    </div>)
                    
                }
            </div>
            <br />

            <div className="text-center">
                <h2 className="md:text-4xl text-3xl font-bold text-primary mb-2">Personnalisez les technologies de votre projet requises avec nos spécialistes.</h2>
                <p className="text-tartiary mx-auto px-8 text-2xl mb-8">Que vous ayez besoin ou souhaitiez constituer une équipe de développement, nous avons simplifié
                    chaque étape pour vous permettre d'accélérer votre activité.</p>
                
                <div className="w-full mx-auto mt-8 flex items-center justify-center">
                        <button className="btnPrimary"onClick={handleClickQuote}>Proposez une mission</button>
                </div>
            </div>

                
        </div>

        
    );
};
export default Plans;