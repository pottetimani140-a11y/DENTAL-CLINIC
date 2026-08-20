import { useState } from 'react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const serviceOptions = [
  'General Dentistry',
  'Cosmetic Dentistry',
  'Dental Implants',
  'Orthodontics',
  'Pediatric Dentistry',
  'Root Canal Treatment',
];

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
  '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
  '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
];

const initialForm = {
  name: '',
  email: '',
  phone: '',
  service: '',
  date: '',
  time: '',
  message: '',
};

export default function AppointmentForm() {
  const [ref, isVisible] = useAnimateOnScroll(0.1);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Full name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email';
    if (!form.phone.trim()) errs.phone = 'Phone number is required';
    else if (!/^[0-9+\s()-]{7,15}$/.test(form.phone)) errs.phone = 'Enter a valid phone number';
    if (!form.service) errs.service = 'Please select a service';
    if (!form.date) errs.date = 'Please select a date';
    if (!form.time) errs.time = 'Please select a time';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const inputBase =
    'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-text-dark text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-all placeholder:text-gray-400';

  const errorClass = 'border-red-400 focus:ring-red-200 focus:border-red-400';

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="appointment" className="py-20 lg:py-28 bg-gradient-to-br from-primary via-primary-light to-primary relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-teal/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Info */}
          <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-4">
              <span className="w-1.5 h-1.5 bg-teal rounded-full" />
              <span className="text-teal-light text-sm font-semibold uppercase tracking-wider">Book Now</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Book Your <span className="text-teal-light">Appointment</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Schedule a visit with our experienced dental team. We'll get back to you within 24 hours to confirm your appointment.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-teal-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Quick Response</h4>
                  <p className="text-white/60 text-sm">We confirm appointments within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-teal-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Safe & Sterile</h4>
                  <p className="text-white/60 text-sm">Fully sterilized equipment and protocols</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-teal-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Flexible Payments</h4>
                  <p className="text-white/60 text-sm">Multiple payment options available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            {submitted ? (
              <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10 text-center">
                <div className="w-20 h-20 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">Thank You!</h3>
                <p className="text-text-muted mb-6 leading-relaxed">
                  Your appointment request has been received. Our team will contact you shortly to confirm your booking.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm(initialForm); }}
                  className="bg-gradient-to-r from-secondary to-teal text-white font-semibold px-6 py-3 rounded-full hover:shadow-lg transition-all"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8 space-y-4"
                noValidate
              >
                <h3 className="text-xl font-bold text-primary mb-2">Fill in your details</h3>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-1">Full Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`${inputBase} ${errors.name ? errorClass : ''}`}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && <p id="name-error" className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Email & Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-1">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`${inputBase} ${errors.email ? errorClass : ''}`}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && <p id="email-error" className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text-dark mb-1">Phone *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={`${inputBase} ${errors.phone ? errorClass : ''}`}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                    {errors.phone && <p id="phone-error" className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-text-dark mb-1">Select Service *</label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={`${inputBase} ${!form.service ? 'text-gray-400' : ''} ${errors.service ? errorClass : ''}`}
                    aria-describedby={errors.service ? 'service-error' : undefined}
                  >
                    <option value="">Choose a service</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.service && <p id="service-error" className="text-red-500 text-xs mt-1">{errors.service}</p>}
                </div>

                {/* Date & Time */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-text-dark mb-1">Preferred Date *</label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handleChange}
                      min={today}
                      className={`${inputBase} ${errors.date ? errorClass : ''}`}
                      aria-describedby={errors.date ? 'date-error' : undefined}
                    />
                    {errors.date && <p id="date-error" className="text-red-500 text-xs mt-1">{errors.date}</p>}
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-text-dark mb-1">Preferred Time *</label>
                    <select
                      id="time"
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      className={`${inputBase} ${!form.time ? 'text-gray-400' : ''} ${errors.time ? errorClass : ''}`}
                      aria-describedby={errors.time ? 'time-error' : undefined}
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    {errors.time && <p id="time-error" className="text-red-500 text-xs mt-1">{errors.time}</p>}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-dark mb-1">Message (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Any specific concerns or notes..."
                    className={`${inputBase} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-secondary to-teal text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                  Book Appointment
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
