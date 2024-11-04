import { Building2, Users2, Target, Heart } from 'lucide-react';

export function AboutPage() {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Mission',
      description: 'To provide high-quality lifestyle products that enhance our customers\' daily lives.',
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Values',
      description: 'Quality, sustainability, and customer satisfaction are at the heart of everything we do.',
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: 'History',
      description: 'Founded in 2020, we\'ve grown from a small startup to a trusted lifestyle brand.',
    },
    {
      icon: <Users2 className="h-8 w-8" />,
      title: 'Team',
      description: 'Our diverse team of experts is passionate about delivering excellence.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About LuxeStore</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're dedicated to bringing you the finest selection of lifestyle products,
          carefully curated for quality and style.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {values.map((value, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
              {value.icon}
            </div>
            <h2 className="text-2xl font-semibold mb-4">{value.title}</h2>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
        <h2 className="text-2xl font-semibold mb-6">Our Story</h2>
        <div className="prose max-w-none">
          <p className="mb-4">
            LuxeStore began with a simple idea: to create a curated marketplace where
            quality meets convenience. Our journey started in 2020 when a group of
            design enthusiasts came together with a shared vision.
          </p>
          <p className="mb-4">
            Today, we're proud to offer a carefully selected range of products that
            combine functionality with aesthetic appeal. Each item in our collection
            is chosen based on strict quality criteria and design excellence.
          </p>
          <p>
            We believe in sustainable practices and work with partners who share our
            commitment to environmental responsibility. Our goal is not just to sell
            products, but to contribute to a better, more beautiful world.
          </p>
        </div>
      </div>
    </div>
  );
}