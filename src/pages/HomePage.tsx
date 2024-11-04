import { ShoppingBag, Truck, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function HomePage() {
  const features = [
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      title: 'Premium Selection',
      description: 'Curated collection of high-quality products',
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: 'Fast Delivery',
      description: 'Free shipping on orders over $50',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Secure Shopping',
      description: '100% secure payment processing',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer service',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to LuxeStore
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover our premium collection of lifestyle products
        </p>
        <Button size="lg" asChild>
          <Link to="/products">Shop Now</Link>
        </Button>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-sm text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Featured Image */}
      <div className="relative rounded-xl overflow-hidden h-96 mb-16">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600"
          alt="Featured collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">New Collection</h2>
            <Button variant="outline" size="lg" className="text-white" asChild>
              <Link to="/products">Explore Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}