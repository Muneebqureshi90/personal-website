import PropTypes from 'prop-types';
import banner from '/src/assets/ales-nesetril-Im7lZjxeLhg-unsplash.jpg'

const AboutSection = () => {
    return (
        <div className=" p-8 ">
            <div className="  justify-center items-center">
                <div className="mb-8 flex ">
                    <div>
                        <div className="image-container hidden sm:flex justify-center m-10 transition-transform transform hover:scale-105  ">
                            <img className={' shadow-2xl rounded-2xl'} src={banner} alt="Description of the image"
                                 style={{width: '2800px', height: '620px'}}
                            />
                        </div>
                    </div>
                    <div className={'w-3/2 shadow-2xl rounded-2xl p-5 justify-center items-center transition-transform transform hover:scale-105'}>
                        <h2 className="text-3xl font-bold mb-4">About Me</h2>
                        <p className="text-lg text-gray-700 mb-6">Welcome! I'm a backend developer proficient in Java
                            Spring Boot and database management. My focus is on crafting robust web apps with scalable
                            architecture, leveraging Java and Spring Boot expertise. With a knack for database design, I
                            ensure optimal performance for seamless user experiences.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">Several years ago, I embarked on my web development
                            journey, delving into React.js and React Native. Through diverse projects, I've honed my
                            skills, from crafting web apps to building versatile mobile solutions. Whether it's React.js
                            UIs or React Native apps, I'm fueled by innovation and thrive on pushing boundaries. Each
                            challenge is a chance to grow, driving me to explore new technologies and expand my
                            expertise.
                        </p>
                        <div className="mb-6">
                            <h3 className="text-xl font-bold mb-2">Professional Bio</h3>
                            <p className="text-lg text-gray-700">I am a seasoned software engineer specializing in
                                Spring Boot, Java, and database management, with 3 years of experience. Proficient in
                                React.js and React Native, I excel in frontend and mobile app development. Committed to
                                innovation, I deliver user-friendly solutions tailored to meet client needs.
                            </p>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Education</h3>
                        <div className="mb-2">
                            <p className="text-lg text-gray-700 font-semibold">Bachelor of Science in Computer
                                Science</p>
                            <p className="text-lg text-gray-700">University Of Lahore, 2021 - 2025</p>
                        </div>
                    </div>


                </div>

            </div>

            <div className="mb-6 mt-5 py-10 px-20 shadow-2xl justify-center items-center transition-transform transform hover:scale-105">
                <h3 className="text-4xl font-bold mb-8 text-center ">Skills</h3>
                <div className={'font-semibold text-2xl'}>
                    <SkillBox name="Java" level={90}/>
                    <SkillBox name="Spring Boot" level={85}/>
                    <SkillBox name="DataBase" level={80}/>
                    <SkillBox name="React js" level={60}/>
                    <SkillBox name="Tailwind CSS" level={65}/>
                    <SkillBox name="React Native" level={75}/>
                    {/*<SkillBox name="UI/UX Design" level={85}/>*/}
                </div>
            </div>
        </div>
    );
}

const SkillBox = ({name, level}) => {
    return (
        <div className="flex items-center mb-4 justify-center">
            <div className="w-1/4 ">
                <div className="text-xl font-semibold ">{name}</div>
            </div>
            <div className="w-1/2 sm:w-1/3 ">
                <div className="flex items-center">
                    <div className="w-8 mr-2 font-bold"></div>
                    <div className="bg-orange-100 h-2 rounded-lg flex-grow">
                        <div className="bg-orange-500 h-full" style={{width: `${level}%`, maxWidth: '100%'}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

SkillBox.propTypes = {
    name: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
};

export default AboutSection;
