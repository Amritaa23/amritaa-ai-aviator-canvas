
import { Heart, Plane, Globe } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold animate-float">
            Amritaa R L
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Commercial Pilot | AI Enthusiast | Tech Innovator
          </p>
          <div className="flex justify-center gap-6 pt-4">
            <span className="animate-float" style={{ animationDelay: "0.2s" }}>
              <Plane className="w-8 h-8 text-pink-500" />
            </span>
            <span className="animate-float" style={{ animationDelay: "0.4s" }}>
              <Heart className="w-8 h-8 text-pink-500" />
            </span>
            <span className="animate-float" style={{ animationDelay: "0.6s" }}>
              <Globe className="w-8 h-8 text-pink-500" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
