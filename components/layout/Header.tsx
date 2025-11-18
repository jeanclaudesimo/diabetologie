'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Leistungen', href: '/leistungen' },
    { name: 'Behandlungen', href: '/behandlungen' },
    { name: 'Team', href: '/team' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Aktuelles', href: '/aktuelles' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar - Notfall-Info */}
      <div className="bg-primary-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+4922611234" className="flex items-center gap-2 hover:text-primary-200 transition">
                <Phone size={16} />
                <span className="hidden sm:inline">+49 2261 12345</span>
              </a>
              <a href="mailto:info@diabetologie-derschlag.de" className="flex items-center gap-2 hover:text-primary-200 transition">
                <Mail size={16} />
                <span className="hidden md:inline">info@diabetologie-derschlag.de</span>
              </a>
            </div>
            <div className="text-xs sm:text-sm">
              <span className="text-red-300 font-semibold">Notfall-Hotline: </span>
              <a href="tel:+4922611234" className="hover:text-primary-200 transition font-bold">
                +49 2261 12345
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/Diabetologie-Derschlag.jpg"
              alt="Diabetologie Derschlag Logo"
              width={200}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 transition font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/kontakt"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition font-semibold"
            >
              Termin vereinbaren
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 transition font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/kontakt"
                className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition font-semibold text-center mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Termin vereinbaren
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
