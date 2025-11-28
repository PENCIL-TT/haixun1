import React, { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion, AnimatePresence } from "framer-motion";
import { Send, XCircle, Phone, Mail, MapPin } from "lucide-react";

const BRAND_RED = "#BC0018";

const Contact: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const locationNames = [
    "SINGAPORE",
    "SRI LANKA",
    "MYANMAR",
    "BANGLADESH",
    "PAKISTAN",
    "UK",
    "USA",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const urls = [
      "https://formsubmit.co/ajax/karthikjungleemara@gmail.com",
      "https://formsubmit.co/ajax/karthiktrendsandtactics@gmail.com",
    ];

    try {
      const responses = await Promise.all(
        urls.map((url) =>
          fetch(url, {
            method: "POST",
            body: formData,
          })
        )
      );

      const allSuccessful = responses.every((res) => res.ok);
      if (allSuccessful) {
        setShowNotification(true);
        form.reset();
        setSelectedLocation("");
        setTimeout(() => setShowNotification(false), 4000);
      } else {
        alert("One or more submissions failed. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      <Navigation />

      {/* SUCCESS NOTIFICATION */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="fixed top-24 right-4 z-50 flex items-center gap-3 rounded-xl bg-emerald-500 px-4 py-3 text-white shadow-xl"
          >
            <Send className="h-4 w-4" />
            <span>Your message has been sent successfully.</span>
            <button
              type="button"
              onClick={() => setShowNotification(false)}
              className="ml-2 rounded-full bg-emerald-600/70 p-1 hover:bg-emerald-700"
            >
              <XCircle className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">

        {/* ⭐ BIG FULL-WIDTH MAP */}
        <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
          <iframe
            title="Haixun Global Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.2745098892!2d-118.6919248803841!3d34.02016130606366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c0b6c1b4a1f1%3A0x582f3b3d2ea2981b!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
          />
        </section>

        {/* MAIN CONTACT CARD */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="relative grid gap-10 rounded-2xl bg-white shadow-[0_30px_80px_rgba(15,23,42,0.12)] lg:grid-cols-[1.5fr,1fr] overflow-hidden">

              {/* WORLD MAP BG */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[url('/world-map-light.png')] bg-cover bg-center" />

              {/* LEFT - FORM */}
              <div className="relative border-r border-slate-100 p-8 md:p-10">
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 flex items-center gap-2">
                  <span
                    className="inline-block rounded-full px-3 py-1 text-[11px]"
                    style={{ backgroundColor: "#FFF2F3", color: BRAND_RED }}
                  >
                    Send Us Mail
                  </span>
                </div>

                <h2 className="mb-3 text-3xl md:text-4xl font-semibold text-slate-900 leading-snug">
                  Feel Free To{" "}
                  <span
                    className="underline decoration-4 underline-offset-[6px]"
                    style={{ textDecorationColor: BRAND_RED }}
                  >
                    Write
                  </span>
                </h2>

                <p className="mb-8 max-w-xl text-sm md:text-[15px] leading-relaxed text-slate-500">
                  Logistics involves the efficient planning, management, and
                  coordination of the movement of goods, services, and
                  information.
                </p>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input type="hidden" name="Location" value={selectedLocation} />

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                        First Name
                      </label>
                      <Input
                        name="First Name"
                        placeholder="John"
                        required
                        className="h-11 rounded-none border-slate-200 bg-slate-50/80"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                        Last Name
                      </label>
                      <Input
                        name="Last Name"
                        placeholder="Doe"
                        className="h-11 rounded-none border-slate-200 bg-slate-50/80"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                        Email
                      </label>
                      <Input
                        type="email"
                        name="Email"
                        placeholder="you@example.com"
                        required
                        className="h-11 rounded-none border-slate-200 bg-slate-50/80"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                        Phone Number
                      </label>
                      <Input
                        name="Phone"
                        placeholder="+65 0000 0000"
                        className="h-11 rounded-none border-slate-200 bg-slate-50/80"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                      Preferred Location
                    </label>
                    <Select
                      value={selectedLocation}
                      onValueChange={setSelectedLocation}
                    >
                      <SelectTrigger className="h-11 rounded-none border-slate-200 bg-slate-50/80">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        {locationNames.map((name) => (
                          <SelectItem key={name} value={name}>
                            {name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                      Message
                    </label>
                    <Textarea
                      name="Message"
                      placeholder="Write your message here..."
                      required
                      className="min-h-[120px] rounded-none border-slate-200 bg-slate-50/80"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="mt-2 inline-flex h-11 items-center justify-center rounded-none bg-[#E0001B] px-8 text-sm font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#c30017]"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </div>

              {/* RIGHT – CONTACT INFO */}
              <div className="relative bg-slate-50/80 p-8 md:p-10">
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  <span
                    className="inline-block rounded-full px-3 py-1 text-[11px]"
                    style={{ backgroundColor: "#FFF2F3", color: BRAND_RED }}
                  >
                    Need Any Help?
                  </span>
                </div>

                <h2 className="mb-4 text-3xl md:text-[32px] font-semibold text-slate-900 leading-snug">
                  Get In Touch{" "}
                  <span
                    className="underline decoration-4 underline-offset-[6px]"
                    style={{ textDecorationColor: BRAND_RED }}
                  >
                    With Us!
                  </span>
                </h2>

                <div className="space-y-6">

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-md"
                      style={{ backgroundColor: "#FFE7EA" }}
                    >
                      <Phone className="h-5 w-5" style={{ color: BRAND_RED }} />
                    </div>
                    <div>
                      <p className="text-xs uppercase text-slate-500 tracking-[0.14em]">
                        Have Any Question?
                      </p>
                      <p className="mt-1 text-base font-semibold text-slate-900">
                        +65 0000 0000
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-md"
                      style={{ backgroundColor: "#FFE7EA" }}
                    >
                      <Mail className="h-5 w-5" style={{ color: BRAND_RED }} />
                    </div>
                    <div>
                      <p className="text-xs uppercase text-slate-500 tracking-[0.14em]">
                        Write Us Email
                      </p>
                      <p className="mt-1 text-base font-semibold text-slate-900">
                        info@haixun.co
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-md"
                      style={{ backgroundColor: "#FFE7EA" }}
                    >
                      <MapPin className="h-5 w-5" style={{ color: BRAND_RED }} />
                    </div>
                    <div>
                      <p className="text-xs uppercase text-slate-500 tracking-[0.14em]">
                        Headquarters
                      </p>
                      <p className="mt-1 text-base font-semibold text-slate-900">
                        123 Global Trade Center,
                        <br />
                        Singapore.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-10 text-xs text-slate-400">
                  Our regional teams in Singapore, Sri Lanka, Myanmar,
                  Bangladesh, Pakistan, UK, and USA are available 24/7.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
