
import { Palette, Heart, Gift, Scissors } from "lucide-react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const categories = [
    {
      title: "Custom Invitations",
      description: "Elegant wedding invitations, party cards, and special occasion stationery designed to make your moments memorable.",
      icon: Heart,
      imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=800",
      delay: 0
    },
    {
      title: "Decorative Art",
      description: "Hand-painted canvases, wall hangings, and artistic pieces that transform your space into a gallery of beauty.",
      icon: Palette,
      imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=800",
      delay: 200
    },
    {
      title: "Handmade Gifts",
      description: "Unique personalized gifts crafted with attention to detail, perfect for showing someone how much you care.",
      icon: Gift,
      imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80&w=800",
      delay: 400
    },
    {
      title: "Paper Crafts",
      description: "Intricate paper art, scrapbooking elements, and handcrafted paper goods that celebrate the beauty of traditional craftsmanship.",
      icon: Scissors,
      imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=800",
      delay: 600
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-warm-brown mb-6">
            Our Craft Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each piece is thoughtfully created with premium materials and meticulous attention to detail
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={category.title} className="animate-fade-up">
              <CategoryCard {...category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
