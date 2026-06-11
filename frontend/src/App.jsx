import logo from './assets/image.png';
import './App.css';

function App() {
  return (
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
  );
}

export default App;