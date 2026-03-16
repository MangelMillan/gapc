import type { Metadata } from "next";
import { Target, Eye, Heart, History } from "lucide-react";
import SectionContainer from "@/components/ui/SectionContainer";
import { VALUES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conozca la historia, misión, visión y valores de Grupo Minero GAPC, líderes en refinación de metales preciosos.",
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <SectionContainer dark className="!pb-14">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-silver-400">
            Nosotros
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
            Una tradición de excelencia en metales preciosos
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-steel-300">
            Desde nuestra fundación, Grupo Minero GAPC se ha dedicado a
            establecer los más altos estándares en la industria de refinación y
            gestión de metales preciosos.
          </p>
        </div>
      </SectionContainer>

      {/* Company Description */}
      <SectionContainer>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-navy-900">
              ¿Quiénes Somos?
            </h2>
            <p className="mt-5 leading-relaxed text-steel-500">
              Grupo Minero GAPC es una empresa mexicana con más de 25 años de
              experiencia en la refinación, procesamiento y comercialización de
              metales preciosos. Contamos con instalaciones de última generación
              y un equipo de profesionales altamente capacitados que nos
              permiten ofrecer soluciones integrales a clientes industriales y
              comerciales en toda la región.
            </p>
            <p className="mt-4 leading-relaxed text-steel-500">
              Nuestra capacidad técnica, combinada con un firme compromiso con
              la calidad y la sustentabilidad, nos ha posicionado como un
              referente en la industria. Trabajamos bajo estrictos estándares
              internacionales y contamos con certificaciones que avalan la
              excelencia de nuestros procesos.
            </p>
          </div>
          <div className="space-y-6">
            {/* Mission */}
            <div className="rounded-xl border border-steel-200 bg-steel-50 p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-700 text-white">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-navy-900">
                  Misión
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-steel-600">
                Proporcionar soluciones integrales y de la más alta calidad en
                refinación y gestión de metales preciosos, impulsando el
                desarrollo de nuestros clientes a través de procesos
                innovadores, eficientes y sustentables.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-xl border border-steel-200 bg-steel-50 p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-700 text-white">
                  <Eye className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-navy-900">
                  Visión
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-steel-600">
                Ser reconocidos como la empresa líder en refinación de metales
                preciosos en América Latina, distinguidos por nuestra
                excelencia operativa, innovación tecnológica y compromiso con
                la responsabilidad social y ambiental.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Values */}
      <SectionContainer className="bg-steel-50">
        <div className="text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-silver-500">
            Nuestros Valores
          </p>
          <h2 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
            Los principios que nos guían
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((val, i) => (
            <div
              key={val.title}
              className={`animate-fade-in-up ${
                ["", "animation-delay-200", "animation-delay-400", "animation-delay-600"][i]
              } rounded-xl border border-steel-200 bg-white p-6 text-center`}
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-navy-50">
                <Heart className="h-5 w-5 text-navy-700" />
              </div>
              <h3 className="mb-2 font-display text-base font-semibold text-navy-900">
                {val.title}
              </h3>
              <p className="text-sm leading-relaxed text-steel-500">{val.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* History */}
      <SectionContainer>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-50">
              <History className="h-7 w-7 text-navy-700" />
            </div>
          </div>
          <h2 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
            Nuestra Historia
          </h2>
          <p className="mt-6 leading-relaxed text-steel-500">
            Fundada a finales de los años 90, Grupo Minero GAPC inició
            operaciones como un pequeño taller de refinación de metales
            preciosos en la Ciudad de México. A lo largo de más de dos décadas,
            hemos crecido hasta convertirnos en una de las empresas más
            respetadas del sector, expandiendo nuestras capacidades y cartera de
            servicios.
          </p>
          <p className="mt-4 leading-relaxed text-steel-500">
            Hoy contamos con instalaciones de última generación, laboratorios
            certificados y un equipo de más de 200 profesionales dedicados a
            ofrecer las mejores soluciones en metales preciosos. Nuestro
            crecimiento ha sido posible gracias a la confianza de nuestros
            clientes y a nuestro compromiso inquebrantable con la excelencia.
          </p>
        </div>
      </SectionContainer>
    </>
  );
}
