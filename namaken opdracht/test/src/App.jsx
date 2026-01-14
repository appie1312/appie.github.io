import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Cards from './components/Cards';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home">
        <Carousel />
      </section>
      <section id="toys">
        <div className='text-center mt-5 mb-3'>
          <h3>Our Toys</h3>
          <p>Explore What We Have To Offer</p>
        </div>
        <Cards />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
