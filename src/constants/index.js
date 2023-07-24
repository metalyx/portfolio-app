import {
    frontend,
    backend,
    software,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    intradesk,
    school,
    gotour,
    perscholas,
    mylibrary,
    quizpopapp,
    weatherapp,
    mai,
    coursera,
    github,
    telegram,
    linkedin,
    resume,
    fileManager,
} from '../assets';

export const navLinks = [
    {
        id: 'about',
        title: 'About',
    },
    {
        id: 'path',
        title: 'Path',
    },
    {
        id: 'contact',
        title: 'Contact',
    },
];

const services = [
    {
        title: 'Web Development',
        icon: web,
    },
    {
        title: 'Frontend Development',
        icon: frontend,
    },
    {
        title: 'Backend Development',
        icon: backend,
    },
    {
        title: 'Software Engineering',
        icon: software,
    },
];

const contacts = [
    {
        title: 'LinkedIn',
        icon: linkedin,
        link: 'https://linkedin.com/in/vitalii-t/',
    },
    {
        title: 'Resume',
        icon: resume,
        link: 'https://www.dropbox.com/s/hv3hsyuny57xu3g/Vitalii_Tereshchenko_Resume.pdf?dl=0',
    },
    {
        title: 'Github',
        icon: github,
        link: 'https://github.com/metalyx',
    },
    {
        title: 'Telegram',
        icon: telegram,
        link: 'https://t.me/metalyxxx',
    },
];

const technologies = [
    {
        name: 'HTML 5',
        icon: html,
    },
    {
        name: 'CSS 3',
        icon: css,
    },
    {
        name: 'JavaScript',
        icon: javascript,
    },
    {
        name: 'TypeScript',
        icon: typescript,
    },
    {
        name: 'React JS',
        icon: reactjs,
    },
    {
        name: 'Redux Toolkit',
        icon: redux,
    },
    {
        name: 'Node JS',
        icon: nodejs,
    },
    {
        name: 'MongoDB',
        icon: mongodb,
    },
    {
        name: 'git',
        icon: git,
    },
    {
        name: 'figma',
        icon: figma,
    },
    {
        name: 'Tailwind CSS',
        icon: tailwind,
    },
];

const experiences = [
    {
        title: 'Basics of programming',
        company_name: 'High School',
        icon: school,
        iconBg: '#E6DEDD',
        date: '2013 - 2016',
        points: [
            'My older brother showed me how to program simple things in C++.',
            'I was tinkering with functions, variables and syntax at that time.',
            'I found the concept of programming things to be so exciting that I dedicated my focus to preparing for university to continue my studies.',
        ],
    },
    {
        title: 'My passion for Web Development',
        company_name: 'Moscow Aviation Institute',
        icon: mai,
        iconBg: '#21325B',
        date: '2016 - 2020',
        points: [
            'While studying at the university, I gained a strong understanding of the fundamentals of computer science.',
            'I completed several projects using PHP, JavaScript, and HTML & CSS. It was during this time I discovered my passion for web development.',
            "I successfully completed my studies and earned a bachelor's degree in computer science.",
            'As the field of development constantly evolves, I found it necessary to study modern solutions for web development.',
        ],
    },
    {
        title: 'Self-Studying and Polishing Web Development Skills',
        company_name: 'Coursera Platform and Internet Research',
        icon: coursera,
        iconBg: '#E6DEDD',
        date: '2019 - present',
        points: [
            'I embarked on the path of becoming a frontend developer and directed my focus towards mastering React.js, various UI frameworks, and advanced HTML & CSS techniques.',
            'I successfully completed the online React and Bootstrap programs offered by the Hong Kong University of Science and Technology (HKUST).',
            'At this point I was applying for different positions and solving various test tasks using my developed skills.',
            'During this phase, I actively pursued numerous job opportunities and demonstrated my acquired skills by effectively handling a variety of test tasks and challenges.',
            'Eventually, I received two offers from different companies, and after careful consideration, I chose a company that had a close partnership with Mercedes-Benz in Russia.',
            'I have a genuine passion for learning and regularly engage in courses and research to explore new topics and expand my knowledge.',
        ],
    },
    {
        title: 'Frontend Engineer',
        company_name: 'Intradesk',
        icon: intradesk,
        iconBg: '#E6DEDD',
        date: 'September 2020 - February 2022',
        points: [
            'I gained valuable experience with TypeScript, adopted proper git flow practices, and collaborated with diverse teams.',
            'I refactored code and gained insight into the structure and functioning of large-scale frontend projects.',
            'Additionally, I honed my skill in optimizing frontend applications by reducing the size of large libraries that had a significant impact on application loading speed and overall performance. As a result, I successfully decreased the time of the first rendering of pages by 17%.',
            "I collaborated with a backend developer to create a CMS that allowed non-technical employees to manage the site's content. This saved about 16 hours a week of technical employees' working time.",
            "Through my exploration of various tools, I gained a deep understanding of the impact that a developer's choice can have. In one instance, our team was using an outdated tool to create our development server for a React application. Recognizing the need for improvement, I advised my team to adopt a more modern solution. As a result, we experienced a significant increase in the loading speed of the development server, reducing the time required for each project build by 80%.",
            'I actively participated in code reviews, which proved invaluable in developing my ability to provide and receive constructive feedback to fellow developers.',
        ],
    },
    {
        title: 'Frontend Engineer',
        company_name: 'GoTour',
        icon: gotour,
        iconBg: '#E6DEDD',
        date: 'March 2022 - July 2022',
        points: [
            'Streamlined the development process and implemented TypeScript, in the existing project.',
            "Performed code refactoring and conducted a thorough review, identifying the absence of cleanup functions and addressing it accordingly. This improvement allowed us to entirely eliminate all freezes encountered by 30% of the website's users",
            'Actively implemented and maintained Git flow throughout team development, saving 10 hours per week of manually searching for certain Git commits',
            'Removed all deprecated and legacy methods from the application, saving roughly 3 hours a week in maintaining that part of the project code base',
            'Utilized advanced build automation tools, such as Webpack, Gulp, and Parcel, to create high-performance builds that streamlined common shell operations for my team. This automation reduced time spent by 35%, allowing us to focus on more complex tasks and further improve our development process',
        ],
    },
    {
        title: 'Software Engineer Bootcamp',
        company_name: 'PerScholas',
        icon: perscholas,
        iconBg: '#E6DEDD',
        date: 'March 2023 - July 2023',
        points: [
            'After moving to the US, I made the decisive choice to enroll in a Software Engineering Bootcamp, attending the program in person.',
            'I had the opportunity to interact with a diverse group of individuals who shared the same passion for software engineering. This experience greatly enhanced my communication skills and fostered a collaborative mindset necessary for working in a fast-paced environment.',
            'I expanded my knowledge of backend technologies and tools, including MongoDB, Mongoose, and Express. These technologies empowered me to create robust API services and develop full-stack solutions.',
        ],
    },
];

