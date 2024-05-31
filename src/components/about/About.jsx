import banner from '/src/assets/ales-nesetril-Im7lZjxeLhg-unsplash.jpg'


const About = () => {
    return (
        <div className={'mt-4 items-center'}>
            <div className={'mb-8 font-bold text-3xl text-center items-center'}>
                <h1>About</h1>
            </div>

            <div className={'flex justify-center  mb-5 items-center w-3/2 space-x-20 mr-4'}>
                {/*    image*/}
                <div className="image-container hidden sm:flex justify-center m-10  ">
                    <img className={' shadow-2xl rounded-2xl'} src={banner} alt="Description of the image"
                         style={{width: '1800px', height: '580px'}}
                    />
                </div>
                {/*    details*/}
                <div
                    className={'sm:text-center items-center justify-center border border-gray-300  shadow-2xl px-12 py-12'}>
                    <h1 className={'font-semibold text-xl sm:text-3xl border-b-2 border-gray-400 pb-2'}>
                        Java backend & React Developer
                    </h1>
                    <p className={'text-base sm:text-lg'}>
                        Expert Java backend developer proficient in Spring Boot, with extensive experience in database
                        management. Skilled in building responsive and intuitive user interfaces using React.js and
                        React Native.
                    </p>
                    <div>
                        <p className={'text-base sm:text-lg'}>
                            Equally adept at crafting responsive and intuitive user interfaces using React.js and React
                            Native, I bring a comprehensive skill set to software development projects. My focus on
                            delivering efficient, scalable solutions ensures optimal performance and client satisfaction
                        </p>
                    </div>
                    <br/> <a
                    className={'text-2xl sm:px-2 sm:py-2 sm:mt-2 sm:mb-5 px-3 py-3 bg-orange-500 hover:bg-orange-600 font-bold rounded-full space-y-4 mt-4 shadow-2xl text-center items-center'}
                    href="/contact">Read More</a>
                </div>

            </div>

        </div>
    )
}
export default About;