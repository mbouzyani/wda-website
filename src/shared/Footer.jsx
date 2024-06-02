import logo from '../assets/Logo.png'
import fbImg from '../assets/fbicon.png'
import InstaImg from '../assets/instagicon.png'

const Footer = () => { 
    return (
        
        <div className="bg-[#a8acd6] md:px-14 p-4 max-w-screen-2xl mx-auto">
            <div className='my-12 flex flex-col md:flex-row gap-10'>
                <div className='md:w-1/2 '>
                    <a href='/' className=' text-2xl font-semibold flex items-center space-x-3 text-primary'>
                        <img src={logo} alt="" className='w-40 inline-block items-center' /><span className='text-white'>Digital</span>
                    </a>
                    <p className='md:w-1/2'>Une agence digitale web qui assure la rentabilité des projets web de ses clients.</p>
                    <div>
                        {/*  <input type="email" name="email" id="email" placeholder='Enter your email'
                            className='bg-[#422c7f59] py-2 px-2 rounded-md focus:outline-none' />
                        <input type="submit" value="Subscribe" className='px-4 py-2 bg-secondary rounded-md -ml-2
                         cursor-pointer hover:bg-white hover:text-primary duration-300 transition-all' /> */}
                       
                    </div>
                </div>
                {/* footer links */}
                <div className='md:w-1/2 flex flex-col md:flex-row justify-between gap-8 items-start'>
                    <div className='space-y-4 mt-5'>
                        <h4 className='text-xl'>Agence</h4>
                        <ul className='space-y-3'>
                            <a href="/" className='block hover:text-gray-300'><li>À propos</li></a>
                            <a href="/" className='block hover:text-gray-300'><li>Services</li></a>
                        </ul>
                    </div>

                     <div className='space-y-4 mt-5'>
                        <h4 className='text-xl'>Liens</h4>
                        <ul className='space-y-3'>
                            <a href="/" className='block hover:text-gray-300'><li>Conditions d'utilisation</li></a>
                            <a href="/" className='block hover:text-gray-300'><li>politique de confidentialité</li></a>

                        </ul>
                    </div>

                     <div className='space-y-4 mt-5'>
                        <h4 className='text-xl'>Contact</h4>
                        <ul className='space-y-3'>
                            <a className=' hover:text-gray-300'><li>wilios.digital@agency.com </li></a>
                            <a className=' hover:text-gray-300'><li>Agence Wilios Digital</li></a>
                        </ul>
                    </div>

                     
                </div>
            </div>

            <hr />
            
            <div className='flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8'>
                <p> Wilios Digital Agency 2024. All rights reserved.</p>
                <div className='flex items-center space-x-4'>
                    <img src={fbImg} alt="" className='w-8 cursor-pointer hover:-translate-y-4 transition-all
                     duration-300'   />
                    <img src={InstaImg} alt="" className='w-8 cursor-pointer hover:-translate-y-4 transition-all
                     duration-300' />
                </div>
            </div>

        </div>
    );
};

export default Footer;