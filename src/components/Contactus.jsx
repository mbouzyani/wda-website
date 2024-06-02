// motion
import { motion } from "framer-motion"
// variants
import {fadeIn} from '../variants'

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import messageImg from '../assets/message.png';

import { Toaster, toast } from 'sonner';


export const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_j8tmwbp', 'template_yenppld', form.current, {
        publicKey: 'DWE9nsYxjVlifQzr2',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  <th/>
  return (

 

    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12
   lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800" >
	<div className="flex flex-col justify-between">
        <motion.div className="space-y-2"
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}>
			<h2 className="text-4xl font-bold leading-tight lg:text-5xl">Discutez avec nous!</h2>
			<div className="dark:text-gray-600">Parlez nous de votre projet.</div>
		</motion.div>
    
        {/* Contact Image */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.7}}
        >
          <img src={messageImg} alt="" />
      </motion.div>
		
      </div>
      <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.7}}>

        <form ref={form} onSubmit={sendEmail} noValidate="" className="space-y-6">
		
			
      <label>Nom complet</label>
      <input type="text" name="from_name" className="w-full p-3 rounded dark:bg-gray-100" />
		
		
			
      <label>Email</label>
      <input type="text" name="from_email" className="w-full p-3 rounded dark:bg-gray-100"  />
            
		
		
			<label>Message</label>
			<textarea name="message" rows="3" className="w-full p-3 rounded dark:bg-gray-100"></textarea>
		
       <div className="w-full mx-auto mt-8 flex items-center justify-center">
            <button
            input type="submit" value="Send"  className="w-full p-3 text-sm font-bold tracking-wide uppercase
             rounded btnPrimary white" onClick={() => toast.success('Message envoyé')}>Envoyez</button>
            <Toaster/>
        </div>   
	</form>

      </motion.div>
	
</div>
 
  );
};

export default Contactus;
