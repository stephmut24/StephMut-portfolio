import { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Defensive checks for env vars to help debugging
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS: missing one or more VITE_* env vars", {
        serviceId,
        templateId,
        publicKey,
      });
      alert("Configuration error: mail service not configured. Check console.");
      return;
    }

    // sendForm returns a promise
    emailjs
      .sendForm(serviceId, templateId, e.target, publicKey)
      .then((result) => {
        console.log("EmailJS sendForm success", result);
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        // Show detailed error in console to diagnose (CORS, 4xx/5xx, network, etc.)
        console.error("EmailJS sendForm error", error);
        // EmailJS sometimes returns an object with status/text
        if (error?.text) {
          alert(`Mail error: ${error.text}`);
        } else if (error?.status) {
          alert(`Mail error: status ${error.status}`);
        } else {
          alert("Oops! Something went wrong. Check console for details.");
        }
      });
  };

  useEffect(() => {
    // Ensure EmailJS is initialized (helps in some package versions)
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    if (publicKey) {
      try {
        emailjs.init(publicKey);
        console.log("EmailJS initialized");
      } catch (err) {
        console.warn("EmailJS init failed", err);
      }
    } else {
      console.warn("EmailJS public key not found in VITE_PUBLIC_KEY");
    }
  }, []);
  return (
    <section id="contact" className="min-h-screen flex justify-center py-20">
      <RevealOnScroll>
        <div className="px-4 w-150 text-center">
          <h2 className="text-4xl  font-bold m-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <form action="" className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130, 246, 0.3)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
