import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {useState} from "react";

const Footer = () => {

    const [brandName,setBrandName]=useState('Muneeb Haider');
    const [menu, setMenu] = useState([
        {
            title:'Home',
            link:'/home',
            id:1
        },
        {
            title:'About',
            link:'/about',
            id:2
        },
        {
            title:'Skills',
            link:'/skills',
            id:3
        },
        {
            title:'Profolio',
            link:'/profolio',
            id:4
        },
        {
            title:'Contact',
            link:'/contact',
            id:5
        }
    ])
    return (
        <div className={'bg-gray-300 text-black rounded-t-3xl mt-8 md:mt-0'}>
            <div className={'flex flex-col md:flex-row justify-between p-8 md:px-32 px-5'}>
                <div className={'w-full md:w-1/4'}>
                    <h1 className={'hover:text-orange-300 font-bold text-xl pb-4'}>{brandName}</h1>
                    <p className={'text-lg'}>
                        Experienced Java developer proficient in Spring Boot and database management. Skilled in
                        React.js and React Native for creating engaging user interfaces and mobile applications.
                    </p>

                </div>
                <div className={'md:ml-12'}>
                    <h1 className={'font-medium text-xl pb-4 pt-5 md:pt-0'}>Links</h1>
                    <nav className={'flex flex-col gap-2'}>
                        <a className={'hover:text-orange-300 transition-all cursor-pointer'} href="/">
                            Home
                        </a>
                        <a className={'hover:text-orange-300 transition-all cursor-pointer'} href="/about">
                            About
                        </a>
                        <a className={'hover:text-orange-300 transition-all cursor-pointer'} href="/portfolio">
                            Portfolio
                        </a>
                        <a className={'hover:text-orange-300 transition-all cursor-pointer'} href="/contact">
                            Contact
                        </a>
                    </nav>
                </div>
                <div className={'md:ml-12'}>
                    <h1 className={'font-medium text-xl pb-4 pt-5 md:pt-0'}>Portfolio</h1>
                    <nav className={'flex flex-col gap-2'}>
                        <a className={'hover:text-orange-300 transition-all cursor-pointer'} href="/java-developer">
                            Java Developer
                        </a>
                        <a className={'hover:text-orange-300 transition-all cursor-pointer'} href="/react-js-developer">
                            React.js Developer
                        </a>
                        <a className={'hover:text-orange-300 transition-all cursor-pointer'}
                           href="/react-native-developer">
                            React Native Developer
                        </a>
                        <a className={'hover:text-orange-300 transition-all cursor-pointer'} href="/database-developer">
                            Database Developer
                        </a>
                    </nav>

                </div>
                <div className={'md:ml-12'}>
                    <h1 className={'font-medium text-xl pb-4 pt-5 md:pt-0'}>Contact Us</h1>
                    <nav className={'flex flex-col gap-2'}>
                        <a
                            className={'hover:text-orange-300 transition-all cursor-pointer'}
                            href="mailto:muneebhaider564@gmail.com"
                        >
                            Muneebhaider564@gmail.com
                        </a>

                        <a className="hover:text-orange-300 transition-all cursor-pointer"
                           href="https://wa.me/923156191735">
                            +92 31 5619 1735
                        </a>

                        <div className={'flex gap-2'}>
                            <a
                                className={'hover:text-orange-300 transition-all cursor-pointer'}
                                href="https://www.facebook.com/muneebhaidershafique"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebook/>
                            </a>
                            <a
                                className={'hover:text-orange-300 transition-all cursor-pointer'}
                                href="https://www.instagram.com/muneebqureshi90?igsh=MWx6N3FwaDJ5MWl0Yw=="
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram/>
                            </a>
                            <a
                                className={'hover:text-orange-300 transition-all cursor-pointer'}
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaTwitter/>
                            </a>
                            <a
                                className={'hover:text-orange-300 transition-all cursor-pointer'}
                                href="https://www.linkedin.com/in/muneeb-haider/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin/>
                            </a>
                            <a
                                className={'hover:text-orange-300 transition-all cursor-pointer '}
                                href="https://github.com/muneebqureshi90"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub className="mr-2"/>
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
            <div className={'text-center p-4'}>
                <p className={'text-lg'}>
                    @copyright developed by{' '}
                    <span className={'hover:text-orange-300 text-backgroundColor font-bold'}> Muneeb Haider</span> | All
                    rights reserved
                </p>
            </div>
        </div>
    );
};

export default Footer;
