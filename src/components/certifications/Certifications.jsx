const certs = [
    { icon: '☕', name: 'Java Developer Certification', issuer: 'Amigoscode', grad: 'from-[#f97316] to-[#fb923c]' },
    { icon: '🍃', name: 'Spring Boot Certification', issuer: 'Amigoscode', grad: 'from-[#3b82f6] to-[#6366f1]' },
    { icon: '⚛️', name: 'React.js Certification', issuer: 'Udemy', grad: 'from-[#22c55e] to-[#16a34a]' },
    { icon: '📱', name: 'React Native Certification', issuer: 'Udemy', grad: 'from-[#a855f7] to-[#ec4899]' },
    { icon: '🐬', name: 'MySQL Certification', issuer: 'Udemy', grad: 'from-[#14b8a6] to-[#0d9488]' },
    { icon: '🧵', name: 'Java Multithreading', issuer: 'Verified Course', grad: 'from-[#f59e0b] to-[#ef4444]' },
    { icon: '🏆', name: 'Java Basic Certificate', issuer: 'HackerRank', grad: 'from-[#06b6d4] to-[#3b82f6]' },
    { icon: '🗄️', name: 'DBMS Certification', issuer: 'Udemy', grad: 'from-[#8b5cf6] to-[#6366f1]' },
];

const Certifications = () => {
    return (
        <section id="certifications" className="relative z-10 py-20 md:py-32 px-6 md:px-16 max-w-[1200px] mx-auto">
            <div className="inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-widest uppercase text-accent mb-5 before:content-[''] before:block before:w-6 before:h-[1.5px] before:bg-accent">Achievements</div>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-textMain mb-4">Certifications</h2>
            <p className="text-text2 text-[1.05rem] max-w-[540px] leading-relaxed">Continuous learning backed by verified credentials from industry-leading platforms.</p>

            <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4 mt-12">
                {certs.map((cert, idx) => (
                    <div key={idx} className="bg-surface border border-border1 rounded-[10px] p-6 transition-all duration-300 relative overflow-hidden group hover:-translate-y-1 hover:border-border2 reveal">
                        <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${cert.grad} scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100`}></div>
                        <span className="text-2xl block mb-3">{cert.icon}</span>
                        <div className="font-semibold text-textMain text-[0.9rem] mb-1.5 leading-snug">{cert.name}</div>
                        <div className="text-[0.78rem] text-text3 font-medium uppercase tracking-wide">{cert.issuer}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;