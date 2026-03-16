import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionContainer from "@/components/ui/SectionContainer";
import ServiceCard from "@/components/ui/ServiceCard";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Descubra nuestros servicios de refinación, procesamiento, recuperación y consultoría en metales preciosos.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <SectionContainer dark className="!pb-14">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-silver-400">
            Servicios
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
            Soluciones integrales en metales preciosos
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-steel-300">
            Ofrecemos una gama completa de servicios especializados respaldados
            por tecnología de punta, profesionales expertos y certificaciones
            internacionales.
          </p>
        </div>
      </SectionContainer>

      {/* Services Grid */}
      <SectionContainer>
        <div className="grid gap-8 sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} {...service} index={i} />
          ))}
        </div>
      </SectionContainer>

      {/* Process Overview */}
      <SectionContainer className="bg-steel-50">
        <div className="text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-silver-500">
            Nuestro Proceso
          </p>
          <h2 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
            Cómo trabajamos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-steel-500">
            Cada proyecto sigue un proceso riguroso diseñado para garantizar los
            mejores resultados.
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-4">
          {[
            { step: "01", title: "Evaluación", desc: "Analizamos las necesidades específicas de su proyecto y material." },
            { step: "02", title: "Planificación", desc: "Diseñamos la estrategia óptima y definimos los parámetros del proceso." },
            { step: "03", title: "Ejecución", desc: "Realizamos el procesamiento con control de calidad en cada etapa." },
            { step: "04", title: "Entrega", desc: "Entregamos resultados certificados con documentación completa." },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-navy-700 font-display text-lg font-bold text-white">
                {item.step}
              </div>
              <h3 className="mb-2 font-display text-base font-semibold text-navy-900">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-steel-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Certifications */}
      <SectionContainer>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-silver-500">
              Calidad Certificada
            </p>
            <h2 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              Estándares que respaldan nuestro compromiso
            </h2>
            <p className="mt-4 text-steel-500">
              Nuestros procesos están certificados bajo los estándares
              internacionales más exigentes, garantizando la calidad y
              confiabilidad de cada operación.
            </p>
          </div>
          <div className="space-y-4">
            {[
              "Certificación ISO 9001 - Sistema de Gestión de Calidad",
              "Certificación ISO 14001 - Gestión Ambiental",
              "Cumplimiento LBMA - London Bullion Market Association",
              "Cadena de Custodia Responsable - OECD Due Diligence",
            ].map((cert) => (
              <div key={cert} className="flex items-start gap-3 rounded-lg border border-steel-200 bg-steel-50 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                <p className="text-sm font-medium text-steel-700">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* CTA */}
      <SectionContainer dark>
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            ¿Necesita un servicio especializado?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-steel-300">
            Contáctenos para recibir una cotización personalizada y descubra
            cómo podemos impulsar sus operaciones.
          </p>
          <Link
            href="/contact"
            className="chrome-btn mt-8 inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-bold text-navy-900"
          >
            Solicitar cotización
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </SectionContainer>
    </>
  );
}
