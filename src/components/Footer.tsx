
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-warm-brown text-white py-12">
      <div className="container px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="font-playfair text-2xl font-bold mb-4">Handcrafted with Love</h3>
            <p className="text-white/80 leading-relaxed max-w-md">
              Creating unique, handmade treasures that celebrate life's special moments. 
              Every piece tells a story, crafted with passion and attention to detail.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Custom Orders</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-gold transition-colors">Wedding Invitations</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Art Commissions</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Gift Wrapping</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Workshops</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 mb-4 md:mb-0">
            © 2024 Handcrafted with Love. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white/80">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-gold fill-current" />
            <span>for creative souls</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
