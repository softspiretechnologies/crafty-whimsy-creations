
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart, Star } from "lucide-react";

const ProductCarousel = () => {
  const featuredProducts = [
    {
      id: 1,
      title: "Romantic Rose Bouquet",
      description: "Hand-picked red roses with elegant wrapping",
      price: "$85",
      image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&q=80&w=500",
      category: "Bouquets",
      rating: 5,
      reviews: 34
    },
    {
      id: 2,
      title: "Spring Tulip Arrangement",
      description: "Fresh tulips in soft pastel colors",
      price: "$65",
      image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=500",
      category: "Arrangements",
      rating: 5,
      reviews: 28
    },
    {
      id: 3,
      title: "Elegant White Lilies",
      description: "Pure white lilies for special occasions",
      price: "$75",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=500",
      category: "Bouquets",
      rating: 5,
      reviews: 42
    },
    {
      id: 4,
      title: "Mixed Wildflower Box",
      description: "Seasonal wildflowers in a decorative box",
      price: "$55",
      image: "https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&q=80&w=500",
      category: "Arrangements",
      rating: 4,
      reviews: 19
    },
    {
      id: 5,
      title: "Sunflower Delight",
      description: "Bright sunflowers with complementary blooms",
      price: "$68",
      image: "https://images.unsplash.com/photo-1500378391545-64e3b110ac3e?auto=format&fit=crop&q=80&w=500",
      category: "Bouquets",
      rating: 5,
      reviews: 31
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-dainty-cream via-dainty-pink/10 to-dainty-lavender/10">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dainty-gray mb-6">
            Featured Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of the most beautiful arrangements
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {featuredProducts.map((product) => (
              <CarouselItem key={product.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="group craft-card h-full">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
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
                      <span className="bg-primary/90 text-white text-xs px-3 py-1 rounded-full font-medium">
                        {product.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-playfair text-xl font-semibold text-dainty-gray line-clamp-2 flex-1">
                        {product.title}
                      </h3>
                      <span className="text-xl font-bold text-primary ml-3">
                        {product.price}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                        <span className="text-xs text-muted-foreground ml-2">
                          ({product.reviews} reviews)
                        </span>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-xl transition-all duration-300 group-hover:shadow-lg"
                      size="sm"
                    >
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-white shadow-lg border-2 border-primary/20 hover:bg-primary hover:text-white" />
          <CarouselNext className="hidden md:flex -right-12 bg-white shadow-lg border-2 border-primary/20 hover:bg-primary hover:text-white" />
        </Carousel>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-secondary hover:bg-dainty-blue-dark text-dainty-gray font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-lg"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
