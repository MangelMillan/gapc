import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Cpu,
  Users,
  Leaf,
  Factory,
  Flame,
  FlaskConical,
  Gem,
  type LucideIcon,
} from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import SectionContainer from "@/components/ui/SectionContainer";
import ServiceCard from "@/components/ui/ServiceCard";
import { SERVICES, GALLERY_ITEMS, SITE_CONFIG } from "@/lib/constants";

const galleryIconMap: Record<string, LucideIcon> = {
  Factory,
  Flame,
  FlaskConical,
  Gem,
  Users,
  ShieldCheck,
};

export default function HomePage() {
  const galleryPreview = GALLERY_ITEMS.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* About Preview */}
      <SectionContainer>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-silver-500">
              Quiénes Somos
            </p>
            <h2 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              Más de 25 años transformando la industria de metales preciosos
            </h2>
            <p className="mt-5 leading-relaxed text-steel-500">
              En Grupo Minero GAPC, combinamos décadas de experiencia con
              tecnología de última generación para ofrecer soluciones integrales
              en refinación, procesamiento y recuperación de metales preciosos.
              Nuestro compromiso es impulsar el crecimiento de nuestros clientes
              con los más altos estándares de calidad y sustentabilidad.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-700 hover:text-navy-900"
            >
              Conocer más sobre nosotros
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: ShieldCheck, label: "Certificados internacionales" },
              { icon: Cpu, label: "Tecnología de vanguardia" },
              { icon: Users, label: "Equipo especializado" },
              { icon: Leaf, label: "Procesos sustentables" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-steel-200 bg-steel-50 p-5 text-center transition-all hover:border-navy-200 hover:shadow-md"
              >
                <item.icon className="mx-auto mb-3 h-8 w-8 text-navy-700" />
                <p className="text-sm font-medium text-steel-700">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Services Preview */}
      <SectionContainer className="bg-steel-50">
        <div className="text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-silver-500">
            Servicios
          </p>
          <h2 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
            Soluciones integrales para la industria
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-steel-500">
            Ofrecemos una gama completa de servicios especializados en metales
            preciosos, respaldados por tecnología de punta y profesionales
            altamente capacitados.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} {...service} index={i} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-lg bg-navy-700 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-navy-800 hover:shadow-lg"
          >
            Ver todos los servicios
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </SectionContainer>

      {/* Gallery Preview */}
      <SectionContainer>
        <div className="text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-silver-500">
            Galería
          </p>
          <h2 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
            Conozca nuestras instalaciones
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-steel-500">
            Plantas de refinación, laboratorios certificados y equipos
            industriales de última generación al servicio de nuestros clientes.
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {galleryPreview.map((item, i) => {
            const Icon = galleryIconMap[item.icon] ?? Factory;
            return (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${item.gradient} animate-fade-in-up`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="absolute inset-0 opacity-[0.04]">
                  <div
                    className="h-full w-full"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                </div>
                <div className="relative flex flex-col items-center justify-center p-8 text-center min-h-[200px]">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/10 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-7 w-7 text-white/90" />
                  </div>
                  <span className="mb-1.5 inline-block rounded-full bg-white/10 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-white/60">
                    {item.category}
                  </span>
                  <h3 className="font-display text-base font-bold text-white">
                    {item.title}
                  </h3>
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent to-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-lg bg-navy-700 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-navy-800 hover:shadow-lg"
          >
            Ver galería completa
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </SectionContainer>

      {/* Why Choose Us */}
      <SectionContainer dark>
        <div className="text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-silver-400">
            Por Qué Elegirnos
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            La confianza de la industria, respaldada por resultados
          </h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Pureza garantizada",
              desc: "Alcanzamos niveles de pureza del 99.9% en todos nuestros procesos de refinación, cumpliendo con los estándares internacionales más exigentes.",
            },
            {
              title: "Tecnología de punta",
              desc: "Nuestras instalaciones cuentan con equipos de última generación y laboratorios certificados para garantizar resultados precisos y confiables.",
            },
            {
              title: "Compromiso ambiental",
              desc: "Implementamos prácticas de producción limpia y recuperación de materiales, minimizando el impacto ambiental de nuestras operaciones.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-steel-700/40 bg-white/5 p-8">
              <CheckCircle2 className="mb-4 h-8 w-8 text-silver-400" />
              <h3 className="mb-3 font-display text-lg font-semibold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-steel-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* CTA */}
      <SectionContainer>
        <div className="rounded-2xl bg-gradient-to-r from-navy-800 to-navy-900 p-10 text-center md:p-16">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            ¿Listo para optimizar sus procesos?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-steel-300">
            Nuestro equipo de expertos está listo para ayudarle a encontrar la
            solución ideal para sus necesidades en metales preciosos.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="chrome-btn inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-bold text-navy-900"
            >
              Solicitar cotización
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-lg border border-steel-500 px-7 py-3.5 text-sm font-semibold text-white hover:border-white hover:bg-white/5"
            >
              Explorar servicios
            </Link>
          </div>
        </div>
      </SectionContainer>

      {/* Contact Preview */}
      <SectionContainer className="bg-steel-50">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-silver-500">
              Contacto
            </p>
            <h2 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              Estamos a su disposición
            </h2>
            <p className="mt-4 text-steel-500">
              Ya sea que necesite una cotización, asesoría técnica o información
              sobre nuestros servicios, nuestro equipo está listo para
              atenderle.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-700 hover:text-navy-900"
            >
              Ir al formulario de contacto
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: SITE_CONFIG.email },
              { icon: Phone, label: "Teléfono", value: SITE_CONFIG.phone },
              { icon: MapPin, label: "Dirección", value: SITE_CONFIG.address },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-xl border border-steel-200 bg-white p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-steel-400">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-steel-700">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
