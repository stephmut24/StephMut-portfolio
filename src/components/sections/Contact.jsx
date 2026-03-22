import { useState, useEffect } from "react";
import { Toast } from "../Toast";
import emailjs from "emailjs-com";
import { env } from "@/config/env";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "success", visible: false });

  const showToast = (message, type = "success") => {
    setToast({ message, type, visible: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { serviceId, templateId, publicKey } = env.emailJs;

    if (!serviceId || !templateId || !publicKey) {
      showToast("Le service de messagerie n'est pas configuré.", "error");
      return;
    }

    setIsSubmitting(true);
    emailjs
      .sendForm(serviceId, templateId, e.target, publicKey)
      .then(() => {
        showToast("Message envoyé avec succès !");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        const msg =
          error?.text || (error?.status ? `Erreur ${error.status}` : "Une erreur est survenue.");
        showToast(msg, "error");
      })
      .finally(() => setIsSubmitting(false));
  };

  useEffect(() => {
    const { publicKey } = env.emailJs;
    if (publicKey) {
      try {
        emailjs.init(publicKey);
      } catch {
        /* EmailJS init failed silently */
      }
    }
  }, []);

  return (
    <section id="contact" className="min-h-screen flex justify-center py-20">
      <div className="px-4 w-full max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold m-8 md:m-12 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent font-robotoFlex">
            Get in Touch
          </h2>
          <form action="" className="space-y-6 md:space-y-8 max-w-2xl mx-auto" onSubmit={handleSubmit} noValidate>
            <div className="relative">
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                autoComplete="name"
                value={formData.name}
                disabled={isSubmitting}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-lg text-white transition focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:bg-blue-500/5 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Your name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="relative">
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                value={formData.email}
                disabled={isSubmitting}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-lg text-white transition focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:bg-blue-500/5 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="your.email@example.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="relative">
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                required
                autoComplete="off"
                rows={6}
                value={formData.message}
                disabled={isSubmitting}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-lg text-white transition focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:bg-blue-500/5 disabled:opacity-50 disabled:cursor-not-allowed resize-none"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 px-8 rounded-lg text-lg font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none flex items-center justify-center gap-2 min-h-[56px]"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Envoi en cours...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      <Toast
        message={toast.message}
        type={toast.type}
        visible={toast.visible}
        onClose={() => setToast((prev) => ({ ...prev, visible: false }))}
      />
    </section>
  );
};
