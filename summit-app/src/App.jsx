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
import Register from './components/Register';
import Footer from './components/Footer';

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
        <Register />
      </main>
      <Footer />
    </>
  );
}

export default App;
