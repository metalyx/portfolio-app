import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { ServiceCard } from './About';
import { contacts } from '../constants';
import { fadeIn } from '../utils/motion';
import useWindowDimensions from '../hooks/useWindowDimensions';

import Tilt from 'react-parallax-tilt';

const ContactCard = ({ index, icon, title, link }) => {
    const { width } = useWindowDimensions();

    const cardContent = () => (
        <motion.div
            variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card cursor-pointer'
            onClick={() => window.open(link, '_blank')}
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-primary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
                <img
                    src={icon}
                    alt='web-development'
                    className='w-16 h-16 object-contain'
                />

                <h3 className='text-white text-[20px] font-bold text-center'>
                    {title}
                </h3>
            </div>
        </motion.div>
    );

    return (
        <>
            {/* Tilt works buggy on mobile version */}
            {width > 767 && (
                <Tilt className='xs:w-[250px] w-full'>{cardContent()}</Tilt>
            )}
            {width <= 767 && (
                <div className='xs:w-[250px] w-full'>{cardContent()}</div>
            )}
        </>
    );
};

const Contact = () => {
    return (
        <div className={`flex flex-col-reverse gap-10 overflow-hidden`}>
            <motion.div
                variants={slideIn('left', 'tween', 0.2, 1)}
                className='flex-[0.75] bg-tertiary p-8 rounded-2xl'
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contacts.</h3>
                <div className='flex sm:flex-row flex-wrap flex-col gap-4 mt-2'>
                    {contacts.map((contact, index) => (
                        <ContactCard key={index} index={index} {...contact} />
                    ))}
                </div>
            </motion.div>

            <motion.div
                variants={slideIn('right', 'tween', 0.2, 1)}
                className='md:h-[550px] h-[350px]'
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, 'contact');
