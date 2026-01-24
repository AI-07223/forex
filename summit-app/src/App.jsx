import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Audience from './components/Audience';
import Schedule from './components/Schedule';
import Sponsors from './components/Sponsors';
import Venue from './components/Venue';
import Awards from './components/Awards';
import FAQ from './components/FAQ';
import SponsorForm from './components/SponsorForm';
import Register from './components/Register';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Audience />
        <Schedule />
        <Sponsors />
        <Venue />
        <Awards />
        <FAQ />
        <SponsorForm />
        <Register />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
