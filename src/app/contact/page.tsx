import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import SectionContainer from "@/components/ui/SectionContainer";
import ContactForm from "@/components/ui/ContactForm";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Póngase en contacto con Grupo Minero GAPC para cotizaciones, asesoría técnica o información sobre nuestros servicios.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <SectionContainer dark className="!pb-14">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-silver-400">
            Contacto
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
            Hablemos de su próximo proyecto
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-steel-300">
            Nuestro equipo de expertos está listo para atenderle. Complete el
            formulario o utilice nuestros datos de contacto directo.
          </p>
        </div>
      </SectionContainer>

      {/* Contact Section */}
      <SectionContainer>
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="mb-6 font-display text-2xl font-bold text-navy-900">
              Envíenos un mensaje
            </h2>
            <ContactForm />
          </div>

          {/* Info */}
          <div className="lg:col-span-2">
            <h2 className="mb-6 font-display text-2xl font-bold text-navy-900">
              Información de contacto
            </h2>
            <div className="space-y-5">
              {[
                {
                  icon: Mail,
                  label: "Correo electrónico",
                  value: SITE_CONFIG.email,
                },
                {
                  icon: Phone,
                  label: "Teléfono",
                  value: SITE_CONFIG.phone,
                },
                {
                  icon: MapPin,
                  label: "Dirección",
                  value: SITE_CONFIG.address,
                },
                {
                  icon: Clock,
                  label: "Horario de atención",
                  value: "Lunes a Viernes, 8:00 - 18:00 hrs",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-xl border border-steel-200 bg-steel-50 p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-700 text-white">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-steel-400">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-steel-700">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-8 overflow-hidden rounded-xl border border-steel-200 bg-steel-100">
              <div className="flex h-52 items-center justify-center text-steel-400">
                <div className="text-center">
                  <MapPin className="mx-auto mb-2 h-8 w-8" />
                  <p className="text-sm font-medium">Ubicación en mapa</p>
                  <p className="text-xs">Chihuahua, México</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
