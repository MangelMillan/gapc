import { Flame, Factory, Recycle, BookOpen, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Flame,
  Factory,
  Recycle,
  BookOpen,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  index?: number;
}

export default function ServiceCard({ title, description, icon, index = 0 }: ServiceCardProps) {
  const Icon = iconMap[icon] ?? Flame;
  const delays = ["", "animation-delay-200", "animation-delay-400", "animation-delay-600"];

  return (
    <div
      className={`group animate-fade-in-up ${delays[index % 4]} rounded-2xl border border-steel-200 bg-white p-8 transition-all duration-300 hover:border-navy-300 hover:shadow-xl hover:shadow-navy-100/40`}
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700 transition-colors group-hover:bg-navy-700 group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-3 font-display text-lg font-semibold text-navy-900">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-steel-500">{description}</p>
    </div>
  );
}
