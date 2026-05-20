import { useState, useEffect, useRef } from 'react';

const skillsData = [
    { cat: 'backend', icon: '☕', name: 'Java', level: 92 },
    { cat: 'backend', icon: '🍃', name: 'Spring Boot', level: 88 },
    { cat: 'backend', icon: '🔐', name: 'Spring Security', level: 82 },
    { cat: 'backend', icon: '☁️', name: 'Spring Cloud', level: 75 },
    { cat: 'backend', icon: '🔗', name: 'Microservices', level: 80 },
    { cat: 'backend', icon: '🔌', name: 'REST APIs', level: 90 },
    { cat: 'backend', icon: '🗄️', name: 'Hibernate / JPA', level: 84 },
    { cat: 'frontend', icon: '⚛️', name: 'React.js', level: 78 },
    { cat: 'frontend', icon: '📱', name: 'React Native', level: 75 },
    { cat: 'frontend', icon: '🎨', name: 'JavaFX', level: 70 },
    { cat: 'database', icon: '🐘', name: 'PostgreSQL', level: 85 },
    { cat: 'database', icon: '🐬', name: 'MySQL', level: 85 },
    { cat: 'database', icon: '🍃', name: 'MongoDB', level: 70 },
    { cat: 'devops', icon: '🐳', name: 'Docker', level: 72 },
    { cat: 'devops', icon: '🔧', name: 'Jenkins / CI-CD', level: 68 },
    { cat: 'devops', icon: '📝', name: 'Git', level: 88 },
    { cat: 'devops', icon: '📖', name: 'Swagger', level: 78 },
];

const Experties = () => {
    const [activeCat, setActiveCat] = useState('all');
    const gridRef = useRef(null);

    useEffect(() => {
        const barObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const fills = entry.target.querySelectorAll('.skill-bar-fill');
                    fills.forEach(fill => {
                        setTimeout(() => {
                            fill.style.width = fill.dataset.level + '%';
                        }, 300);
                    });
                    barObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        if (gridRef.current) barObserver.observe(gridRef.current);
    }, []);

    return (
        <section id="skills" className="relative z-10 py-20 md:py-32 px-6 md:px-16 max-w-[1200px] mx-auto bg-bg">
            <div className="inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-widest uppercase text-accent mb-5 before:content-[''] before:block before:w-6 before:h-[1.5px] before:bg-accent">Technical Stack</div>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-textMain mb-4">Skills & Expertise</h2>
            <p className="text-text2 text-[1.05rem] max-w-[540px] leading-relaxed">A comprehensive toolkit built through real-world projects and continuous learning.</p>

            <div className="flex flex-wrap gap-3 mt-8 mb-10">
                {['all', 'backend', 'frontend', 'database', 'devops'].map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveCat(cat)}
                        className={`px-5 py-2 rounded-full border transition-all duration-300 text-[0.85rem] font-medium capitalize 
              ${activeCat === cat ? 'bg-accent/12 border-accent text-accent' : 'bg-transparent border-border2 text-text2 hover:border-accent hover:text-accent hover:bg-accent/12'}`}
                    >
                        {cat === 'devops' ? 'DevOps & Tools' : cat}
                    </button>
                ))}
            </div>

            <div ref={gridRef} className="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4 reveal">
                {skillsData.filter(s => activeCat === 'all' || s.cat === activeCat).map((skill, idx) => (
                    <div key={idx} className="bg-surface border border-border1 rounded-[10px] p-5 text-center transition-all duration-300 relative overflow-hidden group hover:-translate-y-1 hover:border-accent">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/12 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                        <span className="text-3xl block mb-2 relative z-10">{skill.icon}</span>
                        <div className="text-[0.85rem] font-semibold text-textMain mb-2 relative z-10">{skill.name}</div>
                        <div className="h-[3px] bg-border1 rounded-sm overflow-hidden relative z-10">
                            <div
                                className="skill-bar-fill h-full bg-gradient-to-r from-accent to-accent2 rounded-sm transition-[width] duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                                data-level={skill.level}
                                style={{ width: '0%' }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 reveal">
                <div className="text-[0.85rem] text-text3 uppercase tracking-[0.1em] font-semibold mb-4">Also comfortable with</div>
                <div className="flex flex-wrap gap-2.5">
                    {["Spring MVC", "Spring Data JPA", "JDBC", "Maven / Gradle", "PC/SC API", "Apache PDFBox", "WebSockets", "Stripe API", "Gemini AI API", "Log4j", "Postman", "IntelliJ IDEA"].map((tag, i) => (
                        <span key={i} className="px-4 py-1.5 bg-surface border border-border1 rounded-full text-[0.82rem] text-text2 font-medium cursor-default transition-all duration-300 hover:border-accent hover:text-accent hover:bg-accent/12">
              {tag}
            </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experties;