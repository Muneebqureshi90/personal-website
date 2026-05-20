const experiences = [
    {
        company: 'DictaLabs', title: 'Java Full-Stack Developer', date: 'Nov 2025 – Present',
        type: 'Full Time', typeClass: 'bg-blue/12 text-blue border border-blue/20',
        location: 'Lahore, Pakistan · Onsite',
        desc: 'Building enterprise-grade full-stack systems involving administrative dashboards, smart card authentication, PDF signing workflows, and microservices architecture using Spring Boot and React.js.'
    },
    {
        company: 'TechSuitable', title: 'Software Developer', date: 'Sep 2024 – Jul 2025',
        type: 'Project Base', typeClass: 'bg-purple/12 text-purple border border-purple/20',
        location: 'Sargodha, Pakistan · Remote',
        desc: 'Delivered full-stack software projects remotely, contributing to web and backend solutions across multiple client engagements, applying Spring Boot and React technologies.'
    },
    {
        company: 'Mawk Tech Space', title: 'Software Engineer Intern', date: 'Mar 2024 – May 2024',
        type: 'Internship', typeClass: 'bg-teal/12 text-teal border border-teal/20',
        location: 'Sargodha, Pakistan · Onsite',
        desc: 'Gained hands-on software engineering experience working on real projects, strengthening foundations in Java backend development and collaborative team workflows.'
    }
];

const Experience = () => {
    return (
        <section id="experience" className="relative z-10 py-20 md:py-32 px-6 md:px-16 max-w-[1200px] mx-auto">
            <div className="inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-widest uppercase text-accent mb-5 before:content-[''] before:block before:w-6 before:h-[1.5px] before:bg-accent">Career</div>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-textMain mb-4">Professional Experience</h2>
            <p className="text-text2 text-[1.05rem] max-w-[540px] leading-relaxed">Over 1.5 years building real-world, production-grade applications across diverse domains.</p>

            <div className="relative mt-12 pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[1px] before:bg-gradient-to-b before:from-accent before:via-border1 before:to-transparent">
                {experiences.map((exp, idx) => (
                    <div key={idx} className="relative pb-12 last:pb-0 reveal">
                        <div className="absolute -left-[2.4rem] top-1.5 w-3.5 h-3.5 rounded-full bg-accent border-2 border-bg shadow-[0_0_0_4px_rgba(249,115,22,0.12)]"></div>

                        <div className="bg-surface border border-border1 rounded-2xl p-7 transition-all duration-300 relative overflow-hidden group hover:translate-x-1 hover:border-border2">
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                            <div className="flex justify-between items-start gap-4 mb-3 flex-wrap">
                                <div>
                                    <div className="text-[0.8rem] text-accent font-semibold tracking-wide uppercase mb-1">{exp.company}</div>
                                    <div className="font-display text-xl font-bold text-textMain tracking-tight">{exp.title}</div>
                                </div>
                                <div className="flex flex-col items-end gap-1.5">
                                    <span className="text-[0.82rem] text-text3 font-medium whitespace-nowrap">{exp.date}</span>
                                    <span className={`px-2.5 py-1 rounded-full text-[0.72rem] font-semibold tracking-wide ${exp.typeClass}`}>{exp.type}</span>
                                </div>
                            </div>

                            <div className="text-[0.82rem] text-text3 mb-4 flex items-center gap-1.5">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                                {exp.location}
                            </div>

                            <p className="text-text2 text-[0.88rem] leading-[1.75]">{exp.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;