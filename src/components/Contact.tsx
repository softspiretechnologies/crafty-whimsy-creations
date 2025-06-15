
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-warm-brown to-warm-brown/90 text-white">
      <div className="container px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-fade-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Let's Create Something Beautiful Together
            </h2>
            <p className="text-xl mb-8 text-white/80">
              Ready to bring your vision to life? Get in touch for custom orders, 
              collaborations, or just to say hello!
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gold/20 rounded-lg">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-white/80">hello@handcraftedwithlove.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-gold/20 rounded-lg">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-white/80">(555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-gold/20 rounded-lg">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <div className="font-semibold">Studio</div>
                  <div className="text-white/80">123 Artisan Lane, Creative District</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-3 bg-white/10 hover:bg-white/20 rounded-lg cursor-pointer transition-colors">
                <Instagram className="w-6 h-6" />
              </div>
              <div className="p-3 bg-white/10 hover:bg-white/20 rounded-lg cursor-pointer transition-colors">
                <Facebook className="w-6 h-6" />
              </div>
              <div className="p-3 bg-white/10 hover:bg-white/20 rounded-lg cursor-pointer transition-colors">
                <Twitter className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <h3 className="font-playfair text-2xl font-bold text-warm-brown mb-6">
              Send us a message
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  placeholder="Your Name" 
                  className="border-sage/30 focus:border-gold"
                />
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="border-sage/30 focus:border-gold"
                />
              </div>
              
              <Input 
                placeholder="Subject" 
                className="border-sage/30 focus:border-gold"
              />
              
              <Textarea 
                placeholder="Tell us about your project..." 
                rows={5}
                className="border-sage/30 focus:border-gold resize-none"
              />
              
              <Button 
                type="submit"
                className="w-full bg-gold hover:bg-gold/90 text-warm-brown font-semibold py-6 text-lg rounded-xl"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
