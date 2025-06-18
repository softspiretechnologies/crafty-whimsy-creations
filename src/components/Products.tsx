
import { ShoppingBag, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Floral Wedding Invitation Set",
      description: "Complete wedding suite with RSVP cards",
      price: "$125",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=300",
      category: "Invitations",
      rating: 5,
      reviews: 24
    },
    {
      id: 2,
      title: "Pressed Flower Art",
      description: "Hand-pressed botanical arrangement",
      price: "$65",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=300",
      category: "Wall Art",
      rating: 5,
      reviews: 18
    },
    {
      id: 3,
      title: "Custom Baby Shower Cards",
      description: "Personalized celebration invitations",
      price: "$45",
      image: "https://images.unsplash.com/photo-1587829192132-f2a7c1e6dbb1?auto=format&fit=crop&q=80&w=300",
      category: "Invitations",
      rating: 5,
      reviews: 32
    },
    {
      id: 4,
      title: "Watercolor Bookmarks",
      description: "Set of 5 hand-painted bookmarks",
      price: "$28",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=300",
      category: "Paper Crafts",
      rating: 4,
      reviews: 15
    },
    {
      id: 5,
      title: "Memory Scrapbook Album",
      description: "Personalized photo album with embellishments",
      price: "$95",
      image: "https://images.unsplash.com/photo-1506485338023-6ce5f38de033?auto=format&fit=crop&q=80&w=300",
      category: "Albums",
      rating: 5,
      reviews: 27
    },
    {
      id: 6,
      title: "Botanical Wall Hanging",
      description: "Dried flower arrangement in wooden frame",
      price: "$78",
      image: "https://images.unsplash.com/photo-1516634591446-24c609e2d634?auto=format&fit=crop&q=80&w=300",
      category: "Wall Art",
      rating: 5,
      reviews: 21
    },
    {
      id: 7,
      title: "Thank You Card Set",
      description: "Pack of 10 handmade gratitude cards",
      price: "$32",
      image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?auto=format&fit=crop&q=80&w=300",
      category: "Cards",
      rating: 5,
      reviews: 19
    },
    {
      id: 8,
      title: "Custom Name Banner",
      description: "Personalized paper banner for celebrations",
      price: "$55",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=300",
      category: "Decorations",
      rating: 4,
      reviews: 13
    },
    {
      id: 9,
      title: "Vintage Journal",
      description: "Hand-bound journal with decorative cover",
      price: "$42",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      category: "Journals",
      rating: 5,
      reviews: 16
    },
    {
      id: 10,
      title: "Gift Box Set",
      description: "Handmade gift boxes with ribbon details",
      price: "$38",
      image: "https://images.unsplash.com/photo-1555644026-d25ade221422?auto=format&fit=crop&q=80&w=300",
      category: "Gift Wrap",
      rating: 5,
      reviews: 22
    },
    {
      id: 11,
      title: "Celebration Garland",
      description: "Paper flower garland for special occasions",
      price: "$48",
      image: "https://images.unsplash.com/photo-1608231387042-89d0ac72c832?auto=format&fit=crop&q=80&w=300",
      category: "Decorations",
      rating: 4,
      reviews: 11
    },
    {
      id: 12,
      title: "Custom Portrait Frame",
      description: "Decorated frame with personalized details",
      price: "$68",
      image: "https://images.unsplash.com/photo-1547990251-2bb4e10959b2?auto=format&fit=crop&q=80&w=300",
      category: "Frames",
      rating: 5,
      reviews: 14
    }
  ];

  const categories = ["All", "Invitations", "Wall Art", "Paper Crafts", "Albums", "Cards", "Decorations", "Journals", "Gift Wrap", "Frames"];

  return (
    <section className="py-20 bg-gradient-to-br from-dainty-cream via-dainty-pink/5 to-dainty-blue/5">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dainty-gray mb-6">
            Our Handmade Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Each piece is lovingly crafted with attention to detail and made with premium materials
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="rounded-full px-6 py-2 text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="group craft-card animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-square overflow-hidden rounded-t-2xl">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors">
                    <Heart className="w-4 h-4 text-primary" />
                  </button>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="bg-primary/90 text-white text-xs px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-playfair text-lg font-semibold text-dainty-gray line-clamp-2">
                    {product.title}
                  </h3>
                  <span className="text-lg font-bold text-primary ml-2">
                    {product.price}
                  </span>
                </div>
                
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">
                      ({product.reviews})
                    </span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-secondary hover:bg-dainty-blue-dark text-dainty-gray font-semibold py-2 rounded-lg transition-colors duration-300"
                  size="sm"
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-xl"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
