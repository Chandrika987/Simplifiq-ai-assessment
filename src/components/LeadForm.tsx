"use client";

import AuditCard from "./AuditCard";

import jsPDF from "jspdf";

import { useState } from "react";

import {
  User,
  Mail,
  Building2,
  Globe,
  Sparkles,
  Loader2,
  Download,
} from "lucide-react";

export default function LeadForm() {
  const [isLoading, setIsLoading] =
    useState(false);

  const [result, setResult] =
    useState("");

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setIsLoading(true);

    setResult("");

    setError("");

    setSuccess(false);

    const formData = new FormData(
      e.currentTarget
    );

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      website: formData.get("website"),
    };

    try {
      const response = await fetch(
        "/api/analyze",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(data),
        }
      );

      const resData =
        await response.json();

      if (!response.ok) {
        throw new Error(
          resData.error ||
            "Something went wrong"
        );
      }

      setResult(resData.analysis);

      setSuccess(true);
    } catch (err) {
      console.error(err);

      setError(
        err instanceof Error
          ? err.message
          : "Failed to generate report"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const downloadPDF = () => {
    try {
      const pdf = new jsPDF();

      const marginLeft = 15;

      let yPosition = 20;

      pdf.setFont(
        "helvetica",
        "bold"
      );

      pdf.setFontSize(22);

      pdf.text(
        "AI Business Audit Report",
        marginLeft,
        yPosition
      );

      yPosition += 15;

      pdf.setFontSize(12);

      pdf.setFont(
        "helvetica",
        "normal"
      );

      const lines =
        pdf.splitTextToSize(
          result,
          180
        );

      lines.forEach(
        (line: string) => {
          if (yPosition > 280) {
            pdf.addPage();

            yPosition = 20;
          }

          pdf.text(
            line,
            marginLeft,
            yPosition
          );

          yPosition += 8;
        }
      );

      pdf.save(
        "AI-Business-Audit.pdf"
      );
    } catch (error) {
      console.error(
        "PDF Generation Error:",
        error
      );
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center rounded-[2rem]">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="w-10 h-10 animate-spin text-white" />

            <p className="text-white font-medium">
              Generating AI Audit...
            </p>
          </div>
        </div>
      )}

      {/* Background Glow */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-purple-500/20 blur-3xl rounded-full pointer-events-none" />

      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-indigo-500/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-2">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center border border-white/10">
            <Sparkles className="w-6 h-6 text-purple-400" />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white tracking-tight">
              Generate AI Audit
            </h2>

            <p className="text-gray-400 text-sm mt-1">
              Enter company details to generate a personalized AI-powered business audit.
            </p>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <InputField
              name="name"
              icon={
                <User className="w-5 h-5" />
              }
              type="text"
              placeholder="Full Name"
              required
            />

            <InputField
              name="email"
              icon={
                <Mail className="w-5 h-5" />
              }
              type="email"
              placeholder="Work Email"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <InputField
              name="company"
              icon={
                <Building2 className="w-5 h-5" />
              }
              type="text"
              placeholder="Company Name"
              required
            />

            <InputField
              name="website"
              icon={
                <Globe className="w-5 h-5" />
              }
              type="url"
              placeholder="Company Website"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="group relative w-full flex items-center justify-center gap-2 rounded-xl bg-white text-black py-4 mt-8 font-semibold transition-all hover:bg-gray-100 disabled:opacity-80 disabled:cursor-not-allowed overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />

            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />

                <span>
                  Generating Audit...
                </span>
              </>
            ) : (
              <>
                <span>
                  Generate AI Audit
                </span>

                <Sparkles className="w-4 h-4 text-black/70" />
              </>
            )}
          </button>
        </form>

        {/* Error */}
        {error && (
          <div className="mt-6 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-red-300">
            {error}
          </div>
        )}

        {/* Success */}
        {success && (
          <div className="mt-6 rounded-2xl border border-green-500/30 bg-green-500/10 p-4 text-green-300">
            AI Business Audit generated successfully.
            PDF download and email delivery are ready.
          </div>
        )}

        {/* AI Result */}
        {result && (
          <div className="mt-10 bg-black p-6 rounded-3xl">
            <div className="grid gap-6">
              {result
                .split("\n\n")
                .filter(
                  (section) =>
                    section.trim() !== ""
                )
                .map(
                  (
                    section,
                    index
                  ) => {
                    const lines =
                      section.split("\n");

                    const title =
                      lines[0];

                    const content =
                      lines
                        .slice(1)
                        .join("\n");

                    return (
                      <AuditCard
                        key={index}
                        title={title}
                        content={content}
                      />
                    );
                  }
                )}
            </div>

            {/* PDF Button */}
            <button
              type="button"
              onClick={downloadPDF}
              className="w-full mt-8 rounded-2xl bg-white text-black py-4 font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition"
            >
              <Download className="w-5 h-5" />

              Download PDF Report
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function InputField({
  icon,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  icon: React.ReactNode;
}) {
  const [isFocused, setIsFocused] =
    useState(false);

  return (
    <div className="relative group">
      {/* Glow */}
      <div
        className={`absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 opacity-0 blur transition-opacity duration-500 ${
          isFocused
            ? "opacity-30"
            : "group-hover:opacity-15"
        }`}
      />

      {/* Input */}
      <div
        className={`relative flex items-center bg-black/40 backdrop-blur-sm rounded-xl border transition-colors duration-300 ${
          isFocused
            ? "border-purple-500/50"
            : "border-white/10 group-hover:border-white/20"
        }`}
      >
        <div
          className={`pl-4 transition-colors duration-300 ${
            isFocused
              ? "text-purple-400"
              : "text-gray-500"
          }`}
        >
          {icon}
        </div>

        <input
          {...props}
          onFocus={() =>
            setIsFocused(true)
          }
          onBlur={() =>
            setIsFocused(false)
          }
          className="w-full bg-transparent px-4 py-3.5 text-white placeholder:text-gray-500 outline-none rounded-xl font-medium"
        />
      </div>
    </div>
  );
}