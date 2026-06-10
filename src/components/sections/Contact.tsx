"use client";

import { useRef, useState } from "react";
import { useRevealObserver } from "@/hooks/useRevealObserver";
import { useForm } from "react-hook-form";
import MagneticButton from "@/components/ui/MagneticButton";
import { useLanguage } from "@/components/providers/LanguageProvider";

type FormData = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [sent, setSent] = useState(false);
  const { t, language } = useLanguage();
  const isArabic = language === "ar";
  useRevealObserver(ref);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await new Promise(r => setTimeout(r, 1200));
    console.log(data);
    setSent(true);
  };

  const inputDir = isArabic ? "rtl" : "ltr";

  return (
    <section
      id="contact"
      ref={ref}
      className="section"
      style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="wrap">
        <div className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-start ${isArabic ? "arabic" : ""}`}>

          {/* Left: editorial headline */}
          <div className="reveal">
            <div className="label-line">
              <span className={`t-label ${isArabic ? "arabic" : ""}`}>{t.contact.label}</span>
            </div>

            <h2 className="t-title" style={{ marginBottom: "clamp(1.5rem, 3vw, 3rem)" }}>
              {t.contact.title}
            </h2>

            <p className="t-body" style={{ maxWidth: 400, marginBottom: "clamp(2.5rem, 5vw, 5rem)" }}>
              {isArabic 
                ? "أخبرنا عن التحدي الذي يواجه علامتك التجارية. سنرد عليك خلال 24 ساعة بمنظور استراتيجي — وليس عرض مبيعات."
                : "Tell us about your brand challenge. We'll respond within 24 hours with a strategic perspective — not a sales pitch."}
            </p>

            {/* Philosophy block */}
            <div
              style={{
                borderLeft: isArabic ? "none" : "2px solid #7BC600",
                borderRight: isArabic ? "2px solid #7BC600" : "none",
                paddingLeft: isArabic ? 0 : 24,
                paddingRight: isArabic ? 24 : 0,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-arabic)",
                  direction: "rtl",
                  fontSize: "clamp(20px, 2.5vw, 28px)",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: 8,
                }}
              >
                مش حظ... دي استراتيجية.
              </p>
              <p className="t-label" style={{ color: "rgba(255,255,255,0.3)", direction: "rtl", fontFamily: "var(--font-arabic)" }}>
                — فلسفة BrandMe
              </p>
            </div>
          </div>

          {/* Right: minimal form */}
          <div className="reveal reveal-delay-2">
            {sent ? (
              <div
                style={{
                  padding: "clamp(2rem, 5vw, 4rem)",
                  borderRadius: 20,
                  background: "rgba(123,198,0,0.06)",
                  border: "1px solid rgba(123,198,0,0.2)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 48, marginBottom: 20 }}>✓</div>
                <h3 className="t-sub" style={{ color: "#7BC600", marginBottom: 12 }}>
                  {isArabic ? "تم استلام رسالتك." : "Message received."}
                </h3>
                <p className="t-body">
                  {isArabic ? "سنتواصل معك خلال 24 ساعة." : "We'll be in touch within 24 hours."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {[
                  { name: "name" as const,    label: t.contact.name,    placeholder: isArabic ? "الاسم الكامل" : "Full name",          required: true  },
                  { name: "email" as const,   label: t.contact.email,   placeholder: "email@company.com",  required: true  },
                  { name: "company" as const, label: isArabic ? "الشركة" : "Company", placeholder: isArabic ? "اسم الشركة" : "Company name", required: false },
                ].map(f => (
                  <div key={f.name}>
                    <label className={`t-label block mb-3 ${isArabic ? "arabic" : ""}`} style={{ color: "rgba(255,255,255,0.35)", textAlign: isArabic ? "right" : "left" }}>{f.label}</label>
                    <input
                      {...register(f.name, { required: f.required ? `${f.label} is required` : false })}
                      placeholder={f.placeholder}
                      className={`premium-input ${isArabic ? "arabic" : ""}`}
                      style={{
                        borderColor: errors[f.name] ? "#ef4444" : undefined,
                        textAlign: isArabic ? "right" : "left",
                        direction: inputDir as any
                      }}
                    />
                    {errors[f.name] && (
                      <p className="t-label mt-1" style={{ color: "#ef4444", textAlign: isArabic ? "right" : "left" }}>{errors[f.name]?.message}</p>
                    )}
                  </div>
                ))}

                <div>
                  <label className={`t-label block mb-3 ${isArabic ? "arabic" : ""}`} style={{ color: "rgba(255,255,255,0.35)", textAlign: isArabic ? "right" : "left" }}>
                    {isArabic ? "الرسالة" : "Message"}
                  </label>
                  <textarea
                    {...register("message", { required: isArabic ? "الرسالة مطلوبة" : "Message is required" })}
                    rows={4}
                    placeholder={t.contact.message}
                    className={`premium-input ${isArabic ? "arabic" : ""}`}
                    style={{
                      borderColor: errors.message ? "#ef4444" : undefined,
                      textAlign: isArabic ? "right" : "left",
                      direction: inputDir as any
                    }}
                  />
                  {errors.message && (
                    <p className="t-label mt-1" style={{ color: "#ef4444", textAlign: isArabic ? "right" : "left" }}>{errors.message?.message}</p>
                  )}
                </div>

                <MagneticButton
                  type="submit"
                  className={`mag-btn mag-btn--primary w-full ${isArabic ? "arabic" : ""}`}
                  style={{ justifyContent: "center" }}
                  data-cursor="true"
                >
                  {isSubmitting 
                    ? (isArabic ? "جاري الإرسال..." : "Sending...") 
                    : t.contact.submit}
                </MagneticButton>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
