import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Doctors from './components/Doctors';
import AppointmentForm from './components/AppointmentForm';
import Emergency from './components/Emergency';
import Testimonials from './components/Testimonials';
import Statistics from './components/Statistics';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Doctors />
        <Statistics />
        <Testimonials />
        <Emergency />
        <AppointmentForm />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
