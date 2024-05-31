import {useState, useEffect} from 'react';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ContactMailIcon from '@mui/icons-material/ContactMail';

import DownloadIcon from "@mui/icons-material/Download";
import bannerImage from "../../assets/DSC_7951-removebg-preview.png";

const Header = () => {
        const [isSidebarOpen, setIsSidebarOpen] = useState(false);
        const [isToggleVisible, setIsToggleVisible] = useState(true);

        // Function to handle toggle button visibility
        const handleToggleVisibility = () => {
            setIsSidebarOpen(!isSidebarOpen);
        };

        useEffect(() => {
            const handleResize = () => {
                setIsToggleVisible(window.innerWidth < 1024);
            };

            // Add event listener to handle window resize
            window.addEventListener('resize', handleResize);

            // Cleanup function to remove event listener
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, []);

        return (
            <div className={'h-20 border main flex justify-between items-center px-4 sm:px-16 bg-gray-300'}>
                {/* Logo */}
                <div className={'flex items-center'}>
                    <div className="image-container  justify-center mr-2">
                        <img className={'rounded-full shadow-2xl'} src={bannerImage}
                             alt="Description of the image"
                             style={{width: '50px', height: '50px'}}
                        />
                    </div>
                    <h1 className={'xs:text-lg sm:text-xl md:text-4xl lg:text-2xl font-bold'}>
                        Muneeb<br className="sm:hidden md:inline"/>
                    </h1>
                </div>


                {/* Toggle button for sidebar on mobile */}
                {isToggleVisible && (


                    <div className="ml-10 space-x-5 block sm:hidden  ">
                        <button onClick={handleToggleVisibility}
                                className="text-gray-500 hover:text-gray-900 focus:outline-none space-x-5 ml-40">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                )}

                {/* Slide-out sidebar */}
                {isSidebarOpen ? (


                    <div className="fixed inset-y-0 left-0 w-64 bg-gray-900 text-white p-4">
                        <h2 className="text-3xl font-bold mb-4">Menu</h2>
                        <ul className="space-y-10 text-2xl">
                            <li>
                                <a href="/home" className={'hover:text-orange-500 flex items-center'}>
                                    <HomeIcon className="mr-2" fontSize="small"/>Home
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="flex items-center hover:text-orange-500">
                                    <InfoIcon className="mr-2"/>About
                                </a>
                            </li>
                            <li>
                                <a href="/skills" className="flex items-center hover:text-orange-500">
                                    <WorkIcon className="mr-2"/>Skills
                                </a>
                            </li>
                            <li>
                                <a href="/portfolio" className="flex items-center hover:text-orange-500">
                                    <AssignmentIndIcon className="mr-2"/>Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="mailto:muneebhaider564@gmail.com"
                                   className="flex items-center hover:text-orange-500">
                                    <ContactMailIcon className="mr-2"/>Contact
                                </a>
                            </li>
                            <li>
                                <a  href="/src/assets/Muneeb-Haider%20CV.pdf" download
                                   className="hover:text-orange-500 flex items-center">
                                    <DownloadIcon className="mr-2"/>CV
                                </a>
                            </li>

                        </ul>
                        {/* Correctly closing the unordered list */}
                    </div>

                ) : (
                    <div>
                    <div
                            className={'hidden sm:flex xs:text-lg sm:text-xl md:text-xl lg:text-2xl space-x-7 text-md font-semibold'}>
                            <a href="/home" className={'hover:text-orange-500 flex items-center'}>
                                <HomeIcon className="mr-2" fontSize="large"/>Home
                            </a>
                            <a href="/about" className={'hover:text-orange-500 flex items-center'}>
                                <InfoIcon className="mr-2" fontSize="large"/>About
                            </a>
                            <a href="/skills" className={'hover:text-orange-500 flex items-center'}>
                                <WorkIcon className="mr-2" fontSize="large"/>Skills
                            </a>
                            <a href="/portfolio" className={'hover:text-orange-500 flex items-center'}>
                                <AssignmentIndIcon className="mr-2" fontSize="large"/>Portfolio
                            </a>
                            <a href="/contact" className={'hover:text-orange-500 flex items-center'}>
                                <ContactMailIcon className="mr-2" fontSize="large"/>Contact
                            </a>
                        </div>
                    </div>
                )
                }

                {/*Hire Me button */}
                {!isSidebarOpen && ( // Check if the sidebar is not open
                    <div className="hidden sm:block"> {/* Hide the button on small screens */}
                        <a
                            href="/src/assets/Muneeb-Haider%20CV.pdf"
                            // href="/Muneeb-Haider%20CV.pdf"
                            download="Muneeb-Haider-Cv.pdf"
                            className="px-5 py-3 bg-orange-400 xs:rounded-2 sm:rounded-full font-bold shadow-md text-black hover:bg-orange-500"
                        >
                            Hire Me
                        </a>


                    </div>
                )}


            </div>
        )
            ;
    }
;

export default Header;
