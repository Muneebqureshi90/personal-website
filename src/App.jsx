import { useEffect } from 'react';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import About from './components/about/About';
import Experties from './components/experties/Experties';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Certifications from './components/certifications/Certifications';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
    // Global Scroll Reveal Hook
    useEffect(() => {
        const revealEls = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    setTimeout(() => entry.target.classList.add('visible'), i * 80);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08 });

        revealEls.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="bg-bg text-textMain min-h-screen font-body relative z-10">
            <Header />
            <main>
                <Banner />
                <div className="full-divider"></div>
                <About />
                <div className="full-divider"></div>
                <Experties />
                <div className="full-divider"></div>
                <Experience />
                <div className="full-divider"></div>
                <Projects />
                <div className="full-divider"></div>
                <Certifications />
            </main>
            <Contact />
            <Footer />
        </div>
    );
}

export default App;