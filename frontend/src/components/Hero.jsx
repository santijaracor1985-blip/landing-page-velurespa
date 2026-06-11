import react from 'react'
export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-tag">
          ✨ Belleza • Estilo • Elegancia
        </span>

        <h1>
          Transformamos tu estilo,
          <span> realzamos tu belleza</span>
        </h1>

        <p>
          En VelureSpa JC Alta Peluquería combinamos experiencia,
          innovación y atención personalizada para ofrecer cortes,
          coloraciones y tratamientos capilares de alta calidad.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">
            Reservar Cita
          </button>

          <button className="btn-secondary">
            Ver Servicios
          </button>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1562322140-8baeececf3df"
          alt="VelureSpa"
        />
      </div>
    </section>
  );
}

export default Hero;