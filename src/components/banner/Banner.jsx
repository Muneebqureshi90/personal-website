import Button from '../../layouts/button/Button';

const Banner = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center pt-[70px] px-6 md:px-16 lg:px-32 relative overflow-hidden">
            <div className="hero-bg-orb hero-orb-1"></div>
            <div className="hero-bg-orb hero-orb-2"></div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-center w-full max-w-[1200px] mx-auto text-center lg:text-left">
                <div className="order-2 lg:order-1">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green/10 border border-green/25 rounded-full text-[0.8rem] font-medium text-green mb-7 mx-auto lg:mx-0">
                        <div className="w-2 h-2 bg-green rounded-full animate-[pulse-green_2s_ease-in-out_infinite]"></div>
                        Available for new opportunities
                    </div>
                    <p className="text-[1.1rem] text-text2 mb-2">Hello, I&apos;m</p>
                    <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[0.95] tracking-tight text-textMain mb-3">
                        Muneeb<br /><span className="text-accent">Haider</span>
                    </h1>
                    <h2 className="font-display text-xl md:text-2xl font-semibold text-text2 mb-6">
                        Full-Stack Developer &middot; Spring Boot & React
                    </h2>
                    <p className="text-base text-text2 max-w-[520px] mx-auto lg:mx-0 leading-[1.8] mb-10">
                        Skilled at building robust, scalable software solutions with over 1.5 years of professional experience. Specializing in Spring Boot microservices, React.js frontends, and React Native mobile apps.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        <Button href="#projects" type="primary">View Projects &rarr;</Button>
                        <Button href="#contact" type="secondary">Get In Touch</Button>
                    </div>

                    <div className="flex gap-4 mt-8 justify-center lg:justify-start">
                        {[
                            { href: "https://github.com/Muneebqureshi90", label: "GitHub", icon: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" },
                            { href: "https://linkedin.com/in/muneeb-haider/", label: "LinkedIn", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" }
                        ].map((social, i) => (
                            <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}
                               className="flex items-center justify-center w-10 h-10 border border-border2 rounded-xl text-text2 hover:text-accent hover:border-accent hover:bg-accent-dim transition-all duration-300 hover:-translate-y-0.5">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d={social.icon}/></svg>
                            </a>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-8 justify-center lg:justify-start mt-10 pt-8 border-t border-border1">
                        {[
                            { num: "1.5+", label: "Years Experience" },
                            { num: "4+", label: "Major Projects" },
                            { num: "8+", label: "Certifications" }
                        ].map((stat, i) => (
                            <div key={i}>
                                <div className="font-display text-3xl font-extrabold text-textMain tracking-tight">
                                    {stat.num.replace('+', '')}<span className="text-accent">+</span>
                                </div>
                                <div className="text-[0.78rem] text-text3 tracking-wider uppercase font-medium mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="order-1 lg:order-2 flex justify-center">
                    <div className="relative">
                        <div className="hero-avatar-ring w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-full border-2 border-border2 flex items-center justify-center animate-[ring-rotate_12s_linear_infinite]">
                            <div className="hero-avatar w-[170px] h-[170px] md:w-[240px] md:h-[240px] rounded-full bg-gradient-to-br from-surface to-surface2 border-[3px] border-bg flex items-center justify-center font-display text-5xl md:text-[5rem] font-extrabold text-accent overflow-hidden" style={{ animationDirection: 'reverse' }}>
                                MH
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;