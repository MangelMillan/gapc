import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-navy-900">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />

      {/* Silver accent line */}
      <div className="absolute left-0 top-0 h-1 w-full chrome-divider" />

      <div className="relative mx-auto max-w-7xl px-6 py-32">
        <div className="max-w-3xl">
          <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full chrome-badge px-4 py-1.5">
            <Shield className="h-4 w-4 text-silver-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-silver-400">
              Líderes en refinación de metales preciosos
            </span>
          </div>

          <h1 className="animate-fade-in-up animation-delay-200 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Excelencia en la{" "}
            <span className="chrome-text">
              refinación
            </span>{" "}
            y gestión de metales preciosos
          </h1>

          <p className="animate-fade-in-up animation-delay-400 mt-6 max-w-xl text-lg leading-relaxed text-steel-300">
            Soluciones integrales para la industria minera y comercial con los
            más altos estándares de calidad, tecnología de vanguardia y
            compromiso con la sustentabilidad.
          </p>

          <div className="animate-fade-in-up animation-delay-600 mt-10 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="chrome-btn inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-bold text-navy-900"
            >
              Nuestros Servicios
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-steel-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-steel-400 hover:bg-white/5"
            >
              Solicitar Cotización
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="animate-fade-in-up animation-delay-600 mt-20 grid grid-cols-2 gap-8 border-t border-steel-700/50 pt-10 md:grid-cols-4">
          {[
            { value: "25+", label: "Años de experiencia" },
            { value: "99.9%", label: "Pureza alcanzada" },
            { value: "500+", label: "Clientes satisfechos" },
            { value: "ISO", label: "Certificación de calidad" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="chrome-text-light font-display text-2xl font-bold md:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-steel-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
