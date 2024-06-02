import banner from '../assets/banner.png'
import Banner from '../shared/Banner'
const Home = () => {
    return (
        <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24" id="home">
            <Banner banner={banner} heading="Développez votre Business avec Wilios Digital Agency" subheading="Offrant bien plus qu'un simple point de service. Boostez la présence en ligne de votre marque avec nos services
             de développement Web exceptionnels." btn1={'Commencer'} btn2={"Proposez"} />
            <div className='id="home"'></div>
            
        </div>
    );
};
export default Home;