import './App.css'
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Banner from "./components/banner/Banner.jsx";
import About from "./components/about/About.jsx";
import Service from "./components/service/Service.jsx";
import AboutSection from "./components/about/AboutSection.jsx";
import Experties from "./components/experties/Experties.jsx";

function App() {


    return (
        <>
            <Header/>
            <Banner/>
            {/*<About/>*/}
            <AboutSection/>
            <Service/>
            <Experties/>
            <Footer/>
        </>
    )
}

export default App
