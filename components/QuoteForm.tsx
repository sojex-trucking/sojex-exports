"use client";

import { FormEvent, useState } from "react";
import { waLink } from "@/lib/config";

const fields = [
  ["name", "Name *"],
  ["company", "Company"],
  ["email", "Email *"],
  ["whatsapp", "WhatsApp *"],
  ["country", "Country *"],
  ["product", "Product / category *"],
  ["quantity", "Quantity *"],
  ["sizes", "Sizes / dimensions"],
  ["colors", "Colors"],
  ["materials", "Materials"],
  ["destination", "Shipping destination"],
  ["budget", "Target budget"],
] as const;

export default function QuoteForm({ initialProduct = "" }: { initialProduct?: string }) {
  const [error, setError] = useState("");

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const required = ["name", "email", "whatsapp", "country", "product", "quantity", "requirements"];
    if (required.some((key) => !String(form.get(key) || "").trim())) {
      setError("Please complete every required field.");
      return;
    }
    const email = String(form.get("email"));
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    const lines = [
      "Hello SOJEX EXPORTS, I would like a quotation:",
      "",
      ...Array.from(form.entries()).map(([key, value]) => `${key.replaceAll("_", " ")}: ${value}`),
      "",
      "I understand this opens WhatsApp and does not send an email.",
    ];
    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={submit} noValidate className="card p-6 sm:p-9">
      <div className="grid gap-5 md:grid-cols-2">
        {fields.map(([name, label]) => (
          <label className="text-sm font-bold" key={name}>
            {label}
            <input
              name={name}
              type={name === "email" ? "email" : "text"}
              defaultValue={name === "product" ? initialProduct : undefined}
              className="mt-2 w-full border border-gray-300 bg-warm p-3 font-normal"
            />
          </label>
        ))}
        <label className="text-sm font-bold md:col-span-2">
          Customization
          <textarea name="customization" rows={3} className="mt-2 w-full border border-gray-300 bg-warm p-3 font-normal" placeholder="Printing, embroidery, labels, packaging…" />
        </label>
        <label className="text-sm font-bold md:col-span-2">
          Requirements *
          <textarea name="requirements" rows={5} className="mt-2 w-full border border-gray-300 bg-warm p-3 font-normal" placeholder="Describe the product, intended use, deadline and any technical details." />
        </label>
      </div>
      {error && <p role="alert" className="mt-5 border-l-4 border-orange bg-orange/10 p-3 text-sm font-bold">{error}</p>}
      <p className="mt-5 text-xs leading-5 text-gray-500">
        Submitting opens a prefilled WhatsApp conversation. No email is sent and no files are uploaded.
        Please attach artwork in WhatsApp after the conversation opens.
      </p>
      <button className="btn btn-orange mt-6" type="submit">Continue securely in WhatsApp</button>
    </form>
  );
}
