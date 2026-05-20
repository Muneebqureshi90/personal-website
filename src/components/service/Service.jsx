import PropTypes from 'prop-types';

const Service = () => {
    return (
        <div className={'py-16 main-container'}>
            <h1 className={'text-4xl text-center font-bold mb-8'}>Services</h1>
            <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4'}>
                <ServiceCard icon="fa-solid fa-mobile" title="App Development"
                             description="Craft versatile mobile applications for both iOS and Android platforms with a single codebase, ensuring wider reach and cost-effectiveness."/>
                <ServiceCard icon="fa-solid fa-server" title="Backend Development"
                             description="Utilize the simplicity and productivity of Spring Boot to rapidly build and deploy production-grade, microservices-based applications, ensuring efficient development and maintenance."/>
                <ServiceCard icon="fa-solid fa-database" title="Database Expert"
                             description="Design robust data architectures tailored to project requirements, implementing effective strategies for data modeling, indexing, and query optimization."/>
                <ServiceCard icon="fa-regular fa-window-restore" title="Web Development"
                             description="React.js empowers developers to build dynamic and interactive user interfaces with its component-based architecture and virtual DOM, facilitating efficient and scalable web development."/>
            </div>
        </div>
    )
}

const ServiceCard = ({icon, title, description}) => {
    return (
        <div
            className={'cursor-pointer space-y-4 shadow-2xl rounded-2xl bg-slate-100 p-7 text-center transition-transform transform hover:scale-105'}>
            <i className={`text-4xl ${icon}`}></i>
            <h1 className={'text-3xl font-semibold'}>{title}</h1>
            <p>{description}</p>
            <button className={'px-4 py-2 bg-orange-500 rounded-full shadow-lg text-2xl hover:bg-orange-800'}>
                Check
            </button>
        </div>
    )
}

ServiceCard.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Service;