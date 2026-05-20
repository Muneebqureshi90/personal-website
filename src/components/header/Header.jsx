import { useState, useEffect } from 'react';
import Button from '../../layouts/button/Button';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 60);

            // Active Nav Highlight
            const sections = document.querySelectorAll('section[id]');
            let current = '';
            sections.forEach(s => {
                if (window.scrollY >= s.offsetTop - 120) current = s.id;
            });
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'];

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-16 h-[70px] border-b border-border1 transition-all duration-300 backdrop-blur-xl ${isScrolled ? 'bg-[#0a0a0f]/95' : 'bg-[#0a0a0f]/70'}`}>
                <a href="#hero" className="font-display text-[1.35rem] font-extrabold text-textMain tracking-tight">
                    MH<span className="text-accent">.</span>
                </a>

                <ul className="hidden md:flex gap-8 list-none">
                    {navLinks.map((link) => (
                        <li key={link}>
                            <a
                                href={`#${link.toLowerCase()}`}
                                className={`relative text-[0.9rem] font-medium tracking-wide transition-colors duration-300 pb-1
                  ${activeSection === link.toLowerCase() ? 'text-textMain border-b-[1.5px] border-accent' : 'text-text2 hover:text-textMain'}`}
                            >
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>

                <Button href="mailto:muneebhaider564@gmail.com" type="primary" className="hidden md:inline-flex py-2 px-6">
                    Hire Me &rarr;
                </Button>

                <button
                    className="flex md:hidden flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer z-[101]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className={`block w-6 h-[2px] bg-textMain rounded-sm transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
                    <span className={`block w-6 h-[2px] bg-textMain rounded-sm transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`block w-6 h-[2px] bg-textMain rounded-sm transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
                </button>
            </nav>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 top-[70px] bg-[#0a0a0f]/95 backdrop-blur-xl z-[99] flex-col items-center justify-center gap-10 transition-transform duration-300 ${isOpen ? 'flex' : 'hidden'}`}>
                {navLinks.map((link) => (
                    <a
                        key={link}
                        href={`#${link.toLowerCase()}`}
                        onClick={() => setIsOpen(false)}
                        className="font-display text-3xl font-bold text-textMain hover:text-accent transition-colors"
                    >
                        {link}
                    </a>
                ))}
            </div>
        </>
    );
};

export default Header;