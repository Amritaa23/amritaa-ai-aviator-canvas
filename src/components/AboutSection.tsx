
import { Users, Heart, Map } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Hello! I'm Amritaa, a passionate individual from the vibrant southern part of India. Born in Karnataka with roots in Kerala, I speak Malayalam and carry with me the rich cultural heritage of both regions.
            </p>
            <p className="text-lg leading-relaxed">
              As a commercial pilot and AI enthusiast, I blend the precision of aviation with the innovation of artificial intelligence. My journey is guided by my deep devotion to Radhakrishna, who are my greatest source of inspiration and support.
            </p>
          </div>
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Users className="w-8 h-8 text-pink-500" />
              <div>
                <h3 className="font-semibold text-xl">People Person</h3>
                <p>Love connecting with and helping others</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Heart className="w-8 h-8 text-pink-500" />
              <div>
                <h3 className="font-semibold text-xl">Spiritual</h3>
                <p>Devoted to Radhakrishna</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Map className="w-8 h-8 text-pink-500" />
              <div>
                <h3 className="font-semibold text-xl">Hodophile</h3>
                <p>Passionate about exploring new places</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