const testimonials = [
    // {
    //     testimonial:
    //         'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    //     name: 'Sara Lee',
    //     designation: 'CFO',
    //     company: 'Acme Co',
    //     image: 'https://randomuser.me/api/portraits/women/4.jpg',
    // },
];

const projects = [
    {
        name: 'MyLibrary App',
        description:
            'Introducing MyLibrary, a comprehensive fullstack application that brings the functionality of a traditional library to your fingertips. With its sleek and minimalist interface, MyLibrary allows you to effortlessly manage books, users, and bookings, while offering seamless login and authorization features with different roles.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'mongodb',
                color: 'green-text-gradient',
            },
            {
                name: 'express',
                color: 'green-text-gradient',
            },
            {
                name: 'MUI',
                color: 'pink-text-gradient',
            },
            {
                name: 'jsonwebtoken',
                color: 'blue-text-gradient',
            },
        ],
        image: mylibrary,
        source_code_link: 'https://github.com/metalyx/fullstack-library-app',
    },
    {
        name: 'Weather App',
        description:
            'Weather App is a simple and convenient tool to keep you updated on the latest weather conditions. With just a few clicks, you can instantly access accurate weather information based on your geolocation or any city in the world.',
        tags: [
            {
                name: 'javascript',
                color: 'text-yellow-400',
            },
            {
                name: 'css',
                color: 'green-text-gradient',
            },
            {
                name: 'html',
                color: 'pink-text-gradient',
            },
        ],
        image: weatherapp,
        source_code_link: 'https://github.com/metalyx/weather-app',
    },
    {
        name: 'Quiz Pop App',
        description:
            "The Quiz Pop App is an interactive application designed to test your knowledge on different topics.The app's intuitive user interface allows participants to easily navigate through the quiz, selecting their answers from a range of options. At the end of the quiz, users are presented with their overall results, showcasing their performance and knowledge on the chosen topic.",
        tags: [
            {
                name: 'javascript',
                color: 'text-yellow-400',
            },
            {
                name: 'css',
                color: 'green-text-gradient',
            },
            {
                name: 'html',
                color: 'pink-text-gradient',
            },
        ],
        image: quizpopapp,
        source_code_link: 'https://github.com/metalyx/quiz-pop-hackathon',
    },
    {
        name: 'File Manager',
        description:
            'File Manager App. This is like a simple version of Google Driver or Dropbox. Just create account and upload your files!',
        tags: [
            {
                name: 'javascript',
                color: 'text-yellow-400',
            },
            {
                name: 'typescript',
                color: 'blue-text-gradient',
            },
            {
                name: 'mui',
                color: 'green-text-gradient',
            },
            {
                name: 'react',
                color: 'text-blue-400',
            },
            {
                name: 'jwt',
                color: 'text-green-300',
            },
        ],
        image: fileManager,
        source_code_link: 'https://github.com/metalyx/file-manager',
    },
];

export {
    services,
    technologies,
    experiences,
    testimonials,
    projects,
    contacts,
};
