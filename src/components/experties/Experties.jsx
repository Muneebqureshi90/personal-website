import bannerBackground from '../../assets/banner_wallpaper.svg';

const Experties = () => {


    return (
        <div className={''}>
            <h1 className={'my-14 text-4xl font-bold text-center'}>Expertise</h1>
            {/*    box section*/}
            <div style={{
                backgroundImage: `url(${bannerBackground})`,
                backgroundSize: 'cover'
            }} className={'flex py-14 '}>
                {/*text container*/}
                <div className={'flex justify-center'}>
                    <div
                        className={'w-2/3 text-center space-y-4 text-white transition-transform transform hover:scale-105'}>
                        <h1 className={'text-3xl font-bold '}>I love these technologies</h1>
                        <p className={'text-lg'}>
                            Harnessing Spring Boot and Java for robust backend solutions, while leveraging React.js and
                            React Native for dynamic and seamless front-end experiences, encapsulates my passion for
                            crafting innovative, database-driven applications.</p>
                        <br/>
                        <a
                            href="/src/assets/Muneeb-Haider%20CV.pdf" // Adjust the path if the file is located in a subdirectory within the public folder
                            download="Muneeb-Haider-CV.pdf" // Specify the desired name for the downloaded file
                            className="px-3 py-3 shadow-lg bg-orange-400 xs:rounded-2 sm:rounded-full font-bold shadow-md text-black hover:bg-orange-500"
                        >
                            Download CV
                        </a>


                    </div>
                </div>

                {/*skills Container*/}
                <div className={'flex justify-center'}>
                    <div className={'flex w-2/3 space-x-4 flex-wrap  '}>
                        <p className={'bg-gray-300 w-fit px-3 mt-3 py-3 font-semibold rounded-full transition-transform transform hover:scale-105'}>Core
                            Java</p>
                        <p className={'bg-gray-300 w-fit px-3 mt-3 py-3 font-semibold rounded-full transition-transform transform hover:scale-105'}>Advance Java</p>
                        <p className={'bg-gray-300 w-fit px-3 py-3 mt-3 font-semibold rounded-full transition-transform transform hover:scale-105'}>JDBC</p>
                        <p className={'bg-gray-300 w-fit px-3 py-3 mt-3 font-semibold rounded-full transition-transform transform hover:scale-105'}>Hibernate (ORM
                            Tools)</p>
                        <p className={'bg-gray-300 w-fit px-3 py-3 mt-3  font-semibold rounded-full transition-transform transform hover:scale-105'}>Spring
                            Framework</p>
                        <p className={'bg-gray-300 w-fit px-3 py-3 mt-3 font-semibold rounded-full transition-transform transform hover:scale-105'}>Spring Framework with
                            projects</p>
                        <p className={'bg-gray-300 w-fit px-3 py-3 mt-3  font-semibold rounded-full transition-transform transform hover:scale-105'}>Spring Boot</p>
                        <p className={'bg-gray-300 w-fit px-3 py-3 mt-3 font-semibold rounded-full transition-transform transform hover:scale-105'}>Spring Security</p>
                        <p className={'bg-gray-300 w-fit px-3 py-3 mt-3 font-semibold rounded-full transition-transform transform hover:scale-105'}>Backend with
                            springboot</p>
                        <p className={'bg-gray-300 w-fit px-3 py-3 mt-3 font-semibold rounded-full transition-transform transform hover:scale-105'}>Full Stack
                            Project</p>
                        <p className={'bg-gray-300 w-fit px-3 py-3 mt-3 font-semibold rounded-full transition-transform transform hover:scale-105'}>Database with
                            sql</p>
                        <p className={'bg-gray-300 w-fit px-3 py-3 mt-3 font-semibold rounded-full transition-transform transform hover:scale-105'}>React js</p>
                        <p className={'bg-gray-300 w-fit px-3 py-3 mt-3 font-semibold rounded-full transition-transform transform hover:scale-105'}>React Native</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Experties