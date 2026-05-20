const Footer = () => {
    return (
        <footer className="bg-bg border-t border-border1 py-8 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
            <p className="text-[0.85rem] text-text3">
                © {new Date().getFullYear()} <span className="text-accent font-medium">Muneeb Haider</span>. Crafted with precision & passion.
            </p>
            <div className="flex gap-6">
                {['GitHub', 'LinkedIn', 'Email'].map((link) => (
                    <a
                        key={link}
                        href={
                            link === 'GitHub' ? 'https://github.com/Muneebqureshi90' :
                                link === 'LinkedIn' ? 'https://linkedin.com/in/muneeb-haider/' :
                                    'mailto:muneebhaider564@gmail.com'
                        }
                        target={link !== 'Email' ? '_blank' : undefined}
                        rel={link !== 'Email' ? 'noopener noreferrer' : undefined}
                        className="text-[0.85rem] text-text3 hover:text-accent transition-colors duration-300"
                    >
                        {link}
                    </a>
                ))}
            </div>
        </footer>
    );
};

export default Footer;