
import { Mail, Phone, MapPin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-white/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Get in Touch</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center space-y-4">
            <Mail className="w-8 h-8 text-pink-500" />
            <h3 className="font-semibold text-xl">Email</h3>
            <p>Let's connect via email</p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <Phone className="w-8 h-8 text-pink-500" />
            <h3 className="font-semibold text-xl">Phone</h3>
            <p>Available for calls</p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <MapPin className="w-8 h-8 text-pink-500" />
            <h3 className="font-semibold text-xl">Location</h3>
            <p>Karnataka, India</p>
          </div>
        </div>
      </div>
    </section>
  );
};
