import Hero from './components/Hero';
import Carousel from './components/carousel';
import logo from './assets/image.png';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <header className="navbar">
        <img src={logo} alt="VelureSpa" className="logo" />

        <div className="auth-buttons">
          <button className="btn-login">
            Iniciar Sesión
          </button>

          <button className="btn-register">
            Registrarse
          </button>
        </div>
      </header>

      <Carousel />

      <Hero />
      <Footer/>
    </>
  );
}

export default App;