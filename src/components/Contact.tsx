
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-dainty-cream">
      <div className="container px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-fade-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-dainty-gray">
              Let's Create Something Beautiful Together
            </h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Ready to bring your vision to life? Get in touch for custom orders, 
              collaborations, or just to say hello!
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-dainty-gray">Email</div>
                  <div className="text-muted-foreground">hello@handcraftedwithlove.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-dainty-gray">Phone</div>
                  <div className="text-muted-foreground">(555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-dainty-gray">Studio</div>
                  <div className="text-muted-foreground">123 Artisan Lane, Creative District</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="https://www.instagram.com/dainty.handd" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-200/50 hover:bg-gray-200 rounded-lg cursor-pointer transition-colors">
                <Instagram className="w-6 h-6 text-dainty-gray" />
              </a>
              <div className="p-3 bg-gray-200/50 hover:bg-gray-200 rounded-lg cursor-pointer transition-colors">
                <Facebook className="w-6 h-6 text-dainty-gray" />
              </div>
              <div className="p-3 bg-gray-200/50 hover:bg-gray-200 rounded-lg cursor-pointer transition-colors">
                <Twitter className="w-6 h-6 text-dainty-gray" />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <h3 className="font-playfair text-2xl font-bold text-dainty-gray mb-6">
              Send us a message
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  placeholder="Your Name" 
                  className="border-secondary/50 focus:border-primary"
                />
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="border-secondary/50 focus:border-primary"
                />
              </div>
              
              <Input 
                placeholder="Subject" 
                className="border-secondary/50 focus:border-primary"
              />
              
              <Textarea 
                placeholder="Tell us about your project..." 
                rows={5}
                className="border-secondary/50 focus:border-primary resize-none"
              />
              
              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg rounded-xl"
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
