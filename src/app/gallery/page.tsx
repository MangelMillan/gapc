"use client";

import { useState } from "react";
import {
  Factory,
  Flame,
  FlaskConical,
  Gem,
  Users,
  ShieldCheck,
  Lock,
  Truck,
  type LucideIcon,
} from "lucide-react";
import SectionContainer from "@/components/ui/SectionContainer";
import { GALLERY_ITEMS } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Factory,
  Flame,
  FlaskConical,
  Gem,
  Users,
  ShieldCheck,
  Lock,
  Truck,
};

const categories = ["Todas", ...new Set(GALLERY_ITEMS.map((i) => i.category))];

export default function GalleryPage() {
  const [active, setActive] = useState("Todas");

  const filtered =
    active === "Todas"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((i) => i.category === active);

  return (
    <>
      {/* Header */}
      <SectionContainer dark className="!pb-14">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-silver-400">
            Galería
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
            Nuestras instalaciones y operaciones
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-steel-300">
            Conozca de cerca nuestras plantas de refinación, laboratorios
            certificados, equipo de trabajo y los procesos que respaldan la
            calidad de nuestros servicios.
          </p>
        </div>
      </SectionContainer>

      {/* Filter + Grid */}
      <SectionContainer>
        {/* Category filter */}
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                active === cat
                  ? "bg-navy-700 text-white shadow-md"
                  : "border border-steel-200 bg-white text-steel-600 hover:border-navy-300 hover:text-navy-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery grid — Bento-style mixed sizes */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Factory;
            const tall = i % 5 === 0 || i % 5 === 3;

            return (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${item.gradient} ${
                  tall ? "sm:row-span-2" : ""
                } animate-fade-in-up`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {/* Dot pattern overlay */}
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

                {/* Content */}
                <div
                  className={`relative flex flex-col items-center justify-center p-10 text-center ${
                    tall ? "min-h-[380px]" : "min-h-[240px]"
                  }`}
                >
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/10 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-8 w-8 text-white/90" />
                  </div>

                  <span className="mb-2 inline-block rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white/60">
                    {item.category}
                  </span>

                  <h3 className="font-display text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/60">
                    {item.description}
                  </p>
                </div>

                {/* Hover shine */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent via-white/0 to-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-14 rounded-xl border border-steel-200 bg-steel-50 p-6 text-center">
          <p className="text-sm text-steel-500">
            Las imágenes de esta galería se actualizan periódicamente.
            Para una visita presencial a nuestras instalaciones,{" "}
            <a
              href="/contact"
              className="font-semibold text-navy-700 underline underline-offset-2 hover:text-navy-900"
            >
              contáctenos
            </a>
            .
          </p>
        </div>
      </SectionContainer>
    </>
  );
}
