const projects = [
    {
        icon: '⏱️', tag: 'Enterprise', company: 'DictaLabs', title: 'Chronos TSA — Time Stamp Authority',
        bullets: [
            'Engineered a full-stack admin dashboard with React.js and Spring Boot featuring complex Role-Based Access Control (RBAC) for secure system management.',
            'Built and integrated RESTful APIs with PostgreSQL, managing deployment and CI/CD pipelines using Docker and Jenkins.'
        ],
        techs: ['React.js', 'Spring Boot', 'PostgreSQL', 'Docker', 'Jenkins', 'RBAC', 'Gradle']
    },
    {
        icon: '💳', tag: 'Smart Card', company: 'DictaLabs', title: 'E-Tugra Signer',
        bullets: [
            'Optimized architecture to efficiently handle complex single and multi-child execution flows in a Java desktop application.',
            'Implemented rapid AKIS smart card scanning and resolved firmware states for seamless token authentication using the PC/SC API.'
        ],
        techs: ['Java', 'Swing', 'PC/SC API', 'AKIS Drivers', 'PostgreSQL', 'Launch4J']
    },
    {
        icon: '📄', tag: 'Legal Tech', company: 'DictaLabs', title: 'vScrawl — Digital PDF Signing',
        bullets: [
            'Engineered secure RSA-based smart card certificate authentication and hash signature verification logic.',
            'Implemented enterprise-grade, legally binding PDF document signing workflows using Apache PDFBox within a Java microservices architecture.'
        ],
        techs: ['Spring Boot', 'Microservices', 'Apache PDFBox', 'RSA Crypto', 'React.js', 'Docker']
    },
    {
        icon: '⚖️', tag: 'Final Year Project', company: 'Academic', title: 'Lawyer Hiring App',
        bullets: [
            'Developed a full-stack lawyer-client platform with real-time chat, location-based search, and an AI-powered legal chatbot using Gemini APIs.',
            'Integrated Stripe payments and WebSockets for real-time communication between clients and lawyers.'
        ],
        techs: ['Spring Boot', 'React Native', 'MySQL', 'WebSockets', 'Stripe', 'Gemini AI']
    }
];

const Projects = () => {
    return (
        <section id="projects" className="relative z-10 py-20 md:py-32 px-6 md:px-16 max-w-[1200px] mx-auto">
            <div className="inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-widest uppercase text-accent mb-5 before:content-[''] before:block before:w-6 before:h-[1.5px] before:bg-accent">Work</div>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-textMain mb-4">Featured Projects</h2>
            <p className="text-text2 text-[1.05rem] max-w-[540px] leading-relaxed">Real-world production systems built across security, PKI, legal-tech, and mobile domains.</p>

            <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-6 mt-12">
                {projects.map((proj, idx) => (
                    <article key={idx} className="bg-surface border border-border1 rounded-2xl p-7 flex flex-col gap-4 transition-all duration-300 relative overflow-hidden group hover:-translate-y-1.5 hover:border-accent reveal">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/12 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                        <div className="flex justify-between items-start relative z-10">
                            <div className="w-[46px] h-[46px] rounded-xl bg-accent/12 border border-accent/25 flex items-center justify-center text-xl">{proj.icon}</div>
                            <span className="px-3 py-1 rounded-full text-[0.72rem] font-semibold bg-surface2 text-text2 border border-border1 tracking-wide">{proj.tag}</span>
                        </div>

                        <div className="relative z-10">
                            <div className="text-[0.78rem] font-semibold text-accent uppercase tracking-widest">{proj.company}</div>
                            <h3 className="font-display text-[1.15rem] font-bold text-textMain tracking-tight">{proj.title}</h3>
                        </div>

                        <ul className="flex flex-col gap-2 relative z-10 flex-grow">
                            {proj.bullets.map((bullet, i) => (
                                <li key={i} className="text-[0.85rem] text-text2 pl-4 relative leading-[1.6] before:content-['▸'] before:absolute before:left-0 before:text-accent before:text-[0.7rem] before:top-[2px]">{bullet}</li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 relative z-10 mt-2">
                            {proj.techs.map((tech, i) => (
                                <span key={i} className="px-2.5 py-1 bg-bg3 border border-border1 rounded-md text-[0.75rem] text-text2 font-medium font-mono">{tech}</span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Projects;