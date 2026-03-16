import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export default function SectionContainer({
  children,
  className = "",
  id,
  dark = false,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${dark ? "bg-navy-900 text-white" : "bg-white"} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </section>
  );
}
