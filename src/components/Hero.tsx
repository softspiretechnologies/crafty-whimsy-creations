
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-cream via-sage/20 to-gold/10 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 animate-pulse">
        <Sparkles className="w-8 h-8 text-gold opacity-60" />
      </div>
      <div className="absolute bottom-32 right-16 animate-pulse delay-1000">
        <Sparkles className="w-6 h-6 text-sage-dark opacity-40" />
      </div>
      <div className="absolute top-1/3 right-20 animate-pulse delay-500">
        <Sparkles className="w-4 h-4 text-gold opacity-80" />
      </div>

      <div className="container px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-warm-brown mb-6 leading-tight">
            Handcrafted
            <span className="text-gradient block">with Love</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
            Discover unique handmade crafts, custom invitations, and beautiful decorative pieces 
            that tell your story with artisanal elegance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold/90 text-warm-brown font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Collection
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-sage-dark text-sage-dark hover:bg-sage-dark hover:text-white px-8 py-6 text-lg rounded-xl transition-all duration-300"
            >
              Custom Orders
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
