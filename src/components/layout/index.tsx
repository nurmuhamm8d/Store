import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { CartProvider } from '@/context/CartContext';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        {children}
      </div>
    </CartProvider>
  );
}