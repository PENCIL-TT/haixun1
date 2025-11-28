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
        setTimeout(() => setShowNotification(false), 3000);
      } else {
        alert("Submission failed. Try again.");
      }
    } catch (err) {
      alert("Submission failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      <Navigation />

      {/* ⭐ WHITE SPACE ABOVE MAP (TOP GAP) */}
      <div className="h-10 md:h-16 bg-white"></div>

      {/* ⭐ MAP DIRECTLY BELOW HEADER */}
      <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden bg-white">
        <iframe
          title="Haixun Global Shenzhen Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.9747126781313!2d114.11695999999999!3d22.54262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f5bf0884ff7b%3A0xda2e416692e764e2!2sZhaoxin%20Huijin%20Plaza!5e0!3m2!1sen!2sin!4v1764335462682!5m2!1sen!2sin"
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      {/* SUCCESS POPUP */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 right-4 z-50 flex items-center gap-3 rounded-xl bg-emerald-500 px-4 py-3 text-white shadow-xl"
          >
            <Send className="h-4 w-4" />
            <span>Your message has been sent.</span>
            <button
              type="button"
              onClick={() => setShowNotification(false)}
              className="ml-2"
            >
              <XCircle className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        {/* MAIN CONTACT CONTENT */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="relative grid gap-10 rounded-2xl bg-white shadow-[0_30px_80px_rgba(15,23,42,0.12)] lg:grid-cols-[1.5fr,1fr] overflow-hidden">
              
              {/* BACKGROUND WORLD MAP */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[url('/world-map-light.png')] bg-cover bg-center" />

              {/* LEFT SIDE - FORM */}
              <div className="relative border-r border-slate-100 p-8 md:p-10">
                <span
                  className="bg-[#FFF2F3] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] rounded-full text-[#BC0018]"
                >
                  Send Us Mail
                </span>

                <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mt-3 mb-3 leading-snug">
                  Feel Free To{" "}
                  <span
                    className="underline decoration-4 underline-offset-4"
                    style={{ textDecorationColor: BRAND_RED }}
                  >
                    Write
                  </span>
                </h2>

                <p className="text-sm text-slate-500 mb-8 max-w-xl">
                  Logistics involves the efficient planning, management and
                  coordination of the movement of goods.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <input type="hidden" name="Location" value={selectedLocation} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      name="First Name"
                      placeholder="First Name"
                      required
                      className="rounded-none bg-slate-50"
                    />
                    <Input
                      name="Last Name"
                      placeholder="Last Name"
                      className="rounded-none bg-slate-50"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      type="email"
                      name="Email"
                      placeholder="Email"
                      required
                      className="rounded-none bg-slate-50"
                    />
                    <Input
                      name="Phone"
                      placeholder="Phone Number"
                      className="rounded-none bg-slate-50"
                    />
                  </div>

                  <Select
                    value={selectedLocation}
                    onValueChange={setSelectedLocation}
                  >
                    <SelectTrigger className="rounded-none bg-slate-50">
                      <SelectValue placeholder="Select Location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locationNames.map((loc) => (
                        <SelectItem key={loc} value={loc}>
                          {loc}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Textarea
                    name="Message"
                    placeholder="Write your message..."
                    required
                    className="min-h-[120px] rounded-none bg-slate-50"
                  />

                  <Button
                    type="submit"
                    className="rounded-none bg-[#E0001B] hover:bg-[#c30017] px-8"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>

              {/* RIGHT SIDE - CONTACT INFO */}
              <div className="relative bg-slate-50 p-8 md:p-10">
                <span
                  className="inline-block mb-2 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.18em]"
                  style={{ backgroundColor: "#FFF2F3", color: BRAND_RED }}
                >
                  Need Any Help?
                </span>

                <h2 className="text-3xl md:text-[32px] font-semibold text-slate-900 leading-snug mb-5">
                  Get In Touch{" "}
                  <span
                    className="underline decoration-4 underline-offset-4"
                    style={{ textDecorationColor: BRAND_RED }}
                  >
                    With Us!
                  </span>
                </h2>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="h-11 w-11 flex items-center justify-center rounded-md bg-[#FFE7EA]">
                      <Phone className="text-[#BC0018] h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase text-slate-500">
                        Have Any Question?
                      </p>
                      <p className="font-semibold text-slate-900">
                        +65 0000 0000
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="h-11 w-11 flex items-center justify-center rounded-md bg-[#FFE7EA]">
                      <Mail className="text-[#BC0018] h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase text-slate-500">
                        Write Us Email
                      </p>
                      <p className="font-semibold text-slate-900">
                        info@haixun.co
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="h-11 w-11 flex items-center justify-center rounded-md bg-[#FFE7EA]">
                      <MapPin className="text-[#BC0018] h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase text-slate-500">
                        Headquarters
                      </p>
                      <p className="font-semibold text-slate-900">
                        123 Global Trade Center,
                        <br />
                        Singapore.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mt-10">
                  Our regional teams are available 24/7.
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
