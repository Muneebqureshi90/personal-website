import Button from '../../layouts/button/Button';

const About = () => {
    return (
        <section id="about" className="relative z-10 py-20 md:py-32 px-6 md:px-16 max-w-[1200px] mx-auto">
            <div className="inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-widest uppercase text-accent mb-5 before:content-[''] before:block before:w-6 before:h-[1.5px] before:bg-accent">
                Who I am
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-textMain mb-4">About Me</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-12 reveal">
                <div className="text-text2 text-base leading-[1.85] space-y-5">
                    <p>
                        I&apos;m a <strong className="text-textMain font-medium">Full-Stack Developer</strong> based in Lahore, Pakistan with a strong foundation in Java backend engineering and modern frontend development. I bring over 1.5 years of hands-on professional experience building production-grade software at DictaLabs and TechSuitable.
                    </p>
                    <p>
                        My backend expertise centers around <strong className="text-textMain font-medium">Spring Boot microservices, Spring Security, REST APIs</strong>, and database management with both relational (PostgreSQL, MySQL) and non-relational (MongoDB) databases. On the frontend, I craft seamless experiences with <strong className="text-textMain font-medium">React.js</strong> and cross-platform mobile apps with <strong className="text-textMain font-medium">React Native</strong>.
                    </p>
                    <p>
                        I&apos;m passionate about system architecture, code optimization, and translating complex business requirements into clean, efficient, and maintainable code.
                    </p>

                    <div className="bg-surface border border-border1 rounded-2xl p-7 mt-8 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-[3px] before:h-full before:bg-accent before:rounded-r-sm">
                        <div className="font-display text-[1.05rem] font-bold text-textMain mb-1">Bachelor of Science in Computer Science</div>
                        <div className="text-text2 text-[0.9rem] mb-1">University of Lahore</div>
                        <div className="text-accent text-[0.82rem] font-semibold tracking-wide">2021 – 2025</div>
                    </div>
                </div>

                <div>
                    <div className="bg-surface border border-border1 rounded-2xl p-6 flex flex-col gap-4">
                        {[
                            { label: 'Name', value: 'Muneeb Haider' },
                            { label: 'Role', value: 'Java Full-Stack Developer' },
                            { label: 'Location', value: 'Lahore, Pakistan' },
                            { label: 'Email', value: 'muneebhaider564@gmail.com', isEmail: true },
                            { label: 'Phone', value: '+92 301 111 6259' }
                        ].map((info, idx) => (
                            <div key={idx} className="flex justify-between items-center py-2 border-b border-border1 last:border-b-0 text-[0.9rem]">
                                <span className="text-text3 text-[0.82rem] uppercase tracking-widest">{info.label}</span>
                                <span className={`text-textMain font-medium ${info.isEmail ? 'text-[0.82rem]' : ''}`}>{info.value}</span>
                            </div>
                        ))}
                        <div className="flex justify-between items-center py-2 text-[0.9rem]">
                            <span className="text-text3 text-[0.82rem] uppercase tracking-widest">Status</span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green/10 border border-green/20 rounded-full text-[0.8rem] text-green font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green"></span> Open to Work
              </span>
                        </div>
                    </div>
                    <div className="flex gap-4 mt-6">
                        <Button href="mailto:muneebhaider564@gmail.com" type="primary" className="flex-1 justify-center">Contact Me</Button>
                        <Button href="https://linkedin.com/in/muneeb-haider/" target="_blank" type="secondary" className="flex-1 justify-center">LinkedIn</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;