"use client";

import { useState, type FormEvent } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!data.name.trim()) errs.name = "El nombre es requerido.";
    if (!data.email.trim()) {
      errs.email = "El correo es requerido.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errs.email = "Ingrese un correo válido.";
    }
    if (!data.message.trim()) errs.message = "El mensaje es requerido.";
    return errs;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Error en el envío");
      setStatus("success");
      setData({ name: "", email: "", company: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-lg border border-steel-300 bg-white px-4 py-3 text-sm text-steel-800 placeholder:text-steel-400 transition-colors focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-200";
  const errorClass = "mt-1 text-xs text-red-500";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-green-200 bg-green-50 p-12 text-center">
        <CheckCircle2 className="mb-4 h-12 w-12 text-green-600" />
        <h3 className="font-display text-xl font-semibold text-green-800">
          Mensaje enviado
        </h3>
        <p className="mt-2 text-sm text-green-700">
          Gracias por contactarnos. Nos comunicaremos con usted a la brevedad.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-navy-700 underline underline-offset-4 hover:text-navy-900"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-steel-700">
          Nombre *
        </label>
        <input
          id="name"
          type="text"
          placeholder="Su nombre completo"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          className={inputClass}
        />
        {errors.name && <p className={errorClass}>{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-steel-700">
          Correo electrónico *
        </label>
        <input
          id="email"
          type="email"
          placeholder="correo@empresa.com"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className={inputClass}
        />
        {errors.email && <p className={errorClass}>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-steel-700">
          Empresa
        </label>
        <input
          id="company"
          type="text"
          placeholder="Nombre de su empresa (opcional)"
          value={data.company}
          onChange={(e) => setData({ ...data, company: e.target.value })}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-steel-700">
          Mensaje *
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Describa cómo podemos ayudarle..."
          value={data.message}
          onChange={(e) => setData({ ...data, message: e.target.value })}
          className={inputClass}
        />
        {errors.message && <p className={errorClass}>{errors.message}</p>}
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Ocurrió un error al enviar el mensaje. Por favor intente nuevamente.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center gap-2 rounded-lg bg-navy-700 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-navy-800 hover:shadow-lg disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Enviar mensaje
          </>
        )}
      </button>
    </form>
  );
}
