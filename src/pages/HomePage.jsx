// src/pages/HomePage.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { WHATSAPP_NUMBER } from "../data/config";
import WhatsAppIcon from "../components/icons/WhatsAppIcon";
import InstagramIcon from "../components/icons/InstagramIcon";
import MapPinIcon from "../components/icons/MapPinIcon";

/* ---------- Simple fade Carousel ---------- */
function Carousel({ slides, interval = 5000, className = "" }) {
  const [index, setIndex] = useState(0);
  const hasSlides = Array.isArray(slides) && slides.length > 0;

  useEffect(() => {
    if (!hasSlides) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, interval);
    return () => clearInterval(id);
  }, [hasSlides, slides, interval]);

  const go = (dir) => {
    if (!hasSlides) return;
    setIndex((i) => {
      const n = slides.length;
      return (i + (dir === "next" ? 1 : -1) + n) % n;
    });
  };

  if (!hasSlides) return null;

  return (
    <div className={`relative overflow-hidden rounded-2xl border border-black/5 shadow ${className}`}>
      {/* Slides */}
      <div className="relative h-64 md:h-72">
        {slides.map((s, i) => (
          <img
            key={s.src + i}
            src={s.src}
            alt={s.alt || ""}
            className={
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 " +
              (i === index ? "opacity-100" : "opacity-0")
            }
            loading="lazy"
          />
        ))}
      </div>

      {/* Gradient top/bottom for readability */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 to-transparent" />

      {/* Controls */}
      <button
        type="button"
        aria-label="Anterior"
        onClick={() => go("prev")}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white p-2 shadow"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Siguiente"
        onClick={() => go("next")}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white p-2 shadow"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Ir al slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={
              "h-2.5 w-2.5 rounded-full transition " +
              (i === index ? "bg-white shadow ring-1 ring-black/10" : "bg-white/50 hover:bg-white/80")
            }
          />
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hola Serigrapack, me gustaría más información."
  )}`;

  // Replace these with your chosen filenames inside /public/images/home-carousel/
  const slides = [
    { src: "/images/home-carousel/slide-1.jpeg", alt: "Bolsas personalizadas Serigrapack" },
    { src: "/images/home-carousel/slide-2.jpeg", alt: "Cajas y empaques para e-commerce" },
    { src: "/images/home-carousel/slide-3.jpeg", alt: "Textiles y tote bags en producción" },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-brandBg text-brandText">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-title text-3xl md:text-4xl font-bold mb-3">
              Bienvenido a Serigrapack
            </h2>
            <p className="opacity-80">
              Soluciones de <strong>empaques personalizados</strong>, textiles y
              más, con enfoque en calidad, rapidez y asesoría cercana.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/catalog"
                className="rounded-xl bg-brandGreen text-white px-5 py-3 hover:opacity-90"
              >
                Ver Catálogo
              </Link>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-brandText text-white px-5 py-3 hover:opacity-90"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 border border-black/5">
            {/* Carousel inside the card */}
            <Carousel slides={slides} interval={5000} />

            {/* Mission / Vision */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-title font-semibold mb-1">Misión</h3>
                <p className="opacity-80">
                  Brindar empaques y productos personalizados que fortalezcan la
                  identidad de cada marca, con procesos responsables y atención
                  ágil.
                </p>
              </div>
              <div>
                <h3 className="font-title font-semibold mb-1">Visión</h3>
                <p className="opacity-80">
                  Ser referentes nacionales en soluciones creativas de empaque y
                  personalización, innovando con materiales y servicio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press / Media Section */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <h3 className="font-title text-2xl font-bold mb-4">En los medios</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://www.forbes.com.ec/movimiento-inspirador/quebraron-ahora-manejan-dos-empresas-n74102"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-black/10 bg-white p-5 shadow hover:shadow-lg hover:border-black/20 transition"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-black text-white grid place-items-center font-semibold">
                  F
                </div>
                <div>
                  <h4 className="font-semibold text-lg group-hover:underline">
                    Forbes Ecuador: “Quebraron y ahora manejan dos empresas”
                  </h4>
                  <p className="text-sm opacity-80 mt-1">
                    Una historia inspiradora sobre la resiliencia detrás de Serigrapack
                    y el crecimiento del emprendimiento.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact / Social Section */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <h3 className="font-title text-2xl font-bold mb-4">Contáctanos</h3>
          <p className="opacity-80 mb-6">
            ¡Estamos listos para asesorarte! Escríbenos por WhatsApp o visita
            nuestras redes.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-brandGreen text-white px-5 py-3 hover:opacity-90"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>

            <a
              href="https://www.instagram.com/serigrapack.ec/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-brandText text-white px-5 py-3 hover:opacity-90"
            >
              <InstagramIcon />
              Instagram
            </a>

            <a
              href="https://www.google.com/maps/place/Serigrapack/data=!4m2!3m1!1s0x0:0xaf245ff9eadbcb1?sa=X&ved=1t:2428&ictx=111"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-brandBrown text-white px-5 py-3 hover:opacity-90"
            >
              <MapPinIcon />
              Cómo llegar
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
