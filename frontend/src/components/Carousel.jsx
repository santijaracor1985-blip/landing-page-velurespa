import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

function Carousel() {
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1600',
      title: 'Belleza y Elegancia',
      text: 'Descubre una experiencia premium para el cuidado de tu imagen.',
    },
    {
      image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1600',
      title: 'Spa & Relajación',
      text: 'Momentos únicos diseñados para tu bienestar y tranquilidad.',
    },
    {
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1600',
      title: 'Transforma tu Estilo',
      text: 'Expertos en coloración, cortes y tratamientos capilares.',
    },
  ];

  return (
  <Swiper
  modules={[Autoplay, Pagination]}
  spaceBetween={25}
  slidesPerView={3}
  autoplay={{ delay: 3500 }}
  pagination={{ clickable: true }}
  loop
>
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="slide"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="overlay">
              <h1>{slide.title}</h1>
              <p>{slide.text}</p>

              <div className="slide-buttons">
                <button className="btn-register">
                  Reservar Cita
                </button>

                <button className="btn-login">
                  Conocer Más
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;