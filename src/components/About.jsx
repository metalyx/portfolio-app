import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import useWindowDimensions from '../hooks/useWindowDimensions';

export const ServiceCard = ({ index, title, icon }) => {
    const { width } = useWindowDimensions();

    const cardContent = () => (
        <motion.div
            variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
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
            {width > 767 && (
                <Tilt className='xs:w-[250px] w-full'>{cardContent()}</Tilt>
            )}
            {width <= 767 && (
                <div className='xs:w-[250px] w-full'>{cardContent()}</div>
            )}
        </>
    );
};

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn('', '', 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                I am a web developer focused on user experience and application
                performance. Experienced with SEO optimization. Developed and
                deployed various frontend applications in both small and large
                companies. Collaborated with different teams worldwide,
                including QA, designers, developers, managers and analytics
                professionals. I am familiar with different pipelines, CI/CD
                tools, and the development lifecycle. I am seeking to join a
                diverse and inclusive company that will help me leverage my web
                development skills.
            </motion.p>

            <div className='mt-20 flex flex-wrap gap-10'>
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        index={index}
                        {...service}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, 'about');
