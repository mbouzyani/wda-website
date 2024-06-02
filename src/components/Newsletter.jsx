import banner from '../assets/newsletter.png'
import Banner from '../shared/Banner'
const Newsletter = () => {
    return (
        <div className="md:px-14 p-4 max-w-screen-2xl mx-auto mt-12">
            <Banner banner={banner} heading="Laissez-nous créons quelque chose de formidable ensemble." subheading="Nous croyons
             qu'il est important de transformer les idées en réalité et nous sommes prêts à nous joindre à votre voyage. Contactez-nous
              et commençons à discuter de votre projet." btn1={'Commencer'} btn2={"Questionnez vous"} />
            
        </div>
    );
};
export default Newsletter;