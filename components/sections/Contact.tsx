'use client';

import { ContactProps } from '@/types';
import { Phone, Mail, MapPin, Clock, Send, Calendar } from 'lucide-react';
import { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { de } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';

// Register German locale
registerLocale('de', de);

export default function Contact({ title, subtitle, practiceInfo, showMap = true }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', { ...formData, preferredDate: selectedDate });
    alert('Vielen Dank für Ihre Anfrage! Wir melden uns zeitnah bei Ihnen.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Filter out weekends and past dates
  const isWeekday = (date: Date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6; // 0 = Sunday, 6 = Saturday
  };

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1); // Minimum tomorrow

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Kontaktinformationen</h3>

            {/* Address */}
            <div className="mb-6 flex items-start gap-4">
              <div className="bg-primary-100 p-3 rounded-lg">
                <MapPin size={24} className="text-primary-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Adresse</h4>
                <p className="text-gray-600">
                  {practiceInfo.address.street}<br />
                  {practiceInfo.address.zip} {practiceInfo.address.city}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="mb-6 flex items-start gap-4">
              <div className="bg-primary-100 p-3 rounded-lg">
                <Phone size={24} className="text-primary-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Telefon</h4>
                <a href={`tel:${practiceInfo.contact.phone}`} className="text-primary-600 hover:underline">
                  {practiceInfo.contact.phone}
                </a>
                {practiceInfo.contact.emergency && (
                  <div className="mt-1">
                    <span className="text-sm text-red-600 font-semibold">Notfall: </span>
                    <a href={`tel:${practiceInfo.contact.emergency}`} className="text-red-600 hover:underline text-sm font-bold">
                      {practiceInfo.contact.emergency}
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="mb-6 flex items-start gap-4">
              <div className="bg-primary-100 p-3 rounded-lg">
                <Mail size={24} className="text-primary-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">E-Mail</h4>
                <a href={`mailto:${practiceInfo.contact.email}`} className="text-primary-600 hover:underline">
                  {practiceInfo.contact.email}
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="mb-6 flex items-start gap-4">
              <div className="bg-primary-100 p-3 rounded-lg">
                <Clock size={24} className="text-primary-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Sprechzeiten</h4>
                <div className="space-y-1 text-sm">
                  {Object.entries(practiceInfo.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between gap-4">
                      <span className="text-gray-600 font-medium">{day}:</span>
                      <span className="text-gray-900">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-primary-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Zertifizierungen</h4>
              <ul className="space-y-1 text-sm">
                {practiceInfo.certifications.map((cert, index) => (
                  <li key={index} className="text-gray-700 flex items-center gap-2">
                    <span className="text-primary-600">✓</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Termin anfragen</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Ihr vollständiger Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent text-gray-900 placeholder:text-gray-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="ihre.email@beispiel.de"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent text-gray-900 placeholder:text-gray-400"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefon *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="0123 456789"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent text-gray-900 placeholder:text-gray-400"
                />
              </div>

              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Wunschtermin
                </label>
                <div className="relative">
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    locale="de"
                    dateFormat="dd.MM.yyyy"
                    minDate={minDate}
                    filterDate={isWeekday}
                    placeholderText="Wählen Sie einen Termin"
                    className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent text-gray-900"
                    wrapperClassName="w-full"
                    calendarClassName="custom-calendar"
                    showPopperArrow={false}
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-600 pointer-events-none" size={20} />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Nur Werktage verfügbar. Wir melden uns zur Terminbestätigung.
                </p>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Ihre Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent text-gray-900 placeholder:text-gray-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition font-semibold flex items-center justify-center gap-2"
              >
                Anfrage senden
                <Send size={20} />
              </button>

              <p className="text-xs text-gray-500 text-center">
                * Pflichtfelder. Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
              </p>
            </form>
          </div>
        </div>

        {/* Google Maps */}
        {showMap && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">So finden Sie uns</h3>
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(
                  `${practiceInfo.address.street}, ${practiceInfo.address.zip} ${practiceInfo.address.city}, ${practiceInfo.address.country}`
                )}&zoom=15`}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Diabetologie Derschlag"
              />
            </div>
            <div className="mt-4 text-center">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                  `${practiceInfo.address.street}, ${practiceInfo.address.zip} ${practiceInfo.address.city}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
              >
                <MapPin size={20} />
                Route planen
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
