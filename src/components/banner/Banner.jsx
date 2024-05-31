import bannerImage from '../../assets/DSC_7951-removebg-preview.png';
import bannerBackground from '../../assets/banner_wallpaper.svg';
import Typed from "typed.js";
import {useEffect, useRef} from "react";

const Banner = () => {

    // Create Ref element.
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["App Development", "Web Development", "Java", "Spring Boot", "Database", "React js", "React Native"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 100,
            typeSpeed: 120,
            backSpeed: 50,
            backDelay: 100,
            smartBackspace: true,
            loop: true,
            showCursor: true,
            // cursorChar: "!"
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: 'cover'
        }} className={'flex  items-center'}>

            {/*text*/}
            <div className={'flex justify-center text-black  transition-transform transform hover:scale-105'}>

                <div className={'w-full sm:w-2/3 text-center'}>
                    <h3 className={'text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-4 font-semibold'}>
                        Hi, I am
                    </h3>
                    <h1 className={'text-5xl font-bold'}>Muneeb Haider</h1>
                    <h2 className={'text-3xl'}>
                        A I am{' '}
                        <span className={'font-bold inline-block w-auto'} ref={el}></span>
                    </h2>                    <p className={'mt-4'}>Experienced Java developer proficient in React.js,
                    React Native, and Spring
                    Boot for crafting robust, scalable web and mobile applications with seamless backend database
                    integration.</p>

                    {/*icons*/}
                    <div className={'space-x-5 mt-3'}>
                        <a className={'rounded-full'} href="https://www.facebook.com/muneebhaidershafique">
                            <i className="fa-brands text-black text-3xl hover:bg-orange-300 hover:rounded-full fa-facebook"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/muneeb-haider/">
                            <i className="fa-brands text-black text-3xl hover:bg-orange-300 hover:rounded-full fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/muneebqureshi90">
                            <i className="fa-brands text-black text-3xl hover:bg-orange-300 hover:rounded-full fa-github"></i>
                        </a>
                        <a href="https://www.instagram.com/muneebqureshi90?igsh=MWx6N3FwaDJ5MWl0Yw==">
                            <i className="fa-brands text-black text-3xl hover:bg-orange-300 hover:rounded-full fa-instagram"></i>
                        </a>
                        <a href="mailto:muneebhaider564@gmail.com">
                            <i className="fa-solid text-black text-3xl hover:bg-orange-300 hover:rounded-full fa-envelope"></i>
                        </a>
                    </div>


                    <br/> <a
                    className={'text-2xl sm:px-2 sm:py-2 sm:mt-2 sm:mb-5 px-3 py-3 bg-orange-500 hover:bg-orange-600 font-bold rounded-full space-y-4 mt-4 shadow-2xl text-center'}
                    href="mailto:muneebhaider564@gmail.com">Contact ME</a>

                </div>
            </div>
            {/*banner*/}
            <div
                className="  transition-transform transform hover:scale-105 image-container hidden sm:flex w-full justify-center">
                <img className={'rounded-full shadow-2xl w-fit'} src={bannerImage} alt="Description of the image"
                    // style={{width: '430px', height: '530px'}}
                />
            </div>

        </div>
    );
};

export default Banner;
